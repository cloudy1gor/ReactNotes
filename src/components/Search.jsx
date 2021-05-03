import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("javascript");
  const [results, setResults] = useState([]);

  // hook useEffect
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      // // если term пустой - не отправляем запрос на сервер
      // if (term) {
      //   setResults(data.query.search);
      // }

      setResults(data.query.search);
    };

    search();
  }, [term]);

  // рендерим полученые результаты с сервера на страницу
  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        {/* {result.snippet} */}
      </div>
    );
  });

  return (
    <form className="ui form">
      <div className="ui field">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="ui input"
          type="text"
          placeholder="type to search"
        />
      </div>

      <div className="ui celled list">{renderedResults}</div>
    </form>
  );
};

export default Search;
