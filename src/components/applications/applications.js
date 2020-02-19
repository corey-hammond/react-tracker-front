import React, { Component } from "react";

class applications extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Applications</h1>
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
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Submit Date</th>
              <th scope="col">Position</th>
              <th scope="col">Company</th>
              <th scope="col">Link to App</th>
              <th scope="col">Contact Name</th>
              <th scope="col">Title</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Five Day Follow Up</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select>
                  <option>Select...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </td>
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
              <td>Text here</td>
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

export default applications;
