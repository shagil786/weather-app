import React from "react";
import styles from "./Card.module.css";

const Card = ({ children, className }) => {
  const { container } = styles;
  return <div className={`${container} ${className}`}>{children}</div>;
};

export default Card;
