import React from "react";

export default function ProfileBtn(props) {
  const icon = props.icon;
  const txt = props.txt;
  return (
    <button id="drop-btn">
      <img src={icon} alt="icon" />
      <p>{txt}</p>
    </button>
  );
}
