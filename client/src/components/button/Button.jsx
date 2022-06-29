import React from "react";
import styles from "./button.module.css";

function Button({
  containerClassName = "",
  className = "",
  onClick = () => null,
  children = "",
}) {
  return (
    <div className={containerClassName}>
      <span
        className={`${styles.button} ${className} `}
        onClick={onClick}>
        {children}
      </span>
    </div>
  );
}

export default Button;
