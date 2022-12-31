import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-warning mt-5" role="alert">
        {props.messege}
      </div>
    </div>
  );
};

export default Alert;
