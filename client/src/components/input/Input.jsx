import React from "react";
import styles from "./input.module.css";

function Input({
  type = "",
  className = "",
  error = null,
  name = "",
  placeholder = "",
  onClick = () => null,
}) {
  return (
    <div className={`${className} ${styles.container}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onClick={onClick}
        className={styles.input}
      />
      {error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  );
}

export default Input;
