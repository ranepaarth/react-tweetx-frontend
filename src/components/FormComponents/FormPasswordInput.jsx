import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import FormInput from "./FormInput";

const FormPasswordInput = ({ register }) => {
  const [showPwd, setShowPwd] = useState(false);
  const toggleShowPwd = () => {
    setShowPwd((prev) => !prev);
  };
  return (
    <>
      <FormInput
        placeholder={"password"}
        type={showPwd ? "text" : "password"}
        register={register}
      />
      <button onClick={toggleShowPwd} className="outline-none" type="button">
        {showPwd ? <IoEyeOffOutline /> : <IoEyeOutline />}
      </button>
    </>
  );
};

export default FormPasswordInput;
