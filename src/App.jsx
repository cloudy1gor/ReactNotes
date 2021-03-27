import React, { Component } from "react";
import faker from "faker";

import "./assets/stylesheets/style.scss";
import Comment from "./components/Comment.jsx";
import AppruvalCard from "./components/AppruvalCard.jsx";
import SeasonDisplay from "./components/SeasonDisplay.jsx";
import Pics from "./components/Pics.jsx";
import SearchPanel from "./components/SearchPanel.jsx";
import ListImages from "./components/ListImages.jsx";

export default class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container comments">
        <SeasonDisplay />

        <AppruvalCard>
          <Comment
            avatar={faker.image.avatar()}
            author="Sam"
            timeAgo="Today at 6:00PM"
            commentText="Nice blog post!"
          />
        </AppruvalCard>

        <AppruvalCard>
          <Comment
            avatar={faker.image.avatar()}
            author="John"
            timeAgo="Today at 4:00PM"
            commentText="Good job!"
          />
        </AppruvalCard>

        <AppruvalCard>
          <Comment
            avatar={faker.image.avatar()}
            author="Jane"
            timeAgo="Yerstarday at 2:00AM"
            commentText="Very informative!"
          />
        </AppruvalCard>

        <SearchPanel onSubmit={this.onSearchSubmit} />
        <ListImages />
      </div>
    );
  }
}
