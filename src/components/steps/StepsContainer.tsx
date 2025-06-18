"use client";

import React from "react";
import { stepsState } from "@/recoil/steps";
import { useRecoilValue } from "recoil";

const StepsContainer = () => {
  const step = useRecoilValue(stepsState);

  return (
    <div className="flex gap-2">
      <div className="flex gap-1">
        <p className={`${step === 1 && "text-orange-500"}`}>확인</p>
        <p>→</p>
        <p className={`${step === 2 && "text-orange-500"}`}>창고</p>
        <p>→</p>
        <p className={`${step === 3 && "text-orange-500"}`}>전산</p>
        <p>→</p>
        <p className={`${step === 4 && "text-orange-500"}`}>진열</p>
      </div>
    </div>
  );
};

export default StepsContainer;
