import { Code, GraduationCap, Palette } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-black font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Combining Design & Technology
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I create interactive experiences that blend aesthetics and functionality to engage users and solve real-world problems.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                  <Code className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Interactive Development</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                I build responsive web applications and interactive experiences using modern frameworks and technologies that engage users.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                  <Palette className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">UX/UI Design</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                I create intuitive interfaces and user experiences that balance beauty and functionality while solving real user problems.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Education</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Currently pursuing my degree at UC Berkeley, focusing on interactive media, user experience design, and front-end development.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
