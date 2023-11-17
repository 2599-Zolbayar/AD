import React, { useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import Popup from "./components/UI/Popup";

function App() {
  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("success");
  return (
    <div className="relative z-0">
      <Popup popup={popup} setPopup={setPopup} popupMessage={popupMessage} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login setPopup={setPopup} setPopupMessage={setPopupMessage} />
            }
          />
          <Route path="/home" element={<Home setPopup={setPopup} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
