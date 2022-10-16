import React from "react";
import featureimage from "../images/Frame 19.png";

function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} alt="feature-image" />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>
          This Application <span>Software</span> is Art
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <button>View More Features</button>
      </div>
    </div>
  );
}

export default Features;
