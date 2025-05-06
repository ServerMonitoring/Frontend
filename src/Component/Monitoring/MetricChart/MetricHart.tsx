
import React from "react";
import Chart from "react-apexcharts";
import "./MetricChart.scss";

interface MetricChartProps {
  title: string;
  data: number[];
}

const MetricChart: React.FC<MetricChartProps> = ({ title, data }) => {
  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    colors: ["#28a745"],
    stroke: {
      curve: "smooth",
    },
  };

  return (
    <div className="metric-chart">
      <h3>{title}</h3>
      <Chart
      options={chartOptions}
        series={[{ name: title, data }]}
        type="line"
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default MetricChart;