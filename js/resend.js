async function sendEmail(application) {
    try {
        // Call our own server. The server talks to Resend so the browser never
        // makes a cross-origin request (and never receives the Resend API key).
        const response = await fetch('api/send-email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                application
            })
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok) {
            console.error('Resend Error:', result);
            throw new Error(result.message || 'Failed to send email');
        }

        console.log('Email sent successfully:', result);

        return result;

    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
}
