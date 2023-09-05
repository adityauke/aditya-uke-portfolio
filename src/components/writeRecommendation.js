import React, { Component } from "react";
import { useForm } from "@formspree/react";

class WriteRecommendation extends Component {
  render() {
    return (
      <div className="container-fluid py-5" style={{ backgroundColor: "rgb(235 249 255 / 20%)" }}>
        <h1 className="font-weight-light text-center my-4">
          <span className="text-info">Thank You!</span> for Taking Your Time
        </h1>
        <MyForm />
      </div>
    );
  }
}

function MyForm() {
  const [state, handleSubmit] = useForm('myyqjelz'); 

  if (state.succeeded) {
    return (
      <div className="text-center">
        <h4 className="text-info">Thank you for your Valuable Recommendation!</h4>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="container-fluid mx-5 px-5">
      <div className="form-group pt-3">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" className="form-control" required />
      </div>
      <div className="form-group pt-3">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" className="form-control" required />
      </div>
      <div className="form-group pt-3">
        <label htmlFor="company">Company/Institution: </label>
        <input type="text" name="company" className="form-control" required />
      </div>
      <div className="form-group pt-3">
        <label htmlFor="designation">Designation: </label>
        <input type="text" name="designation" className="form-control" required />
      </div>
      <div className="form-group pt-3">
        <label htmlFor="recommendation">Recommendation*</label>
        <textarea name="recommendation" className="form-control" rows="5" required></textarea>
      </div>
      <button type="submit" className="btn btn-dark btn mt-3" style={{ backgroundColor: "black" }}>
        Let's Talk
      </button>
    </form>
  );
}

export default WriteRecommendation;
