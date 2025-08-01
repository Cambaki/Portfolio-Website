import { Code, ClipboardList, Wrench, Plug } from 'lucide-react';

export default function ProfessionalSummary() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-black font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Professional Summary
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Currently pursuing a Bachelor's degree in Electrical Engineering with focus Power systems and Renewable Energy at Tuskegee University.
          </p>
        </div>

        <div className="prose prose-lg max-w-3xl mx-auto text-gray-700 space-y-6">
          <p className="mb-6">
            Driven Electrical Engineering student with extensive hands-on experience in both residential and commercial electrical renovations, including system upgrades, installations, and infrastructure modernization. Skilled in circuit design, panel assembly, and NEC-compliant rewiring, with strong knowledge of power systems, load planning, and sustainable energy solutions.
          </p>
          
          <p className="mb-6">
            Experienced in managing renovation projects from concept to completion—coordinating cross-functional teams, managing budgets, and ensuring on-time delivery. Known for strong teamwork, problem-solving, and on-site adaptability. Passionate about applying engineering principles to real-world challenges, with a long-term focus on innovation, energy systems, and impactful technical leadership.
          </p>
          
          <p className="mb-6">
            I'm passionate about creating a cleaner world for future generations. My goal is to revolutionize the field of renewable energy through power grid innovation, making sustainable energy more accessible and efficient for everyone.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-black text-center mb-8">Skills & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <Plug className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-black">Circuit Installation</h4>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-black">Programming Skills</h4>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <ClipboardList className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-black">Management Skills</h4>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-black">CAD/Simulation & Lab Tools</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
