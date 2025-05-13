import React, { useState } from "react";
import MetricChart from "../MetricChart/MetricHart";

interface Metrics {
  cpu: number[];
  memory: number[];
  disk: number[];
}

interface ContentTabsProps {
  metrics: Metrics;
}

const ContentTabs: React.FC<ContentTabsProps> = ({ metrics }) => {
  const [activeTab, setActiveTab] = useState("cpu");

  return (
    <div className="content-tabs">
      {/* Вкладки */}
      <div className="tabs">
      <button
          className={`tab-button ${activeTab === "Общие характеристики" ? "active" : ""}`}
          onClick={() => setActiveTab("Общие характеристики")}
        >
          Общие характеристики
        </button>
        <button
          className={`tab-button ${activeTab === "cpu" ? "active" : ""}`}
          onClick={() => setActiveTab("cpu")}
        >
          CPU
        </button>
        <button
          className={`tab-button ${activeTab === "memory" ? "active" : ""}`}
          onClick={() => setActiveTab("memory")}
        >
          Memory
        </button>
        <button
          className={`tab-button ${activeTab === "disk" ? "active" : ""}`}
          onClick={() => setActiveTab("disk")}
        >
          Disk
        </button>
        <button
          className={`tab-button ${activeTab === "gpu" ? "active" : ""}`}
          onClick={() => setActiveTab("gpu")}
        >
          GPU
        </button>
        <button
          className={`tab-button ${activeTab === "metric" ? "active" : ""}`}
          onClick={() => setActiveTab("metric")}
        >
          Metric
        </button>
        <button
          className={`tab-button ${activeTab === "network" ? "active" : ""}`}
          onClick={() => setActiveTab("network")}
        >
          Network
        </button>
        <button
          className={`tab-button ${activeTab === "swap" ? "active" : ""}`}
          onClick={() => setActiveTab("swap")}
        >
          Swap
        </button>
      </div>

      {/* Графики */}
      <div className="tab-content">
        {activeTab === "Общие характеристики" && <MetricChart title="CPU Usage" data={metrics.cpu} />}
        {activeTab === "cpu" && <MetricChart title="CPU Usage" data={metrics.cpu} />}
        {activeTab === "memory" && <MetricChart title="Memory Usage" data={metrics.memory} />}
        {activeTab === "disk" && <MetricChart title="Disk Usage" data={metrics.disk} />}
        {activeTab === "gpu" && <MetricChart title="GPU Usage" data={metrics.disk} />}
        {activeTab === "metric" && <MetricChart title="Metric Usage" data={metrics.disk} />}
        {activeTab === "network" && <MetricChart title="network Usage" data={metrics.disk} />}
        {activeTab === "swap" && <MetricChart title="Swap Usage" data={metrics.disk} />}
      </div>
    </div>
  );
};

export default ContentTabs;