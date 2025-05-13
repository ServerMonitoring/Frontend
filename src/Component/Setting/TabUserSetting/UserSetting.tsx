import React, { useState } from "react";
import "./UserSettings.scss";

interface User {
  id: number;
  username: string;
  role: string;
}

export default function UserSettings() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "admin", role: "Admin" },
    { id: 2, username: "user1", role: "User" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ username: "", password: "", role: "User" });

  // Открытие/закрытие модального окна
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Обработка изменений в форме
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  // Добавление нового пользователя
  const addUser = () => {
    if (!newUser.username || !newUser.password) return;

    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, newUserWithId]);
    setNewUser({ username: "", password: "", role: "User" });
    toggleModal();
  };

  // Удаление пользователя
  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-settings">
      <h3>User Settings</h3>

      {/* Таблица пользователей */}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Кнопка добавления пользователя */}
      <button className="add-user-btn" onClick={toggleModal}>
        Add User
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Add New User</h4>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={newUser.username}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={newUser.password}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Role:
                <select name="role" value={newUser.role} className="custom-select" onChange={handleInputChange}>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </label>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={toggleModal}>
                  Cancel
                </button>
                <button type="button" className="save-btn" onClick={addUser}>
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