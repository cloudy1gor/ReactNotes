import React, { useState } from "react";

// хуки
const Accordian = ({ items }) => {
  // state для хуков
  const [activeInex, setActiveIndex] = useState(null);

  // функция-хелпер
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  // перебераем массив items в компоненте App
  // и каждый элемент возращаем с разметкой
  const renderItems = items.map((item) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderItems}
      <h1>{activeInex}</h1>
    </div>
  );
};

export default Accordian;
