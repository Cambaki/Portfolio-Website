import ProjectGrid from '../components/ProjectGrid';
import { sampleProjects } from '../data/sampleProjects';

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">My Projects</h1>
        <p className="text-xl text-gray-600">
          Explore my hands-on and technical projects. Click any project to see more details and photos!
        </p>
      </div>
      <ProjectGrid projects={sampleProjects} />
    </div>
  );
}
