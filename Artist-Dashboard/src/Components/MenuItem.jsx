import React from "react";

export default function MenuItem(props) {
  const icon = props.icon;
  const text = props.text;
  return (
    <button className="menuItem">
      <img src={icon} alt="icon" />
      <div>{text}</div>
    </button>
  );
}
