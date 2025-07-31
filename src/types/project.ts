export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images?: string[];
  videoUrl?: string;
  videoUrlConstruction?: string;
  videoUrlAfter?: string;
  youtubeVideoConstruction?: string;  // Add YouTube-specific field
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  date: string;
}

{
  id: '2',
  title: 'Home Renovation Project',
  description: `This project involved a full-scale renovation of a residential home, including electrical, plumbing, interior, and exterior upgrades. The process was documented with before, construction, and after videos, as well as a comprehensive set of progress photos.

The before video shows the original state of the home, the construction video captures the renovation process, and the after video highlights the completed transformation. The included images capture key stages and details throughout the renovation.`,
  coverImage: '/Front View.jpeg',
  images: [
    '/IMG_5985.jpeg',
    '/IMG_6138.png',
  ],
  videoUrl: '/House Reno (Before).mp4',        // Keep small videos as files
  videoUrlConstruction: 'YOUR_YOUTUBE_ID',     // ← Replace with YouTube video ID
  videoUrlAfter: '/Final Product.MP4',        // Keep small videos as files
  tags: ['Renovation', 'Residential', 'Project Management', 'Hands-on'],
  date: 'Mar 2025'
},
