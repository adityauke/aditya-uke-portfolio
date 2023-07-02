import React from 'react'

 function notFound() {
  return (
        <div className="container text-center my-5 py-5">
            <div className="display-4 pt-5 mt-5">
                <span className="text-danger">Oops!</span>It's a 404 error. 
            </div>
            <div className="lead">Could'nt find what you're looking for...</div>
        </div>
  );
}

export default notFound;