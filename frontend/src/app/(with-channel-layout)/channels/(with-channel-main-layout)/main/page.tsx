"use client";
import style from "./page.module.css";
import { ResponsiveCalendar } from "@nivo/calendar";
import data from "./dummy.json";
export default function Page() {
  return (
    <div className={style.container}>
      <div className={style.calendar_container}>
        <ResponsiveCalendar
          data={data}
          from="2015-03-01"
          to="2016-07-12"
          emptyColor="#eeeeee"
          colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
            },
          ]}
        />
      </div>
    </div>
  );
}
