import React from "react";

function Box(props) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alte} />
      </div>
      <div className="s-b-text">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <a href="#" className="cv-btn">{props.button}</a>
      </div>
    </div>
  );
}

export default Box;
