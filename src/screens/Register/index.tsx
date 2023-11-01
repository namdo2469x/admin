import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Register = () => {
  const [step, setStep] = useState<number>(1);
  console.log(process.env.REACT_APP_PUBLIC_API_URL, 1111);

  return <div className="login-page">{step === 1 ? <Step1 onChangeStep={setStep} /> : <Step2 />}</div>;
};

export default Register;
