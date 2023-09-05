import React, { Component } from "react";
import { useForm } from "@formspree/react";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      description: "",
      submitMessage: "",
      submitMessageTextColor: "",
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { name } = this.state;

    try {
      // Use the Formspree endpoint URL
      const response = await fetch("https://formspree.io/f/myyqjelz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });

      if (response.ok) {
        this.setState({
          submitMessage: `Thank You! ${name}. I Will Contact You Soon. :)`,
          submitMessageTextColor: "text-info",
        });
      } else {
        this.setState({
          submitMessage: "Oops! Something Went Wrong, Try Again Later. :(",
          submitMessageTextColor: "text-danger",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="container-fluid ">
        {/* <h1 className="font-weight-light text-center">
          <span className="text-info">Thank You!</span> for Your Interest
        </h1> */}

        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <MyForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              state={this.state}
            />
          </div>
        </div>

        <div className="py-3 mx-2 text-center">
          <h3 className={this.state.submitMessageTextColor}>
            {this.state.submitMessage}
          </h3>
        </div>
      </div>
    );
  }
}

function MyForm({ onSubmit, onChange, state }) {
  return (
    <div className="container-fluid mt-5 pt-5">
      <h1 className="font-weight-light text-center">
        <span className="text-info">Thank You!</span> for Your Interest
      </h1>

      <div className="row justify-content-center">
        <div className="col-11 col-lg-5">
          <form onSubmit={onSubmit}>
            <div className="form-group pt-3">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={state.name}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group pt-3">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={state.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group pt-3">
              <label htmlFor="description">Message*</label>
              <textarea
                name="description"
                className="form-control"
                rows="5"
                value={state.description}
                onChange={onChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-dark btn mt-2"
              style={{ backgroundColor: "black" }}
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Contact;

