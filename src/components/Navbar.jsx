import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navCollapse = document.getElementById("navbarNav");

    const handleLinkClick = () => {
      const bsCollapse = new window.bootstrap.Collapse(navCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Clean up event listeners on unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold fs-4" href="#home">
          PORTFOLIO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold fs-4">
            {["home", "about", "education", "skills", "projects", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link fs-5 mx-2" href={`#${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
