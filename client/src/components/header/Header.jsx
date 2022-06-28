import React from "react";
import ContentWrapper from "../contentBlock/ContentWrapper";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.content}>
        <h1
          className={
            styles.title
          }>{`Путешествyй с \n Комфортом`}</h1>
        <p
          className={
            styles.desc
          }>{`С нашей компанией вы забудете об о всем \n кроме ощущения комфортного путешествия`}</p>
      </ContentWrapper>
      <img
        src='http://s3.amazonaws.com/gt7sp-prod/decal/80/96/76/4692826760166769680_1.png'
        className={styles.logo}
        alt='logo'
      />
    </div>
  );
}

export default Header;
