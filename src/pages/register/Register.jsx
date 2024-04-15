import React, { useContext } from "react";
import "./Register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginCall } from "../../dispatch";
import { AuthContext } from "../../state/AuthContext";

const Register = () => {
  const username = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const { dispatch } = useContext(AuthContext);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  console.log(`${backendUrl}/auth/register`);

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
        const login_user = await axios.post(
          `${backendUrl}/auth/register`,
          user
        );
        if (login_user.data === "exist") {
          alert("そのユーザ名は既に使われています");
        } else {
          loginCall(
            {
              username: username.current.value,
              password: password.current.value,
            },
            dispatch
          );
        }
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
        <button className="LoginButton" onClick={(e) => navigate("/login")}>
          ログインはこちら
        </button>
        <div className="hashmes">パスワードはハッシュ化されます</div>
        <div className="copywriteregister">©2024 Nanahoshi74</div>
      </div>
    </div>
  );
};
export default Register;
