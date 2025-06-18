"use client";

import React, { useRef } from "react";
import { items } from "@/data/items";
import { ResetIcon } from "../icons/ResetIcon";

interface Props {
  displayZoneNum: number;
  displayZoneName: string;
  counts: Record<string, number>;
  setCounts: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  zoneColor: string;
}

const DisplayZone = ({
  displayZoneNum,
  displayZoneName,
  counts,
  setCounts,
  zoneColor,
}: Props) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isLongPressedRef = useRef(false);

  const handleItemBoxClick = (shortName: string) => {
    if (isLongPressedRef.current) {
      isLongPressedRef.current = false;
      return;
    }
    setCounts((prev) => ({
      ...prev,
      [shortName]: prev[shortName] + 1,
    }));
  };

  const handleLongPressStart = (shortName: string) => {
    timerRef.current = setTimeout(() => {
      setCounts((prev) => ({
        ...prev,
        [shortName]: 0,
      }));
      isLongPressedRef.current = true;
    }, 1500);
  };

  const handleLongPressEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleResetBtnOnClick = (
    displayZoneNum: number,
    displayZoneName: string
  ) => {
    const confirmed = window.confirm(
      `${displayZoneName}을(를) 초기화하시겠습니까?`
    );
    if (!confirmed) return;

    const newCounts = { ...counts };
    items
      .filter((v) => v.displayZone === displayZoneNum)
      .forEach((v) => {
        newCounts[v.shortName] = 0;
      });
    setCounts(newCounts);
  };

  const isZoneAllZero = (zoneNum: number) => {
    return items
      .filter((v) => v.displayZone === zoneNum)
      .every((v) => counts[v.shortName] === 0);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1 h-10">
        <h1 className="text-xl">{displayZoneName}</h1>
        <button
          onClick={() => handleResetBtnOnClick(displayZoneNum, displayZoneName)}
          className={`flex justify-center items-center size-8 transition-all ${
            isZoneAllZero(displayZoneNum)
              ? "opacity-0 pointer-events-none select-none"
              : "opacity-100"
          }`}
        >
          <ResetIcon />
        </button>
      </div>
      <div
        className={`grid grid-cols-4 gap-2 p-2 border-2 rounded-md ${zoneColor}`}
      >
        {items
          .filter((v) => v.displayZone === displayZoneNum)
          .map((v, i) => (
            <div
              key={i}
              onClick={() => handleItemBoxClick(v.shortName)}
              onMouseDown={() => handleLongPressStart(v.shortName)}
              onMouseUp={handleLongPressEnd}
              onMouseLeave={handleLongPressEnd}
              onTouchStart={() => handleLongPressStart(v.shortName)}
              onTouchEnd={handleLongPressEnd}
              className={`relative flex justify-center items-center active:bg-yellow-200 rounded-lg shadow-md p-2 h-20 text-center hover:drop-shadow-md transition-all ${
                counts[v.shortName] === 0 ? "bg-gray-200" : "bg-red-200"
              } ${
                v.shortName === ""
                  ? "opacity-50 pointer-events-none select-none"
                  : ""
              }`}
            >
              <p>{v.shortName}</p>
              <div className="absolute top-1 left-1 opacity-30">
                <p>{v.defaultCount}</p>
              </div>
              <div
                className={`absolute -top-1 -right-1 flex justify-center items-center size-6  rounded-full ${
                  counts[v.shortName] === 0
                    ? "bg-gray-300 text-gray-400"
                    : "bg-red-400 text-yellow-100"
                }`}
              >
                <p className="text-sm font-semibold text-inherit">
                  {counts[v.shortName]}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayZone;
