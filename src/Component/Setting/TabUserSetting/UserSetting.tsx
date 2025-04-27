export default function UserSettings() {
    return (
      <div className="card">
        <h3>User Settings</h3>
        <form id="user-settings-form">
          <label>
            Username:
            <input type="text" placeholder="Enter username" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter email" />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter password" />
          </label>
          <button type="submit">Save User Settings</button>
        </form>
      </div>
    );
  };