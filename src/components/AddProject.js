/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Consumer } from '../context';

class AddProject extends Component {
  state = {
    imageUrl: '',
    title: '',
    description: '',
    link: '', 
    submitMessage: '',
    submitMessageTextColor: '',
  };


  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  

  onSubmit = (handler, event) => {
    event.preventDefault();
    let isSuccessfull = true;

    if (isSuccessfull) {
      this.setState({
        submitMessage: 'Project Published Successfully :)',
        submitMessageTextColor: 'text-info',
      });
    } else {
      this.setState({
        submitMessage: 'Project Published Failed :(',
        submitMessageTextColor: 'text-danger',
      });
    }

    const newProject = {
      imgUrl: this.state.imageUrl,
      title: this.state.title,
      description: this.state.description,
      prjLink: this.state.link,
    };
    
    handler("ADD_PROJECT", newProject);

  };

  render() {
    return (
    <Consumer>
    {(value) => {
        const {
          imageUrl,
          title,
          description,
          link,
          submitMessage,
          submitMessageTextColor,
          } = this.state;
    const {handler} = value;
    
return (
      <div className="container-fluid  py-5">
        <h1 className="text-center my-5 font-weight-light">
          Add <span className="text-info">Project</span>
        </h1>
        <div className="row px-3">
          <div className="col-12 col-lg-6">
          <form onSubmit={event => this.onSubmit(handler, event)}>

              <div className="form-group my-3">
                <label htmlFor="imageUrl">Featured Image URL*</label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="form-control"
                  onChange={this.onChange}
                  value={imageUrl}
                  required
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="title">Title*</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  onChange={this.onChange}
                  value={title}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description*</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  className="form-control"
                  onChange={this.onChange}
                  value={description}
                  required
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="link">Project Link*</label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  className="form-control"
                  onChange={this.onChange}
                  value={link}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-dark btn-block my-2"
                style={{ backgroundColor: 'black' }}
              >
                Publish
              </button>
            </form>
            <div className="text-center">
              <h5 className={submitMessageTextColor}>{submitMessage}</h5>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card shadow h-100 img-fluid align-items-center">
              <img
                className="card-img-top"
                style={{ maxHeight: '400px', maxWidth: '400px', objectFit: 'cover' }}
                src={imageUrl}
                alt={title}
              />
              <div className="card-body">
                <div className="card-text">
                  <h4 className="card-title text-center">{title}</h4>
                  <p className="card-description" style={{ wordBreak: 'break-word' }}>
                    {description}
                  </p>
                  <a href={link} className="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


      }}
    </Consumer>

    
    );
    
  }
}

export default AddProject;
