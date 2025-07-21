import React from "react";
import DinoSteps from "../../assets/images/loader_dino_steps.svg?react";

export const Loader = () => {
  return (
    <div className="wrapper">
      <div className="loader">
        <div className="flex justify-center align-center loader-footprint-container">
          <div className="footprint">
            <DinoSteps />
          </div>
          <div className="footprint">
            <DinoSteps />
          </div>
          <div className="footprint">
            <DinoSteps />
          </div>
        </div>
        <div className="loader-text">Loading Jurassic Ways...</div>
      </div>
    </div>
  );
};
