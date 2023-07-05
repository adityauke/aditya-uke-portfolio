import React, { Component } from "react";
import { Consumer } from "../context";
import {v4 as uuid} from "uuid";

class WriteRecommendation extends Component {
    state={
      name:"",
      email:"",
      company:"",
      designation:"",
      recommendation:"",
      submitMessage:"",
      submitMessageTextColor:"",
    };
  
  
  onChange=(event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  onSubmit= (handler, event) => {
    event.preventDefault();
    let isSuccessfull=true;
    if(isSuccessfull){
      this.setState({
          submitMessage:'Thanks for Recommendation!',
          submitMessageTextColor:"text-info"
      });
    }
    else{
      this.setState({
        submitMessage:'Ooops! Something went wrong...',
        submitMessageTextColor:"text-danger"
    });
  }

  const newRecommendation = {
    id:uuid(),
    name: this.state.name,
    company: this.state.company,
    designation: this.state.designation,
    recommendation: this.state.recommendation,
  };
  handler("ADD_RECOMMENDATION", newRecommendation);
};
  render() {
    return(
      <Consumer>
        {(value) =>{
          const {submitMessage,submitMessageTextColor}=this.state;
          const{handler} = value
    return (
      <div className="comtainer-fluid py-5" style={{backgroundColor:"rgb(235 249 255 / 20%)"}}>
        <h1 className="font-weight-light text-center my-4"><span className="text-info " >Thank You!</span> for Taking Your Time</h1>

        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit.bind(this, handler)}>
              <div className="form-group pt-3 ">
                <label for="name">Name: </label>
                <input type="text" name="name" className="form-control " onChange={this.onChange} required/>
              </div>
              <div className="form-group pt-3">
                <label for="email">Email: </label>
                <input type="email" name="email" className="form-control " onChange={this.onChange} required/>
              </div>
              <div className="form-group pt-3">
                <label for="company">Company/Institution: </label>
                <input type="text" name="company" className="form-control" onChange={this.onChange} required/>
              </div>
              <div className="form-group pt-3">
                <label for="designation">Designation: </label>
                <input type="text" name="designation" className="form-control" onChange={this.onChange} required/>
              </div>
              <div className="form-group pt-3">
                <label for="recommendation">Recommendation*</label>
                <textarea name="recommendation" className="form-control" rows="5" onChange={this.onChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-dark btn mt-3" style={{backgroundColor: "black"}}>Let's Talk</button>
            </form>
          </div>
        <div className="text-center py-3"><h4 className={submitMessageTextColor}>{submitMessage}</h4></div>
        
        </div>
      </div>
    );
        }}
      </Consumer>
    );
    
  }

}

export default WriteRecommendation;

