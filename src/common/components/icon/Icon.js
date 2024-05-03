import React from "react";
import styles from "./Icon.module.css";

const Icon = ({ text, className, style, not }) => {
  const { container } = styles;
  return (
    <div
      className={`${container} ${className}`}
      style={{ color: not ? "#000" : "#fff", ...style }}
    >
      {text}
    </div>
  );
};

export default Icon;
