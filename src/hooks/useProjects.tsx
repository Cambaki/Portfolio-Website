import { useState, useEffect, createContext, ReactNode } from 'react';
import { Project } from '../types/project';
import { sampleProjects } from '../data/sampleProjects';

interface ProjectsContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Load projects from localStorage or use sample data
    const storedProjects = localStorage.getItem('portfolioProjects');
    if (storedProjects) {
      try {
        setProjects(JSON.parse(storedProjects));
      } catch (error) {
        console.error("Failed to parse stored projects:", error);
        setProjects(sampleProjects);
      }
    } else {
      // Use sample projects for initial state
      setProjects(sampleProjects);
    }
  }, []);

  useEffect(() => {
    // Save projects to localStorage whenever they change
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  return (
    <ProjectsContext.Provider value={{ projects, addProject, deleteProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  return { projects, deleteProject };
}
