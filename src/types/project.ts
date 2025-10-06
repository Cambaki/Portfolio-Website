export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images?: string[];
  videoUrl?: string;
  isShort?: boolean;
  videoUrlConstruction?: string;
  isShortConstruction?: boolean;
  videoUrlAfter?: string;
  isShortAfter?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  date: string;
}

