import React from "react";
import { useNavigate } from "react-router-dom";

const FormNavigationButton = ({ text, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/user/${path}`);
  };
  return (
    <div className="flex w-full items-start">
      <button
        className="w-44 rounded-md border border-black font-medium p-2"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default FormNavigationButton;
