import { Project } from '../types/project';

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Residential Home Rewiring',
    description: `Rewiring a multi-story residential home challenged me to apply both technical knowledge and critical problem-solving in a real-world, high-stakes environment. I had to assess outdated and potentially unsafe electrical systems, develop a safe and code-compliant wiring plan, and execute installations across multiple floors while maintaining coordination with structural elements, existing architecture, and other trades.

This project deepened my understanding of circuit design, load balancing, and grounding techniques, while sharpening my ability to read gray-900prints, troubleshoot hidden issues, and work efficiently under time and logistical constraints. Through this experience, I gained confidence in my electrical installation skills, strengthened my project management abilities, and learned how to communicate effectively with homeowners, inspectors, and team members to deliver a safe, modern electrical infrastructure.

The included photos and video show the process of running new wires, upgrading the panel, and ensuring everything met code. This hands-on work was both challenging and incredibly rewarding.`,
    coverImage: '/IMG_5819.jpeg',
    images: [
      '/IMG_5819.jpeg',
      '/IMG_5866.jpeg',
      '/IMG_5920.png',
      '/IMG_5922.png'
    ],
    videoUrl: '/Rewire.mp4',
    tags: ['Electrical', 'Residential', 'Hands-on', 'Safety'],
    date: 'Mar 2025'
  },
  {
    id: '2',
    title: 'Home Renovation Project',
    description: `This project involved a full-scale renovation of a residential home, including electrical, plumbing, interior, and exterior upgrades. The process was documented with before and after videos, as well as a comprehensive set of progress photos.

The before video shows the original state of the home, while the after video highlights the completed transformation. The included images capture key stages and details throughout the renovation.`,
    coverImage: '/IMG_5924.jpeg',
    images: [
      '/IMG_5924.jpeg',
      '/IMG_5830.jpeg',
      '/IMG_6138.png',
    ],
    videoUrl: '/House Reno (Before).mp4',
    videoUrlAfter: '/House Reno (After).mp4',
    tags: ['Renovation', 'Residential', 'Project Management', 'Hands-on'],
    date: 'Mar 2025'
  },
  {
    id: '3',
    title: 'Hydroelectric Generation System Simulation',
    description: `This project involved designing and simulating a hydroelectric generation system using Python to model energy conversion, efficiency, and power output. I developed computational models to analyze water flow dynamics, turbine performance, and electrical generation under various operating conditions.

The simulation incorporates real-world engineering constraints and environmental factors to predict system performance and optimize design parameters. Through this project, I gained deeper insights into renewable energy systems, fluid dynamics, and the integration of mechanical and electrical engineering principles.

The work demonstrates my ability to apply programming skills to complex engineering problems and bridge theoretical knowledge with practical applications in sustainable energy technology.`,
    coverImage: '/HydroElectric.JPG',
    images: [
      '/newplot (1).png',
      '/newplot.png',
      '/image.png'
    ],
    githubUrl: 'https://github.com/Cambaki/HydroElectric',
    liveUrl: 'https://hydroelectric.streamlit.app/',
    tags: ['Python', 'Simulation', 'Renewable Energy', 'Engineering', 'Hydroelectric'],
    date: 'Apr 2025'
  }
];
