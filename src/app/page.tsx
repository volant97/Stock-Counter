"use client";
import { useRef, useState } from "react";
import { items } from "@/data/items";

export default function Home() {
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    items.forEach((v) => {
      initial[v.shortName] = 0;
    });
    return initial;
  });

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

  const handleResetBtnOnClick = (displayZone: number) => {
    const newCounts = { ...counts };
    items
      .filter((v) => v.displayZone === displayZone)
      .forEach((v) => {
        newCounts[v.shortName] = 0;
      });
    setCounts(newCounts);
  };

  return (
    <div className="">
      <h1>음료 냉장고 1</h1>
      <div className="grid grid-cols-4 gap-2 p-2 border-2 border-blue-400">
        {items
          .filter((v) => v.displayZone === 1)
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
                } ${
                  v.shortName === "" &&
                  "opacity-50 pointer-events-none select-none"
                }`}
              >
                <p className="text-sm font-semibold text-inherit">
                  {counts[v.shortName]}
                </p>
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={() => handleResetBtnOnClick(1)}
        className="w-40 h-14 rounded-xl bg-slate-300"
      >
        리셋
      </button>
      <h1>음료 냉장고 2</h1>
      <div className="grid grid-cols-4 gap-2 p-2 border-2 border-blue-400">
        {items
          .filter((v) => v.displayZone === 2)
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
                v.shortName === "" &&
                "opacity-50 pointer-events-none select-none"
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
      <button
        onClick={() => handleResetBtnOnClick(2)}
        className="w-40 h-14 rounded-xl bg-slate-300"
      >
        리셋
      </button>
      <h1>라면 진열대 1</h1>
      <div className="grid grid-cols-3 gap-2 p-2 border-2 border-red-400">
        {items
          .filter((v) => v.displayZone === 3)
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
                v.shortName === "" &&
                "opacity-50 pointer-events-none select-none"
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
      <button
        onClick={() => handleResetBtnOnClick(3)}
        className="w-40 h-14 rounded-xl bg-slate-300"
      >
        리셋
      </button>
      <h1>라면 진열대 2</h1>
      <div className="grid grid-cols-3 gap-2 p-2 border-2 border-red-400">
        {items
          .filter((v) => v.displayZone === 4)
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
                } ${
                  v.shortName === "" &&
                  "opacity-50 pointer-events-none select-none"
                }`}
              >
                <p className="text-sm font-semibold text-inherit">
                  {counts[v.shortName]}
                </p>
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={() => handleResetBtnOnClick(4)}
        className="w-40 h-14 rounded-xl bg-slate-300"
      >
        리셋
      </button>
      <h1>과자 진열대 1</h1>
      <div className="grid grid-cols-3 gap-2 p-2 border-2 border-orange-400">
        {items
          .filter((v) => v.displayZone === 5)
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
                v.shortName === "" &&
                "opacity-50 pointer-events-none select-none"
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
      <button
        onClick={() => handleResetBtnOnClick(5)}
        className="w-40 h-14 rounded-xl bg-slate-300"
      >
        리셋
      </button>
      <h1>기타 진열대 1</h1>
      <div className="grid grid-cols-3 gap-2 p-2 border-2 border-yellow-400">
        {items
          .filter((v) => v.displayZone === 6)
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
                v.shortName === "" &&
                "opacity-50 pointer-events-none select-none"
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
      <button
        onClick={() => handleResetBtnOnClick(6)}
        className="w-40 h-14 rounded-xl bg-slate-300"
      >
        리셋
      </button>
      <h1>기타 진열대 2</h1>
      <div className="grid grid-cols-3 gap-2 p-2 border-2 border-yellow-400">
        {items
          .filter((v) => v.displayZone === 7)
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
                v.shortName === "" &&
                "opacity-50 pointer-events-none select-none"
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
      <button
        onClick={() => handleResetBtnOnClick(7)}
        className="w-40 h-14 rounded-xl bg-slate-300"
      >
        리셋
      </button>
    </div>
  );
}
