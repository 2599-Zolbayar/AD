import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Popup = (props) => {
  const popup = props.popup;
  const setPopup = props.setPopup;
  const popupMessage = props.popupMessage;
  const [icon, setIcon] = useState(null);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [border, setBorder] = useState("");

  useEffect(() => {
    switch (popupMessage) {
      case "success":
        setIcon(<FaCheckCircle color="#00cc00" size={30} />);
        setMessage("Хүсэлт амжилттай");
        setColor("#00cc00");
        setBorder("1px solid #009900");
        break;
      case "failed":
        setIcon(<FaTimesCircle color="#cc0000" size={30} />);
        setMessage("Хүсэлт амжилтгүй");
        setColor("#cc0000");
        setBorder("1px solid #990000");
        break;
      default:
        setIcon(null);
        setMessage("");
        setColor("");
        setBorder("");
    }
  }, [popupMessage]);

  useEffect(() => {
    if (popup) {
      setTimeout(() => {
        setPopup(false);
      }, 3000);
    }
  }, [popup]);

  return (
    <div
      className={`fixed z-50 w-full flex items-center ${
        popup ? "block" : "hidden"
      }`}
    >
      <div
        className="py-3 grid items-center w-[400px] mt-2 mx-auto rounded-lg border-l-8"
        style={{ border: border }}
      >
        <div className="flex items-center justify-center">
          {icon}
          <span className="ml-2">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
