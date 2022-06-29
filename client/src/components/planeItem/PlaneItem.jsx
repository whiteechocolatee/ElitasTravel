import React from "react";
import styles from "./planeItem.module.css";
import { paths } from "../../paths";
import { Link } from "react-router-dom";

function PlaneItem({
  name = "",
  price = 0,
  capacity = "",
  planeImage = "",
  _id = "",
}) {
  console.log(planeImage);

  return (
    <Link
      to={`${paths.plane}/${_id}`}
      className={styles.planeItem}>
      <div className={styles.capacity}>{capacity}</div>
      {planeImage && (
        <img
          className={styles.image}
          src={planeImage}
          alt=''
        />
      )}
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.price}>{price}</span>
      </div>
    </Link>
  );
}

export default PlaneItem;
