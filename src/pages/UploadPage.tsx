import UploadForm from '../components/UploadForm';

export default function UploadPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upload Project</h1>
        <p className="mt-2 text-gray-600">Add a new project to your portfolio</p>
      </div>
      
      <UploadForm />
    </div>
  );
}
