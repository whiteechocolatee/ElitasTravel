import React from "react";
import styles from "./contentWrapper.module.css";

function ContentWrapper({ children, className }) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {children}
    </div>
  );
}

export default ContentWrapper;
