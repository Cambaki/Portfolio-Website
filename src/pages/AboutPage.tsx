export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Get to know more about my background, goals, and interests!
        </p>
      </div>

      {/* Short Bio */}
      <section className="mb-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-black mb-2">Short Bio</h2>
        <p className="text-gray-700">
          Hi, I'm Cameron Hale, an Electrical Engineering student with a focus on Power Systems energy efficiency, and applied automation. I've led  hands-on projects hat included rewiring rsidential infastructure to code, simulating hydroelectric propulsion systems using Python, and managing full-property renovations from planning to execution. My experiance bridges both fieldwork and technical modeling, combinig real-world problem solving with software-driven insight. I'm driven by a commitment to designing smarter, safer, and more sustainable electrical systems. Whether in homes machines or in future physical applications.  
        </p>
      </section>

      {/* Mission */}
      <section className="mb-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-black mb-2">My Mission</h2>
        <p className="text-gray-700">
          My mission is to engineer practical, energy-efficient solutions that advance how we power and sustain the world around us. I aim to contribute to the future of electrical and power systems by integrating code-based simulations, smart design, and field-tested techniques. Whether working independently or as part of a team, I aim to create technlogies that not only meet technical demands but also support sustainable and resiliant communities.
        </p>
      </section>

      {/* Fun Facts / Interests */}
      <section className="mb-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-black mb-2">Fun Facts & Interests</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>I love hiking and exploring the outdoors.</li>
          <li>Powerbuilding is one of my favorite hobbies; I enjoy pushing my limits in the gym.</li>
          <li>I'm an avid reader, especially of science fiction and engineering literature.</li>
          <li>I enjoy coding and experimenting with new technologies in my free time.</li>
          <li>Music is a big part of my life; I play guitar and enjoy various genres from rock to Bossa Nova </li>
          <li>I enjoy volunteering in my community and mentoring younger students.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-black mb-2">Let's Connect!</h2>
        <p className="text-gray-700 mb-4">
          Interested in collaborating, networking, or just want to say hi? Feel free to reach out!
        </p>
        <a
          href="mailto:Clambak874@gmail.com"
          className="inline-block px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-black"
        >
          Email Me
        </a>
      </section>

      {/* About This Website - New Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-black mb-6">About This Website</h2>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg mb-4">
            This portfolio website was built as a comprehensive showcase of my engineering projects, 
            academic journey, and professional development. It serves as both a digital resume and 
            a detailed project gallery, demonstrating my technical skills across multiple disciplines.
          </p>
          
          <h3 className="text-xl font-semibold text-black mt-6 mb-3">Technical Implementation</h3>
          <p className="mb-4">
            The website is built using modern web technologies including React, TypeScript, and 
            Tailwind CSS. It features a responsive design that works seamlessly across desktop, 
            tablet, and mobile devices. The architecture emphasizes clean code, component reusability, 
            and optimal user experience.
          </p>
          
          <h3 className="text-xl font-semibold text-black mt-6 mb-3">Key Features</h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Interactive project gallery with detailed case studies</li>
            <li>Integrated video content and image carousels</li>
            <li>Direct links to live projects and GitHub repositories</li>
            <li>Responsive design optimized for all devices</li>
            <li>Clean, professional interface focused on content presentation</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-black mt-6 mb-3">Purpose & Goals</h3>
          <p className="mb-4">
            This platform allows me to present my work in a structured, accessible format that 
            goes beyond traditional resumes. Each project includes comprehensive documentation, 
            technical details, and visual evidence of my capabilities. The website demonstrates 
            not only my engineering projects but also my proficiency in web development and 
            digital design.
          </p>
          
          <p className="text-sm text-gray-600 mt-6 italic">
            Built with passion for engineering and commitment to excellence in both technical 
            implementation and user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
