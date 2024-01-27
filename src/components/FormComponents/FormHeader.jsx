import React from "react";

const FormHeader = ({ heading }) => {
  return (
    <header className="font-bold text-3xl text-neutral-600/80 capitalize">
      {heading}
    </header>
  );
};

export default FormHeader;
