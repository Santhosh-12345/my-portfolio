import React from "react";
import '../App.css';

const About = () => {
  return (
    <section id="about" className="pb-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">About Me</h2>
        <div className="row">
          <div className="col-12">
            <p className="text-secondary mb-4 fs-5" style={{ lineHeight: "1.8", textAlign: "justify" }}>
              I'm a final year Computer Science student at Madras Institute of Technology, Anna University,
              with a focus on data structures, algorithms, database management, and machine learning. I'm passionate
              about developing innovative solutions to real-world problems.
            </p>
            <p className="text-secondary mb-4 fs-5" style={{ lineHeight: "1.8", textAlign: "justify" }}>
              With a strong academic record and hands-on project experience, I've developed a solid foundation
              in software engineering principles and best practices. I enjoy working with various programming languages
              and tools, constantly expanding my knowledge through self-directed learning and practical application.
            </p>
            <p className="text-secondary mb-4 fs-5" style={{ lineHeight: "1.8", textAlign: "justify" }}>
              Beyond technical skills, I value collaboration, effective communication, and a holistic approach to
              problem-solving. I believe in writing clean, maintainable code and creating user-friendly interfaces
              that address real user needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
