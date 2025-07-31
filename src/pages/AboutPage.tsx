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
    </div>
  );
}
