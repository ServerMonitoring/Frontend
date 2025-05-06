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
      </div>

      {/* Графики */}
      <div className="tab-content">
        {activeTab === "Общие характеристики" && <MetricChart title="CPU Usage" data={metrics.cpu} />}
        {activeTab === "cpu" && <MetricChart title="CPU Usage" data={metrics.cpu} />}
        {activeTab === "memory" && <MetricChart title="Memory Usage" data={metrics.memory} />}
        {activeTab === "disk" && <MetricChart title="Disk Usage" data={metrics.disk} />}
      </div>
    </div>
  );
};

export default ContentTabs;