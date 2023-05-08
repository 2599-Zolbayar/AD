import React from "react";
import ProfileBtn from "../ProfileBtn";
import Vector from "./icons/VectorQ.svg";
import Setting from "./icons/Setting.svg";
import bell from "./icons/bell.svg";
import "./Dropdown.css";

export default function Dropdown(props) {
  const name = props.name;
  const img = props.img;
  const mail = props.mail;
  const setDropdownVisible = props.setDropdownVisible;

  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          zIndex: "1",
        }}
        onClick={() => {
          setDropdownVisible(false);
        }}
      ></div>
      <div
        id="Dropdown"
        style={{ zIndex: "3" }}
        onClick={() => {
          console.log("uildel hiimeer bnooo");
        }}
      >
        <article>
          <img src={img} alt="image" />
          <h3>{name}</h3>
          <p>{mail}</p>
        </article>
        <div>
          <ProfileBtn icon={bell} txt="Мэдэгдэл" />
          <ProfileBtn icon={Setting} txt="Тохиргоо" />
          <ProfileBtn icon={Vector} txt="Түгээмэл асуулт" />
        </div>
      </div>
    </div>
  );
}
