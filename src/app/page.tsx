"use client";
import { useState } from "react";
import { items } from "@/data/items";
import { DisplayZone } from "@/components/count/DisplayZone";

export default function Home() {
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    items.forEach((v) => {
      initial[v.shortName] = 0;
    });
    return initial;
  });

  return (
    <div className="flex flex-col gap-5">
      <DisplayZone
        displayZoneNum={1}
        displayZoneName={"음료 냉장고 1"}
        counts={counts}
        setCounts={setCounts}
        zoneColor={"border-blue-400"}
      />
      <DisplayZone
        displayZoneNum={2}
        displayZoneName={"음료 냉장고 2"}
        counts={counts}
        setCounts={setCounts}
        zoneColor={"border-blue-400"}
      />
      <DisplayZone
        displayZoneNum={3}
        displayZoneName={"라면 진열대 1"}
        counts={counts}
        setCounts={setCounts}
        zoneColor={"border-red-400"}
      />
      <DisplayZone
        displayZoneNum={4}
        displayZoneName={"라면 진열대 2"}
        counts={counts}
        setCounts={setCounts}
        zoneColor={"border-red-400"}
      />
      <DisplayZone
        displayZoneNum={5}
        displayZoneName={"과자 진열대"}
        counts={counts}
        setCounts={setCounts}
        zoneColor={"border-green-400"}
      />
      <DisplayZone
        displayZoneNum={6}
        displayZoneName={"기타 진열대 1"}
        counts={counts}
        setCounts={setCounts}
        zoneColor={"border-yellow-400"}
      />
      <DisplayZone
        displayZoneNum={7}
        displayZoneName={"기타 진열대 2"}
        counts={counts}
        setCounts={setCounts}
        zoneColor={"border-yellow-400"}
      />
    </div>
  );
}
