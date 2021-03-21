import React, { Component } from "react";

export default class AppruvalCard extends Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">Are you sure?</div>
        <div className="extra content">
          <div className="ui two buttons">
            <button className="ui basic green button" type="button">
              Approve
            </button>
            <button className="ui basic red button" type="button">
              Reject
            </button>
          </div>
        </div>
      </div>
    );
  }
}
