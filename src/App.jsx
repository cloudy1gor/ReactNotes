import React, { Component } from "react";
import faker from "faker";

import Comment from "./components/Comment";
import AppruvalCard from "./components/AppruvalCard";
import SeasonDisplay from "./components/SeasonDisplay";

export default class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return (
      <div className="ui container comments">
        <SeasonDisplay />

        <AppruvalCard>
          <Comment
            avatar={faker.image.avatar}
            author="Sam"
            timeAgo="Today at 6:00PM"
            commentText="Nice blog post!"
          />
        </AppruvalCard>

        <AppruvalCard>
          <Comment
            avatar={faker.image.avatar}
            author="John"
            timeAgo="Today at 4:00PM"
            commentText="Good job!"
          />
        </AppruvalCard>

        <AppruvalCard>
          <Comment
            avatar={faker.image.avatar}
            author="Jane"
            timeAgo="Yerstarday at 2:00AM"
            commentText="Very informative!"
          />
        </AppruvalCard>
      </div>
    );
  }
}
