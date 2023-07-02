import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class RecommendationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };
  render() {
    const { name, designation, company, recommendation } = this.props.recommendation;
    const trimmedRecommendation = recommendation.length > 35 ? `${recommendation.slice(0, 35)}...` : recommendation;
    return (
      <div className="col-12 col-md-4">
      <div className="card shadow h-100">
        <div className="card-body">
          <h5 className="card-text">{trimmedRecommendation}</h5>
          <p className="card-text text-secondary">{name}</p>
          <p className="card-text text-secondary">{designation} at {company}</p>
          <a href="#" className="stretched-link" onClick={this.toggleModal}></a>
          <Modal show={this.state.showModal} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{recommendation}</p>
              <p className="text-secondary">{designation} at {company}</p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
}

export default RecommendationCard;
