import React from "react";
import { useNavigate } from "react-router-dom";

interface Server {
  id: number;
  name: string;
  address: string;
  status: "online" | "offline";
}

interface ServerListProps {
  servers: Server[];
}

const ServerList: React.FC<ServerListProps> = ({ servers }) => {
    const navigator = useNavigate()
  return (
    <ul className="server-list">
      {servers.map((server) => (
        <li onClick={()=>{navigator(`/server/${server.id}`)}} key={server.id} className="server-item">
          <div className="server-info">
            <h3>{server.name}</h3>
            <p>{server.address}</p>
          </div>
          <div
            className={`status-indicator ${
              server.status === "online" ? "online" : "offline"
            }`}
          >
            {server.status.toUpperCase()}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServerList;