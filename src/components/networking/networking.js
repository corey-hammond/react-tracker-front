import React, { Component } from "react";

class networking extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Networking & Contacts</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo
              sed repellendus quidem blanditiis fugiat expedita laboriosam nobis
              cupiditate commodi? Error ex iusto mollitia totam neque, suscipit
              esse magnam earum!
            </p>
          </div>
        </div>

        {/* Table goes here */}
        {/* To make this table dynamic, I need to use state and populate the table based off that -- see mydevbox ToolBox */}
        <table className="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Event</th>
              <th scope="col">Contact Name</th>
              <th scope="col">Company</th>
              <th scope="col">Email</th>
              <th scope="col">Title</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Notes</th>
              <th scope="col">LinkedIn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Text here</td>
            <td>Text here</td>
            <td>Text here</td>
            <td>Text here</td>
            <td>Text here</td>
            <td>Text here</td>
            <td>Text here</td>
            <td>Text here</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn btn-secondary btn-sm">Add New</button>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default networking;
