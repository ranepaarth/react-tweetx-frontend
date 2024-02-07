import React from "react";

const FormBody = ({ children, handleSubmit, onFormSubmit, onFormError }) => {
  return (
    <form
      className="max-sm:w-full max-md:w-[25rem] md:w-[22rem]"
      onSubmit={handleSubmit(onFormSubmit, onFormError)}
    >
      {children}
    </form>
  );
};

export default FormBody;
