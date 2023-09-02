import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      handler: this.handler,
      recommendations :[
        {
            id:1,
            name: "Faisal Shah",
            company: "K.C College",
            designation: "Student",
            recommendation: "Exceptional student with strong technical skills, high CGPA, and passion for continuous learning.",
        },
        {
            id:2,
            name: "Vivek Shahu",
            company: "Armiet College",
            designation: "Student",
            recommendation: "An enthusiastic and dedicated student equipped with strong leadership skills, always poised to tackle challenges head-on.",
        },
        {
            id:3,
            name: "Kaustubh Vaidya",
            company: "ARMIET College",
            designation: "Student",
            recommendation: "Talented in Web-Designing and Python",
        },
        {
            id:4,
            name: "Chetanya Batulla",
            company: "Sandip University",
            designation: "Student",
            recommendation: "Skilled in React.js and API usage, demonstrated proficiency in creating a pathfinding visualizer project.",
        },
    ],
      skills:[
        {
            id:1,
            name:"HTML5",
            imgUrl:require("./assets/html.png"),
            starsTotal:3,
            starsActive:3
        },
        {
            id:2,
            name:"CSS3",
            imgUrl:require("./assets/css.png"),
            starsTotal:3,
            starsActive:3
        },
        {
            id:3,
            name:"JavaScript",
            imgUrl:require("./assets/js.png"),
            starsTotal:3,
            starsActive:2
        },
        {
            id:4,
            name:"BootStrap",
            imgUrl:require("./assets/bootstrap.png"),
            starsTotal:3,
            starsActive:3
        },
        {
            id:5,
            name:"React JS",
            imgUrl:require("./assets/react-js.png"),
            starsTotal:3,
            starsActive:3
        },
        {
            id:6,
            name:"mySql",
            imgUrl:require("./assets/mysql.jpg"),
            starsTotal:3,
            starsActive:2
        },
        {
            id:7,
            name:"Python",
            imgUrl:require("./assets/python.png"),
            starsTotal:3,
            starsActive:3
        },
        // {
        //     id:8,
        //     name:"Flask",
        //     imgUrl:require("./assets/flask.png"),
        //     starsTotal:3,
        //     starsActive:2
        // },
        {
            id:9,
            name:"Java",
            imgUrl:require("./assets/java.png"),
            starsTotal:3,
            starsActive:2
        },

    ],
    
    projects: [
        {
          id: 1,
          title: "Plant Leaf Disease Prediction",
          description: "A Web-Application which predicts the diseases in the plant's leaves using the CNN model, a deep learning model. We trained 10 classes of leaves in our datasets and 5 layers of the CNN model which helps in predicting disease in plant leaves.",
          imgUrl: require("./assets/pld-1.jpg"),
          prjLink: "https://github.com/adityauke/PLANT-LEAF-DISEASE-PREDICTION",
        },
        {
          id: 2,
          title: "Path-finding Visualizer",
          description: "Pathfinding Visualizer is a straightforward method using node.js modules and API to create visual representations of distance on a map. By randomly placing waypoints/nodes and connecting them, it forms a graph, enabling easy route finding.",
          imgUrl: require("./assets/pv-1.png"),
          prjLink: "https://pathfindingvisualizertomtom.netlify.app/",
        },
        {
          id: 3,
          title: "Animal Welfare and Adoption",
          description: "The Website which makes pet adoption online, easy and something which can be done from the comfort of your home rather than traveling places to search for a pet to adopt. The process of serving towards the welfare of the pets by giving the abandoned pets a place of shelter.",
          imgUrl: require("./assets/AW-1.jpg"),
          prjLink: "https://github.com/adityauke",
        },
      {
          id: 4,
          title: "QR Code Generator",
          description: "Easily generate QR codes on our website. Just input data and my user-friendly tool creates QR codes for you.",
          imgUrl: require("./assets/QrCode.png"),
          prjLink: "https://adityauke.github.io/QR-Code-Generator/",
        },
      {
          id: 5,
          title: "Bubble Burst Game",
          description: "Pop bubbles in this fun JavaScript game! Hit the bubbles displayed in the panel and enjoy the burst of excitement.",
          imgUrl: require("./assets/bubbleGame.png"),
          prjLink: "https://adityauke.github.io/Bubble-Burst-Game/",
        },
       {
          id: 6,
          title: "To-Do List",
          description: "Create a todo list effortlessly with JavaScript, leveraging local storage for seamless task management. Your personalized, efficient task organizer.",
          imgUrl: require("./assets/todoList.png"),
          prjLink: "https://adityauke.github.io/To-Do-List/",
        },
      ],
    };
  }

  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

        default:
            // Handle other actions, if any
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
