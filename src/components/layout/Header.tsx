import React from "react";
import StepsContainer from "../steps/StepsContainer";
import { APP_VERSION } from "@/constants/version";

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-center items-center w-full h-[9dvh] px-5 bg-gray-300">
      <StepsContainer />
      <p className="absolute right-6">ver {APP_VERSION}</p>
    </header>
  );
};

export default Header;
