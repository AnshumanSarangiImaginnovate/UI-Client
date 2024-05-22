import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, size, onClick, varient }) => {
  const className = `btn ${size} ${varient}`;
  return <button class={className}>{children}</button>;
};

export default CustomButton;
