import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="text-center pt-3" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
        <div className="py-4">
          <div>
            <h2 className="text-light">Interested in working with me?</h2>
            <Link to="/contact"><button className="btn btn-outline-light btn-lg my-2">Let's Talk</button></Link>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-12 col-md-4">
            <h4 className="text-info">More Links</h4>
            {/* <a style={{ textDecoration: "none" }} href="/" className="text-light d-block">
              Blogs
            </a> */}
            <Link style={{ textDecoration: "none" }} to="/" className="text-light d-block">
              Home
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact" className="text-light d-block">
              Contact me
            </Link>
            <Link  style={{ textDecoration: "none" }} to ="/write-a-recommendation" className="text-light">
              Write a Recommendation
            </Link>
          </div>
          <div className="col-12 col-md-4 font-weight-light text-light justify-content-around py-3">
            <p style={{ textJustify: "auto" }}>
              Hello! I'm Aditya Uke, Motivated and dedicated Computer Engineering student pursuing a bachelor’s degree at ARMIET College. Proficient in responsive web designing, Front-End Technologies, React.js, technologies, seeking opportunities to gain real-life experience in Computer Engineering and contribute to innovative projects while developing skills.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="text-info">Social</h5>
            <a href="https://www.linkedin.com/in/adityaUke" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin h4 text-light d-block py-1"></i>
            </a>
            <a href="https://github.com/adityauke" target="_blank" rel="noreferrer">
              <i className="bi bi-github h4 text-light d-block py-1"></i>
            </a>
            <a href="mailto:@adityauke4141@gmail.com"
              target="_blank" rel="noreferrer"
            >
              <i className="bi bi-envelope h4 text-light d-block py-1"></i>
            </a>
            {/* <Link href="/">
              <i className="bi bi-instagram h4 text-light d-block py-1"></i>
            </Link> */}
          </div>
          <div className="text-muted py-4">
            <h6>All rights reserved @Aditya</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
