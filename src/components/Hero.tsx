import { Link } from 'react-router-dom';
import { Briefcase, Camera, Handshake } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16">
            <div className="text-center lg:flex lg:items-center lg:text-left lg:gap-12">
              <div className="lg:w-1/3 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                    <img 
                      src="/Image (1).jpeg"
                      alt="Cameron Hale"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Failed to load hero image: /Image (1).jpeg');
                        // Fallback to another image if this one fails
                        e.currentTarget.src = '/IMG_5819.jpeg';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                    <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
                      CH
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 mt-8 lg:mt-0">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white text-black border border-black">
                    Electrical Engineering Student
                  </span>
                  <span className="ml-2 px-3 py-1 text-xs font-medium rounded-full bg-black text-white">
                    Tuskegee University
                  </span>
                </div>
                
                <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl">
                  <span className="block">Hi, I'm</span>
                  <span className="block text-black">Cameron Hale</span>
                </h1>
                <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl">
                  An engineering student with aspirations to revolutionize the field of renewable energy through power grid innovation.
                </p>
                
                <div className="mt-6 flex items-center justify-center lg:justify-start space-x-4">
                  <a
                    href="https://www.instagram.com/camr.elll?igsh=NTc4MTIwNjQ2YQ=="
                    className="text-gray-600 hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Camera className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/cameron-j-hale15"
                    className="text-gray-600 hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Briefcase className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://app.joinhandshake.com/profiles/amvcy8?utm_source=linkedin&utm_medium=profile&utm_campaign=profile"
                    className="text-gray-600 hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Handshake className="h-6 w-6" />
                    <span className="sr-only">Handshake</span>
                  </a>
                </div>
                
                <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/projects"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 md:py-4 md:text-lg md:px-10"
                    >
                      View My Work
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/resume"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 border-black md:py-4 md:text-lg md:px-10"
                    >
                      Resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
