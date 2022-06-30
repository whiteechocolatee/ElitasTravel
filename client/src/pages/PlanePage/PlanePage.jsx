import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlane } from "../../store/plane/planeSlice";
import Spinner from "../../components/loader/Spinner";
import ContentWrapper from "../../components/contentBlock/ContentWrapper";
import styles from "./panePage.module.css";
import Button from "../../components/button/Button";

function PlanePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { plane, isLoading } = useSelector(
    (state) => state.plane,
  );

  console.log("id >>>", id);
  console.log("plane >>>", plane);
  console.log("load >>>", isLoading);

  useEffect(() => {
    dispatch(getPlane(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    plane && (
      <ContentWrapper className={styles.plane}>
        <div className={styles.descContent}>
          <Button onClick={() => navigate(-1)}>
            Назад
          </Button>
          <h1 className={styles.title}>{plane.name}</h1>
          <div className={styles.price}>{plane.price}</div>
          <Button
            containerClassName={styles.btnBuy}
            onClick={() => navigate("/order")}>
            Добавить в корзину
          </Button>
          <p className={styles.planeDesc}>
            {plane.description}
          </p>
        </div>
        <div className={styles.imageContent}>
          <img
            className={styles.image}
            src={plane.planeImage}
            alt=''
          />
        </div>
      </ContentWrapper>
    )
  );
}

export default PlanePage;
