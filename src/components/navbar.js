import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg  fixed-top" style={{backgroundColor:"rgb(37 37 43 / 6%)",  backdropFilter:"blur(30px)"}}>
        <div className="container">
          <div className="logo-container" >
            <Link to="/">
              <img src={logo} alt="Logo" style={{height: "45px",width: "80%"}}/>
            </Link>
            
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
              <Link to="/contact"className="nav-link" aria-current="page" >Contact Me</Link>
              </li> */}
              <Link to="/contact">
             <button className="btn btn-outline-info">Contact me</button>
           </Link>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/project/all">Projects</Link></li>
                  {/* <li><Link className="dropdown-item" to="#">Blogs</Link></li> */}
                  <li><Link className="dropdown-item" to="/write-a-recommendation">Recommendation</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
     
  );
}

export default Navbar;
/* <nav classNameName="navbar navbar-expand-md fixed-top bg-light">
       <div classNameName="container my-2">
         <Link to="/" classNameName="navbar-brand text-dark font-weight-bold">
         <img src={logo} alt="Logo" classNameName="navbar-logo" style={{maxWidth:"100%" , maxHeight:"100%"}}/>
         </Link>
         <Link to="/" classNameName="navbar-brand text-dark font-weight-bold">
           Aditya Uke
         </Link>

         <div classNameName="navbar-nav ml-auto">
           <Link to="/contact">
             <button classNameName="btn btn-outline-info">Contact me</button>
           </Link>
           <Link to="/" classNameName="nav-item nav-link text-dark h6 mx-3 my-auto">
             Blogs
           </Link>
         </div>
       </div>
     </nav> */