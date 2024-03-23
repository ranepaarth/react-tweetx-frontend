import React from "react";

const FormSubmitButton = ({ text, isLoading, isSuccess }) => {
  let content;
  if (isLoading) {
    content = <span className="loader"></span>;
  } else if (!isLoading) {
    content = <span>{text}</span>;
  }
  return (
    <button
      className="px-6 py-2 bg-pink-500/80 text-white font-medium text-sm rounded-md shadow-lg grid place-items-center w-40 disabled:bg-pink-800/60"
      disabled={isLoading}
    >
      {content}
    </button>
  );
};

export default FormSubmitButton;
