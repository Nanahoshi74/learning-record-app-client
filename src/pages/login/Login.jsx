import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <form className="loginBox">
          <h2 className="loginDesc">学習記録管理アプリ</h2>
          <input
            type="text"
            className="loginInput"
            placeholder="ユーザー名"
            required
          ></input>
          <input
            type="password"
            className="loginInput"
            placeholder="パスワード"
            required
          ></input>
          <button className="loginButton">ログイン</button>
        </form>
        <button className="loginRegisterButton">アカウント作成はこちら</button>
      </div>
    </div>
  );
};

export default Login;
