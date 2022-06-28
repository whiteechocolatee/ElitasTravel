import React from "react";
import ContentWrapper from "../contentBlock/ContentWrapper";
import styles from "./header.module.css";

function Header() {
  console.log(styles);
  return (
    <div className={styles.centering}>
      <ContentWrapper>
        <h1
          className={
            styles.title
          }>{`Путешествий с \n Комфортом`}</h1>
        <p
          className={
            styles.desc
          }>{`С нашей компанией вы забудете об о всем \n кроме качественных путешествий`}</p>
      </ContentWrapper>
    </div>
  );
}

export default Header;
