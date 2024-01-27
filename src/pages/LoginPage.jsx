import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import FormContainer from "../components/FormComponents/FormContainer";
import FormFooter from "../components/FormComponents/FormFooter";
import FormHeader from "../components/FormComponents/FormHeader";
import FormInput from "../components/FormComponents/FormInput";
import FormNavigationButton from "../components/FormComponents/FormNavigationButton";
import FormRow from "../components/FormComponents/FormRow";
import FormSubmitButton from "../components/FormComponents/FormSubmitButton";

const LoginPage = () => {
  const [showPwd, setShowPwd] = useState(false);
  const toggleShowPwd = () => {
    setShowPwd((prev) => !prev);
  };
  return (
    <div>
      <FormNavigationButton text={"Create account"} path={"register"} />

      <div className="mt-12">
        <FormContainer>
          <div className="mb-10">
            <FormHeader heading={"Login"} />
          </div>
          <FormRow>
            <FormInput placeholder={"email"} type={"text"} autoFocus={true} />
          </FormRow>
          <FormRow>
            <FormInput
              placeholder={"password"}
              type={showPwd ? "text" : "password"}
            />
            <button onClick={toggleShowPwd}>
              {showPwd ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </FormRow>
          <div className="w-full flex justify-between items-center">
            <FormFooter text={"forgot password ?"} path={"/user/reset"} />
            <FormSubmitButton text={"Login"} />
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default LoginPage;
