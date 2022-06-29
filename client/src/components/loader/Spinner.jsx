import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import styles from "./spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <ThreeDots color='#66A1C7' width='100' />
    </div>
  );
}

export default Spinner;
