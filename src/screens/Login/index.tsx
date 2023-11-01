import "../../index.css";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, notification } from "antd";
import { useNavigate } from "react-router-dom";

import { AuthService } from "../../services/auth";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    AuthService.login(
      values.phoneNumber,
      values.password,
      (token: any) => {
        localStorage.setItem("access_token", token.data.data.accessToken);
        localStorage.setItem("user_id", token.data.data.id);
        navigate("/");
        notification.success({
          message: "Login successfully!",
        });
      },
      (_reason: any) => {
        notification.info({
          message: "Something wrong. Please check your username & password",
        });
      },
    );
  };

  return (
    <div className="login-page text-5xl">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Title
          // onClick={() => {
          //   navigate("/");
          // }}
          level={2}
          style={{ textAlign: "center" }}
        >
          B U I L D E E
        </Title>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your Phone number!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone number" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="/forgetPassword">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
