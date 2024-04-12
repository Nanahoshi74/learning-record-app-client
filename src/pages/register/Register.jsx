import React from "react";
import "./Register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const password = useRef();
  const confirmpassword = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value !== confirmpassword.current.value) {
      confirmpassword.current.setCustomValidity("パスワードが一致しません");
    } else {
      try {
        const user = {
          username: username.current.value,
          password: password.current.value,
        };
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="Register">
      <div className="RegisterWrapper">
        <form className="RegisterBox" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="RegisterDesc">学習記録管理アプリ</h2>
          <input
            type="text"
            className="RegisterInput"
            placeholder="ユーザー名"
            required
            ref={username}
          ></input>
          <input
            type="password"
            className="RegisterInput"
            placeholder="パスワード"
            required
            ref={password}
          ></input>
          <input
            type="password"
            className="RegisterInput"
            placeholder="確認用パスワード"
            required
            ref={confirmpassword}
          ></input>
          <button className="RegisterLoginButton" type="submit">
            新規登録
          </button>
        </form>
        <button className="LoginButton">ログインはこちら</button>
      </div>
    </div>
  );
};
export default Register;
