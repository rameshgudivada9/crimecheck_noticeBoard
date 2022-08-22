import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { postLoginData } from "../../redux/auth/actions";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    userName: "",
  });
  const dispatch = useDispatch();
  const login = () => {
    dispatch(postLoginData([input, navigate]));
  };
  return (
    <div className="login-borderdiv">
      <h6>Pick a username</h6>
      <div>
        {" "}
        <input
        className="logininput"
          type="text"
          onChange={(e) => setInput({ userName: e.target.value })}
          value={input.userName}
        />
      </div>
      <div>
        <button className="loginbtn" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};
