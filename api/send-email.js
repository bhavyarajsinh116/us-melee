module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        let payload = req.body;
        if (typeof payload === 'string') {
            try {
                payload = JSON.parse(payload);
            } catch (e) {
                payload = {};
            }
        }
        payload = payload || {};

        const application = payload.application;

        if (!application) {
            return res.status(400).json({ message: 'Invalid application data' });
        }

        const apiKey = process.env.RESEND_API_KEY || 'a099a0da-75ab-4cf3-83ad-396bce404862';
        const notificationEmail = process.env.NOTIFICATION_EMAIL || 'your-email@gmail.com';
        const fromEmail = process.env.FROM_EMAIL || 'Melee Diamonds <onboarding@resend.dev>';
        const company = application.companyName || 'Unknown Company';

        const emailPayload = {
            from: fromEmail,
            to: [notificationEmail],
            subject: `New B2B Application - ${company}`,
            html: `<h2>New B2B Application Received</h2>
                   <p><strong>Application Number:</strong> ${application.applicationNumber || 'N/A'}</p>
                   <p><strong>Company:</strong> ${company}</p>
                   <p><strong>Contact Name:</strong> ${application.primaryContactName || 'N/A'}</p>
                   <p><strong>Email:</strong> ${application.email || 'N/A'}</p>
                   <p><strong>Tax ID:</strong> ${application.taxRegistrationNumber || 'N/A'}</p>
                   <p><strong>Interest:</strong> ${application.interest || 'N/A'}</p>`
        };

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailPayload)
        });

        const data = await response.json().catch(() => ({}));
        return res.status(response.status >= 200 && response.status < 300 ? 200 : response.status).json(data);
    } catch (err) {
        console.error('Email API Error:', err);
        return res.status(500).json({ message: 'Internal server error', detail: err.message });
    }
}
