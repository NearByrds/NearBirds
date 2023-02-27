import React from "react";
import loader from "../../../assets/bird-loader.gif";
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen blured">
      <img src={loader} alt="bird-loader" />
    </div>
  );
};

export default Loader;
