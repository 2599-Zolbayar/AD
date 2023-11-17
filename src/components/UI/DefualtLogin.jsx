import React from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const setPopupMessage = props.setPopupMessage;

  const setPopup = props.setPopup;
  const setIsDefualt = props.setIsDefualt;
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/home");
    setPopupMessage("success");
    setPopup(true);
  };

  return (
    <div className="min-w-[360px] p-8 border rounded-md border-blue-700">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700 w-full">
        Нэвтрэх
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-blue-600 mb-2">
            Нэвтрэх нэр
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Нэвтрэх нэр бичнэ үү"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-blue-600 mb-2">
            Нууц үг
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Нэвтрэх нууц үг бичнэ үү"
          />
        </div>

        <button
          onClick={handleLoginClick}
          type="submit"
          className="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800"
        >
          Нэвтрэх
        </button>
      </form>
      <div className="mt-4 text-center">
        <a
          className="text-blue-700 hover:underline"
          onClick={() => setIsDefualt(true)}
        >
          Дуу хоолойгоор нэвтрэх
        </a>
      </div>
    </div>
  );
};

export default Login;
