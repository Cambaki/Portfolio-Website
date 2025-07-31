import { Book, Briefcase, Download, FileText, MapPin } from 'lucide-react';

// Make sure to put your PDF in the public folder or import it if using a bundler
// Example for public folder:
const resumePdfUrl = "/Cameron Hale Official Resume.pdf";

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Resume</h1>
        <a
          href={resumePdfUrl}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-900"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="h-5 w-5 mr-2" />
          Download Resume
        </a>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 className="text-lg leading-6 font-medium text-black flex items-center">
            <FileText className="h-5 w-5 mr-2 text-black" />
            Personal Information
          </h2>
        </div>
        <div className="px-4 py-5 sm:p-6 text-gray-700 space-y-3">
          <p className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-gray-400" />
            Tuskegee, AL 36083
          </p>
          <p>
            <a href="mailto:Clambak874@gmail.com" className="text-black hover:text-gray-700">
              Clambak874@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+15108603918" className="text-black hover:text-gray-700">
              (510) 860-3918
            </a>
          </p>
          <p>
            <a href="https://linkedin.com/in/cameron-j-hale15" className="text-black hover:text-gray-700" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 className="text-lg leading-6 font-medium text-black flex items-center">
            <Book className="h-5 w-5 mr-2 text-black" />
            Education
          </h2>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div>
            <div className="flex justify-between">
              <h3 className="text-lg font-medium text-black">Tuskegee University</h3>
            </div>
            <p className="text-black font-medium">BS in Electrical Engineering</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 className="text-lg leading-6 font-medium text-black">Skills</h2>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-medium text-black mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Load Distribution & Balancing</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Circuit Installation & Protection</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Energy Efficiency</span>
              </div>
            </div>
            <div>
              <h3 className="text-md font-medium text-black mb-2">Software & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">AutoCAD</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">LTspice</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Multisim</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Lab Instrumentation</span>
              </div>
            </div>
            <div>
              <h3 className="text-md font-medium text-black mb-2">Programming</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">C++</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-sm">MATLAB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 className="text-lg leading-6 font-medium text-black flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-black" />
            Experience
          </h2>
        </div>
        <div className="px-4 py-5 sm:p-6 space-y-6">
          <div>
            <h3 className="text-md font-semibold text-black">Guess Who's Flipping – Project Manager</h3>
            <p className="text-gray-600">Pinole, CA | 01/21 – Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Managed renovation projects for rental properties and home flips, overseeing electrical, plumbing, HVAC, roofing, and interior upgrades from start to finish.</li>
              <li>Gained hands-on experience in project planning, site leadership, and system-level integration across multidisciplinary renovation tasks.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-black">Carter's Electric Co. – Apprentice Electrician</h3>
            <p className="text-gray-600">Richmond, CA | 09/23 – Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Completed panel upgrades, circuit installations, and load balancing for HVAC, lighting, and other systems.</li>
              <li>Installed EV chargers, ran conduit, and upgraded lighting systems to improve energy efficiency and safety.</li>
              <li>Performed code-compliant installations, interpreted blueprints and wiring diagrams, and supported project coordination and material planning.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-black">Department of Public Works – B2SF IT Intern</h3>
            <p className="text-gray-600">[San Francisco, CA] | [Summer 2024]</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Assisted with IT support tasks including troubleshooting hardware and software issues for department staff.</li>
              <li>Helped maintain and update computer systems, performed routine maintenance, and supported network operations.</li>
              <li>Gained experience in public sector IT operations and customer service.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 className="text-lg leading-6 font-medium text-black flex items-center">
            <Book className="h-5 w-5 mr-2 text-black" />
            Projects
          </h2>
        </div>
        <div className="px-4 py-5 sm:p-6 space-y-6">
          <div>
            <h3 className="text-md font-semibold text-black">Residential Home Rewiring</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Performed full-home rewiring, replacing outdated conductors and installing new circuits for lighting, outlets, and HVAC systems.</li>
              <li>Upgraded electrical panel to accommodate higher power demands, including installation of circuit breakers and overcurrent protection devices.</li>
              <li>Tested and troubleshot system after installation, performing voltage checks, continuity tests, and verifying grounding for safety and efficiency.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-black">Full Renovation Project</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Coordinated trades and subcontractors, ensuring timely project completion and adherence to budget and quality standards.</li>
              <li>Upgraded electrical systems, including rewiring, panel upgrades, and installation of energy-efficient lighting and outlets.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-black">Hydroelectric Propulsion System Simulation</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Developed a Python-based simulation to model the mechanics and efficiency of a hydroelectric propulsion system, using fluid dynamics and power generation principles.</li>
              <li>Designed algorithms to simulate energy conversion from water flow to mechanical propulsion, optimizing efficiency and performance.</li>
              <li>Analyzed system behavior under different conditions (flow rates, turbine efficiency) to predict real-world performance and identify potential improvements.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
