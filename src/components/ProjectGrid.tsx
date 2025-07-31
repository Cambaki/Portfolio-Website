import { useState, useEffect } from 'react';
import { Project } from '../types/project';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    // Extract all unique tags from projects
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    setAllTags(Array.from(tags));

    // Filter projects based on selected tag
    if (selectedTag) {
      setFilteredProjects(projects.filter(project => 
        project.tags.includes(selectedTag)
      ));
    } else {
      setFilteredProjects(projects);
    }
  }, [projects, selectedTag]);

  return (
    <div>
      {allTags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
              selectedTag === null
                ? 'bg-black text-white'
                : 'bg-white text-black border border-black hover:bg-gray-100'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                selectedTag === tag
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-black hover:bg-gray-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found for the selected tag.</p>
        </div>
      )}
    </div>
  );
}
