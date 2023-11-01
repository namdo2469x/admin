import { PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import Title from "antd/es/typography/Title";
import { PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../../firebase.config";

function Step1({ onChangeStep }: any) {
  const [form] = Form.useForm();
  const [verificationId, setVerificationId] = useState("");
  const [appVerifier, setAppVerifier] = useState<any>({});
  const [step, setStep] = useState<number>(1);
  useEffect(() => {
    const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });
    setAppVerifier(appVerifier);
  }, []);

  const onFinish = async (values: any) => {
    const value = values.phone;

    try {
      if (step === 1) {
        const confirmationResult = await signInWithPhoneNumber(auth, "+84" + value.trim().substring(1), appVerifier);
        console.log(confirmationResult, 111);
        setStep(2);
        setVerificationId(confirmationResult.verificationId);
        form.resetFields();
        return;
      }

      const credential = PhoneAuthProvider.credential(verificationId, value);

      await signInWithCredential(auth, credential);
      onChangeStep(2);
    } catch (error: any) {
      notification.error({
        message: "Invalid Phone Number",
      });
    }
  };

  const textButton = () => {
    if (step === 2) {
      return "Verify Code";
    }
    return " Send Code";
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      layout="vertical"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Title level={2} style={{ textAlign: "center" }}>
        Sign up to your account
      </Title>

      <Form.Item
        name="phone"
        label={step === 1 ? "Phone" : "Code"}
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder={step === 1 ? "Phone" : "Code"} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          {textButton()}
        </Button>
        Or <a href="/login">Login now!</a>
      </Form.Item>
      <div id="recaptcha-container"></div>
    </Form>
  );
}

export default Step1;
