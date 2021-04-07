import React, { useState } from "react";

// хуки
const Accordion = ({ items }) => {
  // state для хуков
  const [activeIndex, setActiveIndex] = useState(null);

  // функция-хелпер
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  // перебераем массив items в компоненте App
  // и каждый элемент возращаем с разметкой
  const renderItems = items.map((item, index) => {
    // добавление активного класса
    const activeClass = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`titile ${activeClass}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${activeClass}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
