import http.server
import socketserver
import os
import sys
import json
import urllib.request
import urllib.error

PORT = int(os.environ.get('PORT', 8000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_POST(self):
        # Handle email submission API endpoint
        if self.path == '/api/send-email.php':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                payload = json.loads(post_data.decode('utf-8'))
                application = payload.get('application', {})
                api_key = 'a099a0da-75ab-4cf3-83ad-396bce404862'
                company = application.get('companyName', 'Unknown Company')

                email_payload = {
                    'from': 'Melee Diamonds <onboarding@resend.dev>',
                    'to': ['your-email@gmail.com'],
                    'subject': f'New B2B Application - {company}',
                    'html': f"""<h2>New B2B Application Received</h2>
<p><strong>Application Number:</strong> {application.get('applicationNumber', 'N/A')}</p>
<p><strong>Company:</strong> {company}</p>
<p><strong>Contact Name:</strong> {application.get('primaryContactName', 'N/A')}</p>
<p><strong>Email:</strong> {application.get('email', 'N/A')}</p>
<p><strong>Tax ID:</strong> {application.get('taxRegistrationNumber', 'N/A')}</p>
<p><strong>Interest:</strong> {application.get('interest', 'N/A')}</p>"""
                }

                req = urllib.request.Request(
                    'https://api.resend.com/emails',
                    data=json.dumps(email_payload).encode('utf-8'),
                    headers={
                        'Authorization': f'Bearer {api_key}',
                        'Content-Type': 'application/json'
                    },
                    method='POST'
                )
                with urllib.request.urlopen(req, timeout=15) as resp:
                    resp_data = resp.read()
                    self.send_response(resp.status)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(resp_data)
            except urllib.error.HTTPError as e:
                err_data = e.read()
                self.send_response(e.code)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(err_data)
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'message': str(e)}).encode('utf-8'))
        else:
            self.send_error(404, "Endpoint not found")

    def do_GET(self):
        # Support clean URLs by resolving extensionless paths to .html
        req_path = self.path.split('?')[0].split('#')[0]
        if req_path != '/' and not req_path.endswith('/'):
            full_path = os.path.join(DIRECTORY, req_path.lstrip('/'))
            if not os.path.exists(full_path) and os.path.exists(full_path + '.html'):
                self.path = req_path + '.html'
        super().do_GET()

if __name__ == '__main__':
    # Allow address reuse
    socketserver.ThreadingTCPServer.allow_reuse_address = True
    with socketserver.ThreadingTCPServer(("", PORT), CustomHandler) as httpd:
        print("====================================================")
        print("Melee Diamonds Python HTTP Server is running!")
        print(f"Local URL:  http://localhost:{PORT}")
        print(f"Admin URL:  http://localhost:{PORT}/admin/index.html")
        print("====================================================")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
