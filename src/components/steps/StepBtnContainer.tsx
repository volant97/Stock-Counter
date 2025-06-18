"use client";

import React from "react";
import { stepsState } from "@/recoil/steps";
import { useRecoilState } from "recoil";

const StepBtnContainer = () => {
  const [step, setStep] = useRecoilState(stepsState);

  const handlePrevBtnClick = () => {
    if (step === 1) {
      setStep(4);
    } else {
      setStep(step - 1);
    }
  };

  const handleNextBtnClick = () => {
    if (step === 4) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="flex gap-2">
      <button className="w-16 border-2" onClick={handlePrevBtnClick}>
        이전
      </button>
      <button className="w-16 border-2" onClick={handleNextBtnClick}>
        다음
      </button>
    </div>
  );
};

export default StepBtnContainer;
