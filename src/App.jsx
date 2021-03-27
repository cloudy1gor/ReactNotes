import React from "react";
import faker from "faker";

import "./assets/stylesheets/style.scss";
import Comment from "./components/Comment.jsx";
import AppruvalCard from "./components/AppruvalCard.jsx";
import SeasonDisplay from "./components/SeasonDisplay.jsx";

const App = () => {
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
    </div>
  );
};

export default App;
