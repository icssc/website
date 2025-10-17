export default function Page() {
    return (
        <div className="prose max-w-4xl mx-auto p-6 space-y-4">
            <h1>Privacy Policy</h1>
            
            <p><strong>Effective Date:</strong> October 17, 2025<br />
            <strong>Last Updated:</strong> October 17, 2025</p>

            <h2>1. Who We Are</h2>

            <p>This Privacy Policy describes how ICSSC ("we", "our", or "us") collects, uses, and protects information when you use our web application available at https://www.icssc.club (the "Service").</p>

            <p>We are a student-led project developed at University of California, Irvine, currently maintained by the ICSSC team. Our applications are used by UCI students to better navigate and connect with UCI.</p>

            <h2>2. Information We Collect</h2>

            <p>We only collect the minimum data required for the app to function. Depending on your use, this may include:</p>

            <h3>a. Google User Data</h3>

            <p>If you choose to sign in using your Google Account, we may request access to limited Google user information through OAuth 2.0, including:</p>

            <ul>
                <li>Basic profile info (name, email address, profile picture) for user identification.</li>
                <li>Other Google data (e.g. calendar) strictly limited to the scopes you approve on the consent screen.</li>
            </ul>

            <p>We do not collect, store, or share any Google data beyond what is necessary for core functionality.</p>

            <h3>b. App Usage Data</h3>

            <ul>
                <li>We may collect anonymous usage data such as browser type, device type, or app activity logs for improving performance and reliability.</li>
                <li>No personally identifiable information is included in these analytics.</li>
            </ul>

            <h2>3. How We Use the Information</h2>

            <p>We use collected information solely for the following purposes:</p>

            <ul>
                <li>To provide, maintain, and improve our Service.</li>
                <li>To authenticate users via Google Sign-In.</li>
                <li>To save and manage user preferences or course-related data.</li>
                <li>To troubleshoot issues and ensure reliable operation.</li>
            </ul>

            <p>We do not sell, rent, or share your personal data with third parties.</p>

            <h2>4. Data Storage & Security</h2>

            <ul>
                <li>User data is stored securely on AWS and Cloudflare.</li>
                <li>We use encryption in transit (HTTPS) and encryption at rest for sensitive data.</li>
                <li>Access to data is limited to authorized team members only.</li>
                <li>If you revoke the app's access in your Google Account Permissions, we will no longer have access to your Google data.</li>
            </ul>

            <h2>5. Data Retention & Deletion</h2>

            <ul>
                <li>We retain user data only for as long as needed to provide the Service.</li>
                <li>You can request deletion of your account or data by contacting us at icssc@uci.edu. Upon request, we will delete your data from our systems within a reasonable timeframe.</li>
            </ul>

            <h2>6. Sharing and Disclosure</h2>

            <p>We do not share personal data with third parties except:</p>

            <ul>
                <li>When required by law or government request.</li>
                <li>To trusted infrastructure providers (e.g. AWS and Cloudflare) who process data on our behalf and under confidentiality agreements.</li>
            </ul>

            <p>We do not transfer or sell user data to advertisers or marketers.</p>

            <h2>7. Your Rights</h2>

            <p>You may:</p>

            <ul>
                <li>Access and review your personal information.</li>
                <li>Revoke permissions granted to our app via your Google Account settings.</li>
                <li>Request data deletion or correction by emailing icssc@uci.edu.</li>
            </ul>

            <p>We comply with applicable privacy laws.</p>

            <h2>8. Third-Party Services</h2>

            <p>Our Service may contain links to external websites or services. We are not responsible for the privacy practices of those third parties. Please review their privacy policies separately.</p>

            <h2>9. Changes to This Policy</h2>

            <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a new "Effective Date."</p>

            <p>Your continued use of the Service after changes are posted constitutes your acceptance of the revised policy.</p>

            <h2>10. Contact Us</h2>

            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>

            <p>📧 icssc@uci.edu<br />
            🌐 https://www.icssc.club</p>
        </div>
    )
}