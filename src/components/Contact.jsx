import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  LinkedinIcon,
  Instagram,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pt-3 pb-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">Contact Me</h2>
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-12">

            {/* Contact Info Box */}
            <div className="card shadow-sm mb-4">
              <div className="card-body text-center">
                <h5 className="card-title text-primary fw-semibold mb-4">
                  Contact Information
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-center align-items-center gap-2">
                    <MapPin className="text-primary" />
                    <span className="fw-medium">Chennai</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-center align-items-center gap-2">
                    <Phone className="text-primary" />
                    <span className="fw-medium">8939440300</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-center align-items-center gap-2">
                    <Mail className="text-primary" />
                    <span className="fw-medium">santhoshsiva2909@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Connect With Me Box */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title text-primary fw-semibold mb-4 text-center">
                  Connect With Me
                </h5>

                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <a
                    href="https://github.com/Santhosh-12345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-circle p-3"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/santhosh-s-417826263"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-circle p-3"
                  >
                    <LinkedinIcon size={24} />
                  </a>
                  <a
                    href="mailto:santhoshsiva2909@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-circle p-3"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/s.a.n.t.h.o.s.h.__07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-circle p-3"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://x.com/Santhosh_0929"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-circle p-3"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
