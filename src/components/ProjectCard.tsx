import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/project';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Use safe access for optional images
  const allImages = [project.coverImage, ...(project.images || [])].filter(Boolean);
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Link
      to={`/project/${project.id}`}
      className="group flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full"
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden flex items-center justify-center bg-gray-100">
        {allImages.length > 0 ? (
          <img
            src={allImages[currentImage]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => {
              console.error(`Failed to load image: ${allImages[currentImage]}`);
            }}
          />
        ) : (
          <div className="text-gray-500">No image available</div>
        )}
        
        {/* Always show arrows if more than 1 image */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full p-2 hover:bg-opacity-90 z-20 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full p-2 hover:bg-opacity-90 z-20 transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
              {currentImage + 1} / {allImages.length}
            </div>
          </>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {project.description.length > 150 
            ? `${project.description.substring(0, 150)}...` 
            : project.description
          }
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs font-medium rounded-full bg-black text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">{project.date}</span>
        </div>
      </div>
    </Link>
  );
}
