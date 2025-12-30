import { Project } from '../types/project';

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Residential Home Rewiring',
    description: `Rewiring a multi-story residential home challenged me to apply both technical knowledge and critical problem-solving in a real-world, high-stakes environment. I had to assess outdated and potentially unsafe electrical systems, develop a safe and code-compliant wiring plan, and execute installations across multiple floors while maintaining coordination with structural elements, existing architecture, and other trades.

This project deepened my understanding of circuit design, load balancing, and grounding techniques, while sharpening my ability to read blueprints, troubleshoot hidden issues, and work efficiently under time and logistical constraints. Through this experience, I gained confidence in my electrical installation skills, strengthened my project management abilities, and learned how to communicate effectively with homeowners, inspectors, and team members to deliver a safe, modern electrical infrastructure.

The included photos and video show the process of running new wires, upgrading the panel, and ensuring everything met code. This hands-on work was both challenging and incredibly rewarding.`,
    coverImage: '/Project1-cover-new.jpeg', // Changed filename
    images: [
      '/Panel In.jpeg',
      '/IMG_5920.png',
      '/IMG_5922.png'
    ],
    videoUrl: 'wt6sBKo_mw4',
    isShort: true,
    tags: ['Electrical', 'Residential', 'Hands-on', 'Safety'],
    date: 'Mar 2025'
  },
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
    videoUrl: 'PHOR7BfN6Y4',
    videoUrlConstruction: 'eVUTj0d8Bec',
    videoUrlAfter: 'nhDTA77VUPU',
    isShortAfter: true,
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
      '/newplot.png',
      '/newplot(1).png',
      '/image.png'
    ],
    githubUrl: 'https://github.com/Cambaki/HydroElectric',
    liveUrl: 'https://hydroelectric.streamlit.app/',
    tags: ['Python', 'Simulation', 'Renewable Energy', 'Engineering', 'Hydroelectric'],
    date: 'Apr 2025'
  },
  {
    id: '4',
    title: 'Delco Radio Auxiliary Port Integration',
    description: `This project involved retrofitting an older Delco radio with a modern auxiliary input port to enable connectivity with smartphones and modern audio devices. The challenge was to integrate new circuitry without compromising the original radio's functionality or aesthetic.

The modification required careful analysis of the existing circuit board, identification of appropriate signal paths, and precise soldering of new components. I had to understand the radio's internal architecture, ensure proper impedance matching, and create a clean installation that appeared factory-original. 

The pictures depict a basic wiring schematic along with the circuit board before the modification, showcasing the tools used and the integration of new components. The final installation maintains the classic look while providing modern functionality.

This project demonstrates my ability to bridge old and new technologies, work with automotive electronics, and solve real-world problems through creative engineering solutions. The end result was a fully functional auxiliary input that maintained the classic appearance while adding modern convenience.`,
    coverImage: '/Top-View-Radio.jpeg',
    images: [
      '/Female Aux Port.jpeg',
      '/Soldering Template.png',
      '/Wiring-Schematic.PNG',
      '/Final-Input.jpeg'
    ],
    tags: ['Electronics', 'Automotive', 'Circuit Modification', 'Retrofitting', 'Hands-on'],
    date: 'Feb 2025'
  },
  {
    id: '5',
    title: 'ECE Course Prerequisite & Progress Tracker',
    description: `Recognizing a critical need for better academic planning tools in the Electrical and Computer Engineering department, I developed a comprehensive course prerequisite and progress tracker to help students navigate their path to graduation. This interactive flowchart enables students to visualize course dependencies, track their progress toward degree completion, and make informed decisions about their academic schedule.

Working independently but in collaboration with school administrators, I built this system using JavaScript and deployed it on Vercel for easy student access. The tracker provides students with a clear roadmap of required courses, prerequisite chains, and their current standing toward graduation requirements. It features an intuitive interface that organizes courses by year (Freshman through Senior), color-codes courses by status (completed, in progress, blocked), and displays detailed course information including credits, descriptions, and prerequisites.

The application displays real-time progress metrics showing total courses completed, total credits earned, and remaining requirements - simplifying what was previously a complex and often confusing process of course planning. Students can toggle between Electrical Engineering and Computer Engineering tracks to see their specific curriculum requirements.

The project demonstrates my ability to identify real-world problems, develop practical web-based solutions, and work within institutional frameworks to create tools that benefit the broader community. Beyond the technical implementation, I'm focused on creating a sustainable legacy by encouraging younger students to adopt and continue maintaining this resource for future ECE cohorts.

This project showcases skills in web development, systems thinking, data organization, user experience design, and my commitment to improving the educational experience for my peers and future students in the department.`,
    coverImage: '/Flowchart.jpg',
    images: [
      '/Flowchart.jpg',
      '/Prerequisite-Flow.png',
    ],
    liveUrl: 'https://prerequisite-flowchart.vercel.app/',
    tags: ['JavaScript', 'Vercel', 'Education', 'Web Development', 'Academic Planning', 'Student Resources'],
    date: 'Oct 2025'
  },
  {
    id: '6',
    title: 'Theta TCC & Valve Body Process Review',
    description: `As a Machining Intern at Samkee America Manufacturing during Fall 2025, I conducted a comprehensive analysis of manufacturing processes, quality control procedures, and operator training systems. This project focused on the Theta Torque Converter Case (TCC) and Valve Body production lines, examining the entire workflow from raw material to finished product inspection.

I reviewed and enhanced Process Training Manuals (PTM) and On-the-Job Training (OJT) guides for both operators and inspectors, ensuring documentation accuracy and clarity. Through hands-on practice, I developed proficiency with precision measuring instruments including calipers, micrometers, and bore gauges, while utilizing digital tablets for facility-wide inspection documentation.

A key component of this project involved comparative analysis of different machining facilities - specifically the Hwanal Tapping Center versus the Makino Horizontal Machining Center. I investigated the applications and performance characteristics of various cutting tools including cutters, drills, tips, and endmills, evaluating their effectiveness in different machining scenarios.

Through systematic observation and data collection, I identified opportunities for improvement in three critical areas: PTM worker performance metrics, personal work skill development protocols, and work environment efficiency and safety standards. My findings were documented in a comprehensive final report that included process comparisons, quantitative analyses, and actionable recommendations.

The project culminated in a formal presentation and Q&A session with manufacturing leadership, where I demonstrated my understanding of complex machining operations, quality assurance principles, and continuous improvement methodologies. This experience strengthened my technical skills in precision measurement, process documentation, and manufacturing systems analysis while providing valuable insights into lean manufacturing and quality management practices.

This internship bridged academic engineering knowledge with real-world manufacturing applications, demonstrating my ability to quickly adapt to industrial environments, work independently on technical projects, and communicate findings effectively to stakeholders.`,
    coverImage: '/Samkee/attachments/IMG_0013.jpg',
    images: [
      '/Samkee/attachments/IMG_0014.jpg',
      '/Samkee/attachments/IMG_0018.jpg',
      '/Samkee/attachments/IMG_0020.jpg',
      '/Samkee/attachments/IMG_0021.jpg',
      '/Samkee/attachments/IMG_0023.jpg',
      '/Samkee/attachments/IMG_0026.jpg',
      '/Samkee/attachments/IMG_0027.jpg',
      '/Samkee/attachments/IMG_0028.jpg',
      '/Samkee/attachments 2/IMG_0106.jpg',
      '/Samkee/attachments 2/IMG_0136.jpg',
      '/Samkee/attachments 2/IMG_0199.jpg',
      '/Samkee/attachments 2/IMG_0200.jpg',
      '/Samkee/attachments 2/IMG_0202.jpg',
      '/Samkee/attachments 2/IMG_0203.jpg'
    ],
    tags: ['Manufacturing', 'Quality Control', 'Process Improvement', 'Machining', 'Precision Measurement', 'Technical Documentation'],
    date: 'Dec 2025'
  }
];
