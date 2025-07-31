import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import { Project } from '../types/project';

export default function UploadForm() {
  const navigate = useNavigate();
  const { addProject } = useProjects();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      if (!file.type.match(/image\/(jpeg|jpg|png|gif|webp)/)) return;
      
      const reader = new FileReader();
      reader.onload = () => {
        setImages(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxSize: 5242880 // 5MB
  });

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (images.length === 0) newErrors.images = 'At least one image is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    const newProject: Project = {
      id: Date.now().toString(),
      title,
      description,
      coverImage: images[0],
      images,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    };
    
    addProject(newProject);
    navigate('/projects');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your project title"
          />
          {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Project Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe your project..."
          />
          {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
        </div>
        
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors"
            placeholder="design, web, art, etc."
          />
          <p className="mt-1 text-xs text-gray-500">Add tags to help categorize your project (e.g., design, photography, art)</p>
        </div>
        
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Project Images
          </span>
          
          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive ? 'border-black bg-black-50' : 'border-gray-300 hover:border-black hover:bg-gray-50'
            } ${errors.images ? 'border-red-500' : ''}`}
          >
            <input {...getInputProps()} />
            <div className="space-y-2">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="text-sm text-gray-600">
                {isDragActive ? "Drop your images here" : "Drag & drop images here, or click to select files"}
              </p>
              <p className="text-xs text-gray-500">
                Supported formats: JPEG, PNG, GIF, WebP (max 5MB)
              </p>
            </div>
          </div>
          {errors.images && <p className="mt-1 text-sm text-red-500">{errors.images}</p>}

          {images.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Uploaded Images ({images.length})</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="h-24 rounded-lg overflow-hidden border border-gray-200">
                      <img src={image} alt={`Upload ${index + 1}`} className="h-full w-full object-cover" />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                    {index === 0 && (
                      <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-1 text-center">
                        Cover
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Upload Project
          </button>
        </div>
      </div>
    </form>
  );
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects(prev => [...prev, project]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  return { projects, addProject, deleteProject };
}
