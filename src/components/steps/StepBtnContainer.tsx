"use client";

import React from "react";
import { stepsState } from "@/recoil/steps";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

const StepBtnContainer = () => {
  const [step, setStep] = useRecoilState(stepsState);
  const router = useRouter();

  const handlePrevBtnClick = () => {
    if (step === 1) {
      setStep(4);
      router.push("4");
    } else if (step === 2) {
      setStep(1);
      router.push("/");
    } else {
      setStep(step - 1);
      router.push(`${step - 1}`);
    }
  };

  const handleNextBtnClick = () => {
    if (step === 4) {
      setStep(1);
      router.push("/");
    } else {
      setStep(step + 1);
      router.push(`${step + 1}`);
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
