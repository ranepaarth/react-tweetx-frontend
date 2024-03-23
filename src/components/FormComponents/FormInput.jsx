import React from "react";

const FormInput = ({ placeholder, register, type, autoFocus }) => {
  return (
    <input
      className="bg-transparent outline-none w-full text-sm placeholder:capitalize"
      type={type}
      placeholder={placeholder}
      {...register}
      autoFocus={autoFocus}
      autoComplete="off"
      maxLength={30}
    />
  );
};

export default FormInput;
