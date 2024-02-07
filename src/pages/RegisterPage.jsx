import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import FormBody from "../components/FormComponents/FormBody";
import FormContainer from "../components/FormComponents/FormContainer";
import FormHeader from "../components/FormComponents/FormHeader";
import FormInput from "../components/FormComponents/FormInput";
import FormNavigationButton from "../components/FormComponents/FormNavigationButton";
import FormRow from "../components/FormComponents/FormRow";
import FormSubmitButton from "../components/FormComponents/FormSubmitButton";

const RegisterPage = () => {
  const [showPwd, setShowPwd] = useState(false);
  const toggleShowPwd = () => {
    setShowPwd((prev) => !prev);
  };
  return (
    <>
      <FormNavigationButton text="Login" path={"login"} />
      <div className="mt-12">
        <FormContainer>
          <div className="mb-10">
            <FormHeader heading={"create account"} />
          </div>
          <FormBody>
            <FormRow>
              <FormInput placeholder={"name"} type={"text"} autoFocus={true} />
            </FormRow>
            <FormRow>
              <FormInput placeholder={"email"} type={"text"} />
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
            <FormRow>
              <FormInput placeholder={"confirm password"} type={"password"} />
            </FormRow>
            <div className="flex justify-end w-full">
              <FormSubmitButton text={"Sign up"} />
            </div>
          </FormBody>
        </FormContainer>
      </div>
    </>
  );
};

export default RegisterPage;
