import React from "react";
import Chart from "react-google-charts";
import "./styles.css"
const chartProjects = () => {

 const data = [
  ["Language", "Português"],
  ["Óleo e Gás", 50.20],
  ["Embrapii", 46.41],
  ["Outros", 3.39 ],
];
const options = {
  legend: "Este e um grafico",
  pieSliceText: "label",
  pieStartAngle: 10,
}

  return (
    <div className="chart">
    <h1>Fonte de recursos para projetos de P&D</h1>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
    </div>
  );
}
export default chartProjects;





