import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text-loader">
        {props.message}
      </div>
    </div>
  );
};

// пропы по-умолчанию
Spinner.defaultProps = {
  message: "loading...",
};

export default Spinner;
