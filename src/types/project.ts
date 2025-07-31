export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images?: string[];
  videoUrl?: string;
  videoUrlConstruction?: string;
  videoUrlAfter?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  date: string;
}

