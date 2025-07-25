import React from "react";
import StepBtnContainer from "../steps/StepBtnContainer";
import AllSortBtn from "../sort/AllSortBtn";

const Footer = () => {
  return (
    <div className="relative sticky bottom-0 flex justify-center items-center w-full h-[9dvh] px-5 bg-gray-300">
      <StepBtnContainer />
      <AllSortBtn />
    </div>
  );
};

export default Footer;
