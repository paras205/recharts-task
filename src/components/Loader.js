import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <div className="loader_wrapper">
      <Loader type="Puff" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default LoaderComponent;
