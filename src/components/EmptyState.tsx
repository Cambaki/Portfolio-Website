import { Link } from 'react-router-dom';
import { ArrowRight, Image } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="text-center py-16 px-4">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-black flex items-center justify-center">
        <Image className="h-12 w-12 text-black" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No projects yet</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        Start showcasing your work by adding your first project. Upload images and provide details about your creative work.
      </p>
      <Link
        to="/upload"
        className="inline-flex items-center px-5 py-3 text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-black transition-colors"
      >
        Upload Your First Project
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  );
}
