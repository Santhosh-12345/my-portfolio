import React from "react";

const projects = [
  {
    title: "Heart Murmur Detection",
    description:
      "A machine learning model to detect heart murmurs from audio signals, aiding in early diagnosis.",
    technologies: ["Python", "ML", "Signal Processing"]
  },
  {
    title: "Online Job Portal System",
    description:
      "Developed a website for job seekers with an attractive user interface. Includes filtering options and PHP backend.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"]
  },
  {
    title: "Airline Management System",
    description:
      "Designed and implemented a system to manage airline operations and bookings with features for flight scheduling and ticket booking.",
    technologies: ["Java", "MySQL", "JDBC"]
    // github: "https://github.com/Santhosh-12345/AirlineManagement",
  },
  {
    title: "User Authentication System",
    description:
      "A secure authentication system with Register, Login, and Dashboard features.",
    technologies: ["React", "Axios", "Bootstrap", "PHP", "MySQL"]
    // github: "https://github.com/yourusername/auth-project"
  },
  {
    title: "GraphiXcel",
    description:
      "A tool that converts Excel data into visual representations and charts for better data analysis and presentation.",
    technologies: ["Python", "Excel API", "Data Visualization"]
  },
  
  
];

const Projects = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <div className="text-center mb-5">
        <h2  id="projects" className="fw-bold mb-4 text-center">Projects</h2>
      </div>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 d-flex">
            <div className="card flex-fill shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-secondary flex-grow-1">{project.description}</p>
                <div className="mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="badge bg-info text-dark me-1"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* 
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  View Code on GitHub
                </a> 
                */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <a
          href="https://github.com/Santhosh-12345"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View More on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
