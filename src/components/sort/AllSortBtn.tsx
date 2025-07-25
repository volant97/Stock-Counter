"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { allSortedState } from "@/recoil/sorted";

const AllSortBtn = () => {
  const [isAllSorted, setIsAllSorted] = useRecoilState(allSortedState);

  const handleAllSortBtnClick = () => {
    setIsAllSorted(!isAllSorted);
  };

  return (
    <div className="absolute right-7 flex justify-center items-center py-1 px-2 border-2 border-orange-400 text-orange-500 rounded-lg">
      <button className="w-full" onClick={handleAllSortBtnClick}>
        All Sort
      </button>
    </div>
  );
};

export default AllSortBtn;
