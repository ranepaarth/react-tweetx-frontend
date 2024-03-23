import React from "react";

const FormBody = ({ children, handleSubmit, onFormSubmit }) => {
  return (
    <form className="w-full" onSubmit={handleSubmit(onFormSubmit)}>
      {children}
    </form>
  );
};

export default FormBody;
