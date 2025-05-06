import { useTranslation } from "react-i18next";
import "./SidebarRight.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Server {
  id: number;
  name: string;
  address: string;
  status: "online" | "offline";
}

function extractLastNumberFromURL(url: string): number | null {
  const matches = url.match(/\d+/g);
  return matches && matches.length > 0 ? parseInt(matches[matches.length - 1], 10) : null;
}

export default function SideBarRight() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [servers, setServers] = useState<Server[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false); // Состояние для скрытия/раскрытия панели
  const id = extractLastNumberFromURL(window.location.href);

  useEffect(() => {
    fetch("/serverData.json")
      .then((response) => response.json())
      .then((data) => {
        setServers(data);
        const found = data.find((obj: Server) => obj.id === id);
        if (!found) {
          navigate("/error404");
        }
      })
      .catch((error) => console.error("Error loading server data:", error));
  }, []);

  return (
    <aside className={`netdata-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="h2">

      {
        !isCollapsed &&  <h2>{t("Monitoring.SideBarRight.h2")}</h2>
      }
              {/* Кнопка-стрелочка */}
      <button
        className="toggle-button"
        onClick={() => setIsCollapsed(!isCollapsed)} // Переключение состояния
      >
        {isCollapsed ? ">" : "<"}
      </button>
      </div>

      {/* Заголовок и список серверов */}
      {!isCollapsed && (
        <>
          <ul id="sidebar-server-list">
            {servers.map((server) => (
              <li key={server.id}>
                <a href={`/server/${server.id}`} className={server.id === id ? "active" : ""}>
                  {server.name}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}