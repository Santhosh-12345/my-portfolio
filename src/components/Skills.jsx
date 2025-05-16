import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "PHP", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Bootstrap", "MariaDB", "MySQL", "Oracle SQL"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Excel", "PowerPoint", "Word", "JDBC"],
    },
    {
      title: "Other Skills",
      skills: [
        "Data Structures",
        "Algorithms",
        "Machine Learning",
        "Database Management",
        "Object-Oriented Programming",
      ],
    },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
        <h2 className="fw-bold mb-4 text-center">Skills</h2>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-6">
              <div className="card border-0 shadow-sm h-100 hover-shadow">
                <div className="card-body p-4">
                  <h4 className="card-title text-primary mb-3">{category.title}</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hover-shadow:hover {
          box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;
