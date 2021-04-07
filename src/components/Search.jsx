import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <form className="ui form">
      <div className="ui field">
        <input
          onChange={(e) => setTerm(e.target.value)}
          className="ui input"
          type="text"
          placeholder="type to search"
        />
      </div>
    </form>
  );
};

export default Search;
