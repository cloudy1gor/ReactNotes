const AppruvalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <button
            className="ui basic green button"
            type="button"
          >
            Approve
          </button>
          <button
            className="ui basic red button"
            type="button"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppruvalCard;
