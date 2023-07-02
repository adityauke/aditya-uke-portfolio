import React from 'react';
import { Consumer } from '../context';
import ProjectCard from './projectCard';

function AllProject() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;

        if (!projects || !Array.isArray(projects)) {
          return <div>No projects available.</div>;
        }

        return (
          <div className="container text-center my-5 py-5">
            <div>
              <h1 className="font-weight-light">
                All my <span className="text-info">Projects</span>
              </h1>
              <div className="lead pb-4">Crafted with Dedication: Showcasing My Project Achievements</div>
            </div>
            <div className="row my-4 pt-4">
            {value.projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 py-3">
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                prjLink={project.prjLink}
              />
            </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default AllProject;
