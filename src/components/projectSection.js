import React from "react";
import ProjectCard from "./projectCard";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

function ProjectSection() {
  return (
    <Consumer>
      {(value) => {
        return (
          <div className="container text-center py-5">
            <h1 className="font-weight-light">
              My <span className="text-info">Projects</span>
            </h1>
            <div className="lead pb-4">
              I built these projects during the academic year.
            </div>
            <div className="reveal fade-right row my-3 pt-2">
              {value.projects.slice(0, 3).map((project, index) => (
                <div key={index} className="col-12 col-md-4 my-3">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                    prjLink={project.prjLink}
                  />
                </div>
              ))}
            </div>
            <div className="my-2">
              <Link
                style={{ textDecoration: "none", fontWeight: "10px" }}
                to="/project/all"
                className=" text-dark"
              >
                See all projects <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectSection;
