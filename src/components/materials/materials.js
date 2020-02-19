import React, { Component } from "react";

import materials from "../../data/materials.json";

class Materials extends Component {
  state = {
    materials: materials
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Job Search Materials</h1>
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

        {/* Form goes here */}
        <form className="mt-4">
          <div class="form-row align-items-center">
            <div class="col-auto my-1">
              <select class="custom-select mr-sm-2">
                {this.state.materials.map((item, idx) => {
                  return <option key={idx}>{item.name}</option>;
                })}
              </select>
            </div>
            <div class="col-sm-8 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="Paste link here"
              />
            </div>
            <div class="col-auto my-1">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* Table goes here */}
        {/* To make this table dynamic, I need to use state and populate the table based off that -- see mydevbox ToolBox */}
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Complete</th>
              <th scope="col">Title</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Personal Brand Statement</td>
              <td>url goes here</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Resume</td>
              <td>url goes here</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Cover Letter</td>
              <td>url goes here</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Github</td>
              <td>url goes here</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>LinkedIn</td>
              <td>url goes here</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>GA Profile</td>
              <td>url goes here</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Personal Website</td>
              <td>url goes here</td>
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

export default Materials;
