import React, { useState } from "react";
import audio from "../../assets/audio.png";
import Mic from "../UI/Mic";
import { useNavigate } from "react-router-dom";
import DefualtLogin from "../UI/DefualtLogin";

const Login = (props) => {
  const setPopupMessage = props.setPopupMessage;
  const setPopup = props.setPopup;
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/home");
    setPopupMessage("success");
    setPopup(true);
  };

  const [isDefualt, setIsDefualt] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-black to-blue-600">
      {isDefualt ? (
        <div className="min-w-[360px] p-8 border rounded-md border-blue-700 flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700 w-full">
            Дуу хойлойгоор нэвтрэх
          </h2>
          <img src={audio} alt="Voice Access" className="w-36 h-36 mb-2" />
          <Mic />
          <a
            className="text-blue-700 hover:underline"
            onClick={() => setIsDefualt(false)}
          >
            Нууц үгээр нэвтрэх
          </a>
        </div>
      ) : (
        <DefualtLogin
          setIsDefualt={setIsDefualt}
          setPopup={setPopup}
          setPopupMessage={setPopupMessage}
        />
      )}
    </div>
  );
};

export default Login;
