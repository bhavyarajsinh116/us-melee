<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

$apiKey = 'a099a0da-75ab-4cf3-83ad-396bce404862';
$notificationEmail = 'your-email@gmail.com';
$fromEmail = 'Melee Diamonds <onboarding@resend.dev>';

$payload = json_decode((string) file_get_contents('php://input'), true);
$application = is_array($payload) && isset($payload['application']) && is_array($payload['application'])
    ? $payload['application']
    : null;

if (!$application) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid application data']);
    exit;
}

function field(array $application, string $name): string
{
    return htmlspecialchars((string) ($application[$name] ?? ''), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$company = field($application, 'companyName');
$emailPayload = [
    'from' => $fromEmail,
    'to' => [$notificationEmail],
    'subject' => 'New B2B Application - ' . $company,
    'html' => '<h2>New B2B Application Received</h2>'
        . '<p><strong>Application Number:</strong> ' . field($application, 'applicationNumber') . '</p>'
        . '<p><strong>Company:</strong> ' . $company . '</p>'
        . '<p><strong>Contact Name:</strong> ' . field($application, 'primaryContactName') . '</p>'
        . '<p><strong>Email:</strong> ' . field($application, 'email') . '</p>'
        . '<p><strong>Tax ID:</strong> ' . field($application, 'taxRegistrationNumber') . '</p>'
        . '<p><strong>Interest:</strong> ' . field($application, 'interest') . '</p>',
];

$curl = curl_init('https://api.resend.com/emails');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode($emailPayload),
]);

$responseBody = curl_exec($curl);
$status = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
$curlError = curl_error($curl);
curl_close($curl);

if ($responseBody === false) {
    http_response_code(502);
    echo json_encode(['message' => 'Unable to contact email service', 'detail' => $curlError]);
    exit;
}

http_response_code($status >= 200 && $status < 300 ? 200 : ($status ?: 502));
echo $responseBody;
