import React from "react";

const FormSubmitButton = ({ text }) => {
  return (
    <button className="px-6 py-2 bg-pink-500/80 text-white font-medium text-sm rounded-md shadow-lg">
      {text}
    </button>
  );
};

export default FormSubmitButton;
