import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, Tag, Github, ExternalLink } from 'lucide-react';
import { sampleProjects } from '../data/sampleProjects';
import YouTubeVideo from '../components/YouTubeVideo';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const foundProject = sampleProjects.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!foundProject) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project not found</h2>
        <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900">
          Back to Projects
        </Link>
      </div>
    );
  }
  const allImages = [foundProject.coverImage, ...(foundProject.images || [])].filter(Boolean);

  const handlePrevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/projects"
          className="inline-flex items-center text-gray-600 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative h-80 sm:h-96 md:h-[28rem] bg-gray-100">
          {allImages.length > 0 && (
            <img
              src={`${allImages[currentImageIndex]}?v=${Date.now()}`}
              alt={foundProject.title}
              className="w-full h-full object-contain"
            />
          )}
          {allImages.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full p-2 hover:bg-opacity-90 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full p-2 hover:bg-opacity-90 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {currentImageIndex + 1} / {allImages.length}
              </div>
            </>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-black mb-4">{foundProject.title}</h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{foundProject.date}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Tag size={16} />
              <div className="flex flex-wrap gap-2">
                {foundProject.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs font-medium rounded-full bg-black text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none mb-6">
            <p className="text-gray-700 whitespace-pre-line">{foundProject.description}</p>
          </div>
          
          {(foundProject.githubUrl || foundProject.liveUrl) && (
            <div className="flex gap-4 mb-6">
              {foundProject.githubUrl && (
                <a
                  href={foundProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View Code
                </a>
              )}
              {foundProject.liveUrl && (
                <a
                  href={foundProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          )}

          {foundProject.videoUrl && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-black mb-3">Before Video</h3>
              <video controls width="100%" className="rounded-lg shadow">
                <source src={foundProject.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {foundProject.videoUrlConstruction && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-black mb-3">Construction Video</h3>
              {foundProject.videoUrlConstruction.startsWith('/') ? (
                // Regular video file
                <video controls width="100%" className="rounded-lg shadow">
                  <source src={foundProject.videoUrlConstruction} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                // YouTube video
                <YouTubeVideo 
                  videoId={foundProject.videoUrlConstruction} 
                  title="Construction Process"
                />
              )}
            </div>
          )}

          {foundProject.videoUrlAfter && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-black mb-3">After Video</h3>
              <video controls width="100%" className="rounded-lg shadow">
                <source src={foundProject.videoUrlAfter} type="video/mp4" />
                <source src={foundProject.videoUrlAfter} type="video/mov" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
