import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-3 mb-3">Personal Job Tracker</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptas praesentium sint, ratione earum accusamus distinctio
              itaque dolore doloremque ad, nihil eos quam sunt blanditiis ea
              rerum reiciendis deleniti harum.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h3 className="text-center">Dashboard</h3>
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active">
                Cras justo odio
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Dapibus ac facilisis in
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Morbi leo risus
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Porta ac consectetur ac
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action disabled"
                tabindex="-1"
                aria-disabled="true"
              >
                Vestibulum at eros
              </a>
            </div>
          </div>
          <div className="col">
            <h3 className="text-center">Add Events</h3>
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active">
                Cras justo odio
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Dapibus ac facilisis in
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Morbi leo risus
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Porta ac consectetur ac
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action disabled"
                tabindex="-1"
                aria-disabled="true"
              >
                Vestibulum at eros
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
