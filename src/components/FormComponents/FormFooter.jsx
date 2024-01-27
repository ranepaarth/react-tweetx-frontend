import React from "react";
import { Link } from "react-router-dom";

const FormFooter = ({ text, path }) => {
  return <Link to={path} className="text-sm capitalize font-medium text-neutral-600 hover:underline">{text}</Link>;
};

export default FormFooter;
