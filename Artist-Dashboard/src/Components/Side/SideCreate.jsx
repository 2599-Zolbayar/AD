import React from "react";

function SideCreate(props) {
  const id = props.id;
  const number = props.number;
  const img = props.img;
  const name = props.name;

  return (
    <div className="container">
      <div className="content">
        <img className="image" src={img} alt="Artist" />
        <div className="text">
          <span>#{id}</span>
          <p>{name}</p>
        </div>
      </div>
      <div className="number">
        <p>{number}</p>
      </div>
    </div>
  );
}

export default SideCreate;
