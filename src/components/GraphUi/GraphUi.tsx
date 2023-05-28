import React from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const data = [["Pizza", "Popularity"]];

export const options = {
  title: "Протоколы по специалистам",
  pieHole: 0.4,
  is3D: false,
};

export function GraphUi() {
  const { doctorsStat } = useSelector((state: RootState) => state.main);

  const dataNew = doctorsStat && Object.entries(doctorsStat);

  return (
    <>
      {doctorsStat && (
        <Chart
          chartType="PieChart"
          data={[...data, ...dataNew]}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      )}
    </>
  );
}
