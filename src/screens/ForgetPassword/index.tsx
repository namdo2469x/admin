const { Title } = Typography;
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/auth";

import "../../index.css";

const ForgetPass = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    if (values.password !== values.rePassword) {
      notification.error({
        message: "Please re-enter password correctly!",
      });
    } else {
      AuthService.forget(
        values.phoneNumber,
        values.password,
        () => {
          navigate("/login");
          notification.success({
            message: "Reset password successfully!",
          });
        },
        (_reason: any) => {
          notification.info({
            message: "Something wrong. Please check your username & password",
          });
        },
      );
    }
  };
  return (
    <div className="login-page">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Title level={2} style={{ textAlign: "center" }}>
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
        <Form.Item
          name="rePassword"
          rules={[
            {
              required: true,
              message: "Please re-enter your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Re-Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPass;
