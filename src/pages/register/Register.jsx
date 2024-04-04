import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="Register">
      <div className="RegisterWrapper">
        <form className="RegisterBox">
          <h2 className="RegisterDesc">学習記録管理アプリ</h2>
          <input
            type="text"
            className="RegisterInput"
            placeholder="ユーザー名"
            required
          ></input>
          <input
            type="password"
            className="RegisterInput"
            placeholder="パスワード"
            required
          ></input>
          <input
            type="password"
            className="RegisterInput"
            placeholder="確認用パスワード"
            required
          ></input>
          <button className="RegisterLoginButton">新規登録</button>
        </form>
        <button className="LoginButton">ログインはこちら</button>
      </div>
    </div>
  );
};
export default Register;
