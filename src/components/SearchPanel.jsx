import React, { Component } from "react";

export default class SearchPanel extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    // вызываю проп onSubmit с App в компонент класс
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Search Panel</label>
            <input
              className="ui input"
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
