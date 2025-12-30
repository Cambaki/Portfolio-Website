export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: December 29, 2025</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using this portfolio website, you accept and agree to be bound by the terms and 
                provisions of this agreement. If you do not agree to these terms, please do not use this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Website</h2>
              <p className="text-gray-700 mb-4">
                This website is a personal portfolio showcasing my professional work, projects, and experience. 
                You may:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>View and browse the content for personal and professional evaluation</li>
                <li>Share links to this website</li>
                <li>Contact me through the provided contact methods</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Copy, reproduce, or redistribute the content without permission</li>
                <li>Use automated systems to scrape or collect data from this website</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use the website for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including but not limited to text, graphics, code, designs, logos, 
                images, and software, is the property of Cameron Hale and is protected by copyright and intellectual 
                property laws.
              </p>
              <p className="text-gray-700 mb-4">
                Unless otherwise stated, all projects and work samples displayed are © Cameron Hale {new Date().getFullYear()}.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                This website may contain links to third-party websites or services that are not owned or controlled 
                by me. I have no control over, and assume no responsibility for, the content, privacy policies, or 
                practices of any third-party websites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-4">
                This website and its content are provided "as is" without any warranties, express or implied. I make 
                no warranties or representations about the accuracy or completeness of the website's content.
              </p>
              <p className="text-gray-700 mb-4">
                I do not warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>The website will be available at all times or operate without interruption</li>
                <li>The website will be free from errors or defects</li>
                <li>Any defects will be corrected</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, I shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or 
                indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your use or inability to use the website</li>
                <li>Any unauthorized access to or use of the website</li>
                <li>Any content obtained from the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Information</h2>
              <p className="text-gray-700 mb-4">
                Projects displayed on this portfolio represent work completed by me, either independently or as part 
                of a team. Where applicable, collaborations and contributions are noted. Project descriptions are for 
                informational purposes and may not reflect current implementations if the projects are actively maintained.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                I reserve the right to modify or replace these Terms of Service at any time. Changes will be effective 
                immediately upon posting to this website. Your continued use of the website following any changes 
                constitutes acceptance of those changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact me through the contact form 
                available on this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to 
                conflict of law provisions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
