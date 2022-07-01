import React from "react";
import styles from "./input.module.css";

function Input({
  type = "",
  className = "",
  error = "",
  name = "",
  placeholder = "",
  onChange = () => null,
}) {
  return (
    <div className={`${className} ${styles.container}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className={styles.input}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default Input;
