"use client";
import { useRef, useState } from "react";

export default function Home() {
  const items = ["콜라", "사이다", "환타", "울트라", "망고", "갈배"];
  const [counts, setCounts] = useState(Array(items.length).fill(0));

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isLongPressedRef = useRef(false);

  const handleItemBoxClick = (index: number) => {
    if (isLongPressedRef.current) {
      isLongPressedRef.current = false;
      return;
    }
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleLongPressStart = (index: number) => {
    timerRef.current = setTimeout(() => {
      const newCounts = [...counts];
      newCounts[index] = 0;
      setCounts(newCounts);
      isLongPressedRef.current = true;
    }, 1500);
  };

  const handleLongPressEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="">
      <h1>음료 냉장고 1</h1>
      <div className="grid grid-cols-4 gap-2 p-2 border-2 border-blue-400">
        {items.map((v, i) => (
          <div
            key={i}
            onClick={() => handleItemBoxClick(i)}
            onMouseDown={() => handleLongPressStart(i)}
            onMouseUp={handleLongPressEnd}
            onMouseLeave={handleLongPressEnd}
            onTouchStart={() => handleLongPressStart(i)}
            onTouchEnd={handleLongPressEnd}
            className="relative flex justify-center items-center bg-gray-200 rounded-lg shadow-md p-2 h-20 text-center hover:drop-shadow-md transition-all"
          >
            <p>{v}</p>
            <div className="absolute -top-1 -right-1 flex justify-center items-center size-6 bg-red-400 rounded-full">
              <p className="text-sm font-semibold text-yellow-100">
                {counts[i]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
