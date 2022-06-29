import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContentWrapper from "../contentBlock/ContentWrapper";
import Spinner from "../loader/Spinner";
import PlaneItem from "../planeItem/PlaneItem";
import styles from "./planes.module.css";
import { paths } from "../../paths";
import Button from "../button/Button";
import { useSortItems } from "../../sortableHook/useSortItems";
import { getPlanes } from "../../store/plane/planesSlice";

function Planes() {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => {
    return state.planes;
  });
  const { desc, setDesc, sortedItems } = useSortItems(
    planes || [],
  );

  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className={styles.sort}>
        <ContentWrapper className={styles.planesNav}>
          <Button
            className={styles.sortBtn}
            onClick={() => setDesc(!desc)}>
            Сортировать по цене:{" "}
            {`${desc ? "по убыванию" : "по возрастанию"}`}
          </Button>
          <Link
            to={paths.createPlane}
            className={styles.createPlaneLink}>
            Добавить самолет
          </Link>
        </ContentWrapper>
      </div>
      <ContentWrapper className={styles.wrap}>
        {sortedItems &&
          sortedItems.map((plane) => (
            <PlaneItem key={plane._id} {...plane} />
          ))}
      </ContentWrapper>
    </div>
  );
}

export default Planes;
