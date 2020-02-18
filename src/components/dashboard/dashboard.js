import React, { Component } from "react";

class dashboard extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-3 mb-3">Personal Job Tracker</h1>
        <div>
          <p className="text-center">About paragraph</p>
        </div>
        <div className="row">
          <div className="col-sm">
            <p className="text-center">Dashboard and Updates</p>
          </div>
          <div className="col-sm">
            <p className="text-center">Add Events Panel</p>
          </div>
        </div>
      </div>
    );
  }
}

export default dashboard;
