import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-center">{children}</div>
  );
};

export default FormContainer;
