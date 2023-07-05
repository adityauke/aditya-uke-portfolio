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
          <div className="container-fluid bg-light text-center mt-5 py-5">
            <div>
              <h1 className="font-weight-light">
                All my <span className="text-info">Projects</span>
              </h1>
              <div className="lead pb-4">Crafted with Dedication: Showcasing My Project Achievements</div>
            </div>
            <div className="row my-2 ">
            {value.projects.map((project, index) => (
            <div key={index} className=" py-3">
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
