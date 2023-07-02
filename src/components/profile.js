import React from "react";
// import Aditya from "../assets/adityauke.png";


function Profile(props){
    // const name="Aditya Uke";
    // const leadText="I am a Student at ARMIET";

    const{name,leadText}=props;

    return(
    <div className="container mt-3 py-5" >
        <div className="row text-center align-items-center ">
            <div className="col-12 col-md-6">
                <img className="img-fluid rounded-circle  p-5  w-75" src={require("../assets/1688038078348-01.jpeg")} alt="Aditya Uke Profile" />
            </div>
            <div className="col-12 col-md-6">
                <div className="font-weight-light" style={{fontSize : "50px"}}>
                    Hi, I am <span className="text-info"> {name}</span>
                </div>
                <h4 className="font-weight-light">{leadText}</h4>
            </div>
        </div>
    </div>
    );
}

// Profile.defaultProps={
//    name : "Adiii",
//    leadText : "Student at Armiet", 
// }

// Profile.propTypes = {
//     name: PropTypes.string.isRequired,
// }


export default Profile;