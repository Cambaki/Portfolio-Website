export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: December 29, 2025</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to my portfolio website. I respect your privacy and am committed to protecting any personal 
                information you may share with me. This Privacy Policy explains how information is collected, used, 
                and safeguarded when you visit this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information I Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Information You Provide</h3>
              <p className="text-gray-700 mb-4">
                When you contact me through the contact form or email, I may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your name</li>
                <li>Email address</li>
                <li>Any message or information you choose to provide</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                Like most websites, this site may automatically collect certain technical information through standard 
                web technologies, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How I Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                Any information collected is used solely for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>To respond to your inquiries and communicate with you</li>
                <li>To improve the website and user experience</li>
                <li>To understand how visitors use the site</li>
              </ul>
              <p className="text-gray-700 mb-4">
                I will never sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                This website may use cookies and similar technologies to enhance your browsing experience. Cookies are 
                small text files stored on your device. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                This website may use third-party services for hosting, analytics, or other functionality. These services 
                may collect information as governed by their own privacy policies. Examples may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Web hosting providers</li>
                <li>Analytics services (if applicable)</li>
                <li>Content delivery networks</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                I take reasonable measures to protect your information from unauthorized access, alteration, or destruction. 
                However, no method of transmission over the internet is 100% secure, and I cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Request access to any personal information I hold about you</li>
                <li>Request correction or deletion of your personal information</li>
                <li>Opt out of any communications from me</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                I may update this Privacy Policy from time to time. Any changes will be posted on this page with an 
                updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Me</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or how your information is handled, please contact 
                me through the contact form on this website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
