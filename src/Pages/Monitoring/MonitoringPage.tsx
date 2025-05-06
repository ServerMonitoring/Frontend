import React, { useEffect, useState } from "react";
import SideBarRight from "../../Component/Monitoring/SideBarRight/SideBarRight";
import ContentTabs from "../../Component/Monitoring/ContentTabs/ContentTabs"
import "./Monitoring.scss"

interface Server {
  id: number;
  name: string;
  address: string;
  status: "online" | "offline";
  metrics: {
    cpu: number[];
    memory: number[];
    disk: number[];
  };
}


export default function MonitoringPage() {
  const [servers, setServers] = useState<Server[]>([]);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);

  // Загрузка данных из JSON-файла
  useEffect(() => {
    fetch("/serverData.json")
      .then((response) => response.json())
      .then((data) => {
        setServers(data);
        const id = extractLastNumberFromURL(window.location.href);
        const found = data.find((server:Server) => server.id === id);
        if (found) {
          setSelectedServer(found);
        }
      })
      .catch((error) => console.error("Error loading server data:", error));
  }, []);

  function extractLastNumberFromURL(url: string): number | null {
    const matches = url.match(/\d+/g);
    return matches && matches.length > 0 ? parseInt(matches[matches.length - 1], 10) : null;
  }

  if (!selectedServer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="monitoring-page">
      {/* Боковая панель */}
      <div className="sidebaritems">
        <SideBarRight />
      </div>
      {/* Основной контент */}
      <div className="main-content">
        <ContentTabs metrics={selectedServer.metrics} />
      </div>
    </div>
  );
}