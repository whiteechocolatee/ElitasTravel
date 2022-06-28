import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";

function Spinner() {
  const { isLoading } = useSelector((state) => {
    return state.planes;
  });

  return (
    <div className='spinner'>
      <ThreeDots
        color='#FFFF5A'
        width='100'
        visible={isLoading}
      />
    </div>
  );
}

export default Spinner;
