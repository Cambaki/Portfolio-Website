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

      {/* NFC Tap Card highlight (separate from project list) */}
      <div className="mt-16 bg-white shadow-sm border border-gray-200 rounded-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">NFC Tap Card</p>
            <h2 className="text-2xl font-bold text-black">Tap-to-open portfolio card</h2>
            <p className="text-gray-700">
              I built a physical NFC card that opens this portfolio instantly when tapped on a phone. It replaced an
              old Linktree flow so people land here directly with one tap.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-black text-white rounded-full text-sm">NFC</span>
              <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-sm">Hardware</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-900 rounded-full text-sm">Instant Share</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-900"
              >
                View live site
              </a>
              <a
                href="mailto:clambak874@gmail.com?subject=NFC%20Card%20Request"
                className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-black hover:bg-gray-50"
              >
                Ask about the card
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/NFC%20Card/attachments%20(1)/IMG_0052.jpg"
              alt="Front of NFC portfolio card"
              className="rounded-lg shadow-sm border border-gray-200 object-cover w-full h-full"
            />
            <img
              src="/NFC%20Card/attachments%20(1)/IMG_0368.jpg"
              alt="Back of NFC portfolio card"
              className="rounded-lg shadow-sm border border-gray-200 object-cover w-full h-full"
            />
            <img
              src="/NFC%20Card/attachments%20(1)/602E85B8-1432-48A0-8C9A-FE528EAC54C1.PNG"
              alt="NFC card artwork"
              className="rounded-lg shadow-sm border border-gray-200 object-cover w-full h-full col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
