import React from "react";

const FormBody = ({ children, handleSubmit, onFormSubmit }) => {
  return (
    <form
      className="max-sm:w-full max-md:w-[25rem] md:w-[22rem]"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      {children}
    </form>
  );
};

export default FormBody;
