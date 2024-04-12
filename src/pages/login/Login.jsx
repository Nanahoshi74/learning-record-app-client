import React, { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../dispatch";
import { AuthContext } from "../../state/AuthContext";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    loginCall(
      {
        username: username.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="loginDesc">学習記録管理アプリ</h2>
          <input
            type="text"
            className="loginInput"
            placeholder="ユーザー名"
            required
            ref={username}
          ></input>
          <input
            type="password"
            className="loginInput"
            placeholder="パスワード"
            required
            ref={password}
          ></input>
          <button className="loginButton">ログイン</button>
        </form>
        <button className="loginRegisterButton">アカウント作成はこちら</button>
      </div>
    </div>
  );
};

export default Login;
