import { Button, Input } from "antd";
import "./loginPage.scss";
export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__form">
        <h1 className="login-page__title">login</h1>
        <div className="login-page__input">
          <Input placeholder="username" />
          <Button type="primary">Continue</Button>
        </div>
      </div>
    </div>
  );
};
