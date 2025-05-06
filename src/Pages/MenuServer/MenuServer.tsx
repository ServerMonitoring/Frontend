import React, { useEffect, useState } from "react";
import ServerList from "../../Component/ServerList/serverList";
import "./MenuServer.scss"

interface Server {
  id: number;
  name: string;
  address: string;
  status: "online" | "offline";
}

const ServersPage: React.FC = () => {
  const [servers, setServers] = useState<Server[]>([]);

  // Загрузка данных из JSON-файла
  useEffect(() => {
    fetch("/serverData.json")
      .then((response) => response.json())
      .then((data) => setServers(data))
      .catch((error) => console.error("Error loading server data:", error));
  }, []);

  return (
    <div className="servers-page">
      <h1>Servers</h1>
      <ServerList servers={servers} />
    </div>
  );
};

export default ServersPage;