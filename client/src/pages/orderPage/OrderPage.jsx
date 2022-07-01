import React from "react";
import Button from "../../components/button/Button";
import ContentWrapper from "../../components/contentBlock/ContentWrapper";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";
import styles from "./order.module.css";

function OrderPage() {
  const navigate = useNavigate();
  return (
    <ContentWrapper className={styles.order}>
      <h1>Ваш заказ будет доставлен в ближайшее время!</h1>
      <Button onClick={() => navigate(paths.home)}>
        На главную
      </Button>
    </ContentWrapper>
  );
}

export default OrderPage;
