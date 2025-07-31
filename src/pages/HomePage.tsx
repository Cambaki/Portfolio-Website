import Hero from '../components/Hero';
import ProfessionalSummary from '../components/ProfessionalSummary';
import ProjectGrid from '../components/ProjectGrid';
import { sampleProjects } from '../data/sampleProjects';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  // Use sampleProjects directly
  const featuredProjects = sampleProjects.slice(0, 3);

  return (
    <div>
      <Hero />
      <ProfessionalSummary />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-black font-semibold tracking-wide uppercase">Portfolio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Projects
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Check out some of my recent academic and personal work
            </p>
          </div>
          <ProjectGrid projects={featuredProjects} />
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-black"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
