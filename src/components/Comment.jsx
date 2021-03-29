const Commetn = (props) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src={props.avatar} alt="avatarrrr" />
      </a>
      <div className="content">
        <a className="author" href="/">
          {props.author}
        </a>
        <div className="metadata">
          <span className="data">{props.timeAgo}</span>
        </div>
        <div className="text">{props.commentText}</div>
      </div>
    </div>
  );
};

export default Commetn;
