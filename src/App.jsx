import React, { Component } from "react";
import faker from "faker";
import axios from "axios";

import "./assets/stylesheets/style.scss";
import Comment from "./components/Comment.jsx";
import AppruvalCard from "./components/AppruvalCard.jsx";
import SeasonDisplay from "./components/SeasonDisplay.jsx";
import SearchPanel from "./components/SearchPanel.jsx";
import ListImages from "./components/ListImages.jsx";
import Accordion from "./components/Accordion.jsx";
import Search from "./components/Search.jsx";

// для аккардеона (hooks) передаем проп
const items = [
  {
    title: "What is React?",
    content: "is a front end framwork",
  },
  {
    title: "title 2?",
    content: "content 2",
  },
  {
    title: "title 3?",
    content: "content 3",
  },
];

export default class App extends Component {
  state = { imagesUnsplash: [] };

  // получаем данные используя async - await через функцию стрелку
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 3rY_EnH_TzPpeChp3KXXbKEgRXHDR6V6zApbhaYF-Ko",
      },
    });

    // обновляем стейт
    this.setState({ imagesUnsplash: response.data.results });
  };

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
        <ListImages imagesGet={this.state.imagesUnsplash} />

        <Search />
        <Accordion items={items} />
      </div>
    );
  }
}
