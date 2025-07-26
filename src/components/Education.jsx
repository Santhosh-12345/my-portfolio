import React from "react";
import { CalendarEvent } from "react-bootstrap-icons"; // Bootstrap icon alternative

const Education = () => {
  const educationData = [
    {
      institution: "Madras Institute of Technology, Anna University",
      degree: "B.E Computer Science and Engineering",
      duration: "Oct 2022 - May 2026",
      gpa: "9.16 (Till 4th Semester)",
      courses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Machine Learning",
        "Software Engineering",
      ],
    },
    {
      institution: "Zion Matriculation Higher Secondary School, Chennai",
      degree: "HSC (12th Grade)",
      duration: "May 2021 - May 2022",
      percentage: "98.33%",
    },
    {
      institution: "Zion Matriculation Higher Secondary School, Chennai",
      degree: "SSLC (10th Grade)",
      duration: "May 2019 - May 2020",
      percentage: "97.20%",
    },
  ];

  const certifications = [
    {
      title: "Mastering Data Structures & Algorithms using C and C++",
      issuer: "Udemy",
      link: "#",
    },
    {
      title: "Git Training",
      issuer: "Simplilearn",
      link: "#",
    },
  ];

  return (
    <section id="education" style={{ paddingTop: "70px", marginTop: "20px" }} className="pt-2 pb-5">
      <div className="container">
        <div className="text-center mb-5">
        <h2 className="fw-bold mb-4 text-center">Educations & Certifications</h2>
        </div>

        <div className="row g-4">
          {/* Academic Background */}
          <div className="col-lg-8">
            <h3 className="mb-4 text-primary">Academic Background</h3>
            <div className="border-start border-3 border-primary ps-4">
              {educationData.map((edu, index) => (
                <div key={index} className="mb-5 position-relative">
                  {/* Timeline dot */}
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#0d6efd",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "-26px",
                      top: "8px",
                    }}
                  ></div>
                  <h5>{edu.institution}</h5>
                  <p className="text-primary fw-semibold mb-1">{edu.degree}</p>
                  <div className="d-flex align-items-center text-muted small mb-2">
                    <CalendarEvent size={16} className="me-1" /> {edu.duration}
                  </div>
                  {edu.gpa && (
                    <p>
                      GPA: <span className="fw-semibold">{edu.gpa}</span>
                    </p>
                  )}
                  {edu.percentage && (
                    <p>
                      Percentage: <span className="fw-semibold">{edu.percentage}</span>
                    </p>
                  )}
                  {/* {edu.courses && (
                    <div>
                      <p className="small text-muted mb-1">Coursework:</p>
                      <div className="d-flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="badge bg-light text-primary border border-primary"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
          {/* Certifications and Volunteer Experience */}
          <div className="col-lg-4">
            <h3 className="mb-2 text-primary">Certifications</h3>
            <div className="mb-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card mb-3 shadow-sm border"
                  style={{ borderColor: "#e9ecef" }}
                >
                  <div className="card-body p-3">
                    <h5 className="card-title mb-1">{cert.title}</h5>
                    <p className="card-text text-muted small mb-2"></p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="small text-primary"
                    >
                      {cert.issuer}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mb-2 text-primary">Volunteer Experience</h3>
            <div className="card mb-3 shadow-sm border" style={{ borderColor: "#e9ecef" }}>
              <div className="card-body p-3">
                <h5 className="card-title mb-1">NSS Volunteer</h5>
                <p className="card-text text-muted small mb-0">
                </p>
              </div>
            </div>
            <div className="card shadow-sm border" style={{ borderColor: "#e9ecef" }}>
              <div className="card-body p-3">
                <h5 className="card-title mb-1">Event Organizer</h5>
                <p className="card-text text-muted small mb-0">
                  Organized the event Code Heist during Prayatna(Department Symposium)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
