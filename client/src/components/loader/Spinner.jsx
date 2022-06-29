import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import styles from "./spinner.module.css";

function Spinner() {
  const { isLoading } = useSelector((state) => {
    return state.planes;
  });

  return (
    <div className={styles.spinner}>
      <ThreeDots
        color='#66A1C7'
        width='100'
        visible={isLoading}
      />
    </div>
  );
}

export default Spinner;
