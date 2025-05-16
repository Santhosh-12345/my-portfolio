import React from "react";
import { ArrowRight, Github, Mail, FileText } from "lucide-react";
import './home.css';

const Home = () => {
  return (
    <section id="home" className="py-5 bg-light position-relative overflow-hidden">
      {/* Blurred background elements */}
      <div
        className="position-absolute rounded-circle bg-primary opacity-25"
        style={{
          top: "30%",
          right: 0,
          width: "33%",
          height: "33%",
          filter: "blur(100px)",
          zIndex: -1,
        }}
      ></div>
      <div
        className="position-absolute rounded-circle bg-info opacity-25"
        style={{
          bottom: 0,
          left: 0,
          width: "25%",
          height: "25%",
          filter: "blur(100px)",
          zIndex: -1,
        }}
      ></div>

      <div className="container">
        <div className="row align-items-center g-5">
          {/* Text Section */}
          <div className="col-12 col-md-6 order-2 order-md-1">
            <h1 className="display-5 fw-bold mb-2 text-dark">
              Hi, I'm <span className="text-primary">Santhosh S</span>
            </h1>

            <h5 className="text-secondary mb-3">
              Final Year Undergraduate Student
            </h5>

            <p className="lead text-secondary mb-3" style={{ lineHeight: 1.6 }}>
              I'm a dedicated and hard-working developer who enjoys building clean, responsive web applications, developing intelligent machine learning models, and maintaining efficient, scalable backend systems. Driven by curiosity and a strong desire to keep learning, I’m passionate about turning complex ideas into practical, user-friendly solutions. I take pride in my ability to adapt, collaborate with others, and stay committed to delivering high-quality results in everything I do.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="btn btn-primary d-flex align-items-center">
                View Projects <ArrowRight className="ms-2" size={18} />
              </a>
              <a
                href="https://github.com/Santhosh-12345"
                className="btn btn-outline-primary d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="me-2" size={18} /> GitHub
              </a>
              <a href="#contact" className="btn btn-outline-primary d-flex align-items-center">
                <Mail className="me-2" size={18} /> Contact Me
              </a>
            </div>
          </div>

          {/* Image Section with Resume Button */}
          <div className="col-12 col-md-6 order-1 order-md-2 text-center">
            <div
              className="rounded-circle border border-4 border-primary mx-auto"
              style={{ width: "320px", height: "320px", padding: "6px", overflow: "hidden" }}
            >
              <img src={`${process.env.PUBLIC_URL}/photo.jpg`} alt="Santhosh S"
                alt="Santhosh S"
                className="img-fluid rounded-circle w-100 h-100 object-fit-cover"
              />
            </div>

            {/* Resume Button */}
            <div className="mt-4">
            <a href={`${process.env.PUBLIC_URL}/Santhosh_S_Resume.pdf`} target="_blank" rel="noopener noreferrer" 

                className="btn btn-outline-dark d-inline-flex align-items-center px-4 py-2 resume-btn"
              >
                <FileText className="me-2" size={18} /> View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
