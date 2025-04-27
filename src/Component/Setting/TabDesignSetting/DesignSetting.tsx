  // Компонент для Design Settings
export default function DesignSettings(){
    return (
      <div className="card">
        <h3>Design Settings</h3>
        <form id="design-settings-form">
          <label>
            Theme:
            <select>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System Default</option>
            </select>
          </label>
          <label>
            Font Size:
            <select>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
          <button type="submit">Apply Design Changes</button>
        </form>
      </div>
    );
  };