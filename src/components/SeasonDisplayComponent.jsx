const seasonConfig = {
  summer: {
    text: "so warm!",
    icon: "sun",
  },
  winter: {
    text: "so cold!",
    icon: "snowflake",
  },
};

// функция помошник
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }
  return lat > 0 ? "winter" : "summer";
};

// функциональный компонент
const SeasonDisplayComponent = (props) => {
  const season = getSeason(
    props.lat,
    new Date().getMonth()
  );

  const { text, icon } = seasonConfig[season]; // деструктурирую свойства с обьекта

  return (
    <div Style="display: flex;">
      <h1 className="title">{text}</h1>
      <i className={`huge ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplayComponent;
