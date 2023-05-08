import React from "react";

function LabelBar(props) {
  const image = props.image;
  const name = props.name;
  return (
    <div className="Label-bar">
      <img src={image} alt="LabelPhoto" />
      <p>{name}</p>
    </div>
  );
}

export default LabelBar;
