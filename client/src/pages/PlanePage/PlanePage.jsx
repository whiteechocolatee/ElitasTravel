import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlane } from "../../store/plane/planeSlice";
import Spinner from "../../components/loader/Spinner";

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

  return <div>{id}</div>;
}

export default PlanePage;
