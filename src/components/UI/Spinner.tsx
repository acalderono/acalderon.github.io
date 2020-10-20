import React from "react";
import "./Spinner.css";

export const Spinner = () => {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
    </div>
  );
};

export default Spinner;
