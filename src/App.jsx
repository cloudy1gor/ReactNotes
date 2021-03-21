import React from "react";
import faker from "faker";

import Comment from "./components/Comment";
import AppruvalCard from "./components/AppruvalCard";

const App = () => {
  return (
    <div className="ui container comments">
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
};

export default App;
