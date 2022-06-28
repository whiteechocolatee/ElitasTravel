import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "../../store/plane/planeSlice";
import Spinner from "../loader/Spinner";

function Planes() {
  const dispatch = useDispatch();
  const { planes } = useSelector((state) => {
    return state.planes;
  });

  console.log("planes >>>", planes);

  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  return (
    <div>
      <Spinner />
    </div>
  );
}

export default Planes;
