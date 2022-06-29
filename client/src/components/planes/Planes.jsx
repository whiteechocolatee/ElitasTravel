import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "../../store/plane/planeSlice";
import ContentWrapper from "../contentBlock/ContentWrapper";
import Spinner from "../loader/Spinner";
import PlaneItem from "../planeItem/PlaneItem";
import styles from "./planes.module.css";

function Planes() {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => {
    return state.planes;
  });

  console.log("planes >>>", planes);

  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ContentWrapper>
      {planes && planes.map((plane) => <PlaneItem />)}
    </ContentWrapper>
  );
}

export default Planes;
