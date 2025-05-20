import React, { useState } from "react";
import "./ServerSettings.scss";

interface Server {
  id: number;
  name: string;
  ip: string;
}

export default function ServerSettings() {
  const [servers, setServers] = useState<Server[]>([
    { id: 1, name: "Main Server", ip: "192.168.1.10" },
    { id: 2, name: "Backup Server", ip: "192.168.1.11" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newServer, setNewServer] = useState({ name: "", ip: "" });

  // Открытие/закрытие модального окна
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Обработка изменений в форме
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewServer((prev) => ({ ...prev, [name]: value }));
  };

  // Добавление нового сервера
  const addServer = () => {
    if (!newServer.name || !newServer.ip) return;

    const newServerWithId = { ...newServer, id: servers.length + 1 };
    setServers([...servers, newServerWithId]);
    setNewServer({ name: "", ip: "" });
    toggleModal();
  };

  // Удаление сервера
  const deleteServer = (id: number) => {
    setServers(servers.filter((server) => server.id !== id));
  };

  return (
    <div className="server-settings">
      <h3>Server Settings</h3>

      {/* Таблица серверов */}
      <table className="server-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>IP Address</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server) => (
            <tr key={server.id}>
              <td>{server.id}</td>
              <td>{server.name}</td>
              <td>{server.ip}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteServer(server.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="delete-btn" onClick={() => deleteServer(server.id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Кнопка добавления сервера */}
      <button className="add-server-btn" onClick={toggleModal}>
        Add Server
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Add New Server</h4>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Enter server name"
                  value={newServer.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                IP Address:
                <input
                  type="text"
                  name="ip"
                  placeholder="Enter server IP"
                  value={newServer.ip}
                  onChange={handleInputChange}
                />
              </label>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={toggleModal}>
                  Cancel
                </button>
                <button type="button" className="save-btn" onClick={addServer}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}