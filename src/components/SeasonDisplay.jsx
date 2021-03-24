import React, { Component } from "react";

import SeasonDisplayComponent from "./SeasonDisplayComponent.jsx";
import Spinner from "./Spinner.jsx";

export default class SeasonDisplay extends Component {
  // Начальная инициализация компонента
  // // 1 вариант инциализации state
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     lat: null,
  //     errorMessage: "Denied Geolocation",
  //   };
  // }

  // 2 вариант инциализации state
  state = { lat: null, errorMessage: "Denied Geolocation" };

  // вызывается после рендеринга компонента.
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        // обновляю стейт
        this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // рендеринг компонента
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplayComponent lat={this.state.lat} />
      );
    }
    // return <Spinner />;
    return <SeasonDisplayComponent lat={this.state.lat} />;
  }
}
