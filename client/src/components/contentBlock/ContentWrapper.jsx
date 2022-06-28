import React from "react";
import styles from "./contentWrapper.module.css";

function ContentWrapper({ children, className }) {
  console.log(
    "children array >>>>",
    children[0].props.children,
  );
  console.log("class >>>", className);
  return (
    <div
      className={`${styles.wrapper} ${className}`}>
      {children.map((item) => {
        return <p>{item.props.children}</p>;
      })}
    </div>
  );
}

export default ContentWrapper;
