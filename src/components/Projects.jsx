// Projects.jsx - COMPLETE REPLACE
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Operating System portfolio",
      category: "Profile Page",
      description: "A clean and modern user profile interface with smooth animations.",
      image: "/jobayni.jpg",
      link: "https://github.com/vineprja/prooject",
    },
    {
      title: "capstone prototype partial",
      category: "figma partial",
      description: "A vibrant Roblox companion shop with garden-themed pet marketplace.",
      image: "/prototype.jpg",
      link: "https://www.figma.com/proto/xlYXbkxSkfwaY2h81QUGYD/CAPSTONEEEEEEEEEEEE?node-id=20-576&t=XBMVvzdyIMLBnLS6-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A164", // Add your link here
      featured: true,
    },
    {
      title: "Profile Project",
      category: "Productivity App",
      description: "A minimal task management dashboard with drag & drop functionality.",
      image: "/jovinebayot.jpg",
      link: "https://github.com/vineprja/my-first-app", // Add your link here
    },
  ];

  return (
    <div className="page-container">
      <div className="projects-header">
        <h1 className="projects-title">My Works</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.featured ? "featured" : ""}`}
          >
            {/* Project Image - NOW CLICKABLE */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-image">
                <img
                  src={project.image || "/placeholder-project.jpg"}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <span className="view-project">View Project →</span>
                </div>
              </div>
            </a>

            {/* Project Info - ALSO CLICKABLE */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <span className="view-project-mobile">View Project →</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}