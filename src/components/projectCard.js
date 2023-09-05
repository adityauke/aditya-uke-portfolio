/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function ProjectCard(props) {
  const { title, description, imgUrl, prjLink } = props;

  return (
       <div class="blog-card">
          <div class="meta">
            <div class="photo">
            <img className="card-img-top" src={imgUrl} alt="Project Thumbnail" /></div>
          </div>
          <div class="description">
            <h1>{title}</h1>
            {/* <h2>Academic Project</h2> */}
            <p> {description}</p>
            <p class="read-more">
                <a href={prjLink} >
            <button type="button" class="btn btn-info">Demo</button></a>
            </p>
          </div>
          </div>
  );
}
export default ProjectCard;

