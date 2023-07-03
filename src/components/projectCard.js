/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function ProjectCard(props) {
  const { title, description, imgUrl, prjLink } = props;

  return (
    <div className="card shadow h-100 project-card">
      <img className="card-img-top" src={imgUrl} alt="Project Thumbnail" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a href={prjLink} className="stretched-link"></a>
      </div>
    </div>
  );
}

export default ProjectCard;

