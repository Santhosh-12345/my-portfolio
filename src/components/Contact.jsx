import React from "react";
import { Mail, MapPin, Phone, Github, LinkedinIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
        <h2 className="fw-bold mb-4 text-center">Contact Me</h2>
        </div>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title text-primary fw-semibold mb-4">
                  Contact Information
                </h5>
                <ul className="list-unstyled">
                  <li className="d-flex mb-3">
                    <MapPin className="me-3 text-primary" />
                    <span>Chennai</span>
                  </li>
                  <li className="d-flex mb-3">
                    <Phone className="me-3 text-primary" />
                    <span>8939440300</span>
                  </li>
                  <li className="d-flex mb-3">
                    <Mail className="me-3 text-primary" />
                    <span>santhoshsiva2909@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary fw-semibold mb-4">
                  Connect With Me
                </h5>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/Santhosh-12345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-circle p-2"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-secondary rounded-circle p-2"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="mailto:santhoshsiva2003@gmail.com"
                    className="btn btn-outline-secondary rounded-circle p-2"
                  >
                    <Mail size={20} />
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
