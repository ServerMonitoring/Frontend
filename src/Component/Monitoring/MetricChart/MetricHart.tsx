import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./MetricChart.scss";

interface MetricChartProps {
  title: string;
  data: number[];
}

const MetricChart: React.FC<MetricChartProps> = ({ title, data }) => {
  const [timeRange, setTimeRange] = useState("1h"); // По умолчанию "1 час"

  // Функция для фильтрации данных в зависимости от временного интервала
  const getFilteredData = () => {
    switch (timeRange) {
      case "1m":
        return data.slice(-1); // Последняя минута
      case "5m":
        return data.slice(-5); // Последние 5 минут
      case "15m":
        return data.slice(-15); // Последние 15 минут
      case "1h":
        return data.slice(-60); // Последний час (60 минут)
      case "1d":
        return data.slice(-1440); // Последний день (1440 минут)
      case "1w":
        return data.slice(-10080); // Последняя неделя (10080 минут)
      case "1mo":
        return data.slice(-43200); // Последний месяц (43200 минут)
      default:
        return data; // Все данные
    }
  };

  const filteredData = getFilteredData();

  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: Array.from({ length: filteredData.length }, (_, i) => `T-${i + 1}`), // Динамические метки времени
    },
    colors: ["var(--primary-color)"], // Используем CSS-переменную
    stroke: {
      curve: "smooth",
    },
  };

  // Функция для перенаправления
  const handleInfoClick = () => {
    window.location.href = "/info"; // Замените "/info" на нужный URL
  };

  return (
    <div className="metric-chart">
      {/* Заголовок с иконкой вопроса */}
      <div className="chart-header">
        <h3>{title}</h3>
        <div className="info-icon" onClick={handleInfoClick}>
          <span className="icon">?</span>
          <div className="tooltip">Click for more info</div>
        </div>
      </div>

      {/* Переключатель времени */}
      <div className="time-range-selector">
        <button
          className={timeRange === "1m" ? "active" : ""}
          onClick={() => setTimeRange("1m")}
        >
          1 Minute
        </button>
        <button
          className={timeRange === "5m" ? "active" : ""}
          onClick={() => setTimeRange("5m")}
        >
          5 Minutes
        </button>
        <button
          className={timeRange === "15m" ? "active" : ""}
          onClick={() => setTimeRange("15m")}
        >
          15 Minutes
        </button>
        <button
          className={timeRange === "1h" ? "active" : ""}
          onClick={() => setTimeRange("1h")}
        >
          1 Hour
        </button>
        <button
          className={timeRange === "1d" ? "active" : ""}
          onClick={() => setTimeRange("1d")}
        >
          1 Day
        </button>
        <button
          className={timeRange === "1w" ? "active" : ""}
          onClick={() => setTimeRange("1w")}
        >
          1 Week
        </button>
        <button
          className={timeRange === "1mo" ? "active" : ""}
          onClick={() => setTimeRange("1mo")}
        >
          1 Month
        </button>
      </div>

      {/* График */}
      <Chart
        options={chartOptions}
        series={[{ name: title, data: filteredData }]}
        type="line"
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default MetricChart;