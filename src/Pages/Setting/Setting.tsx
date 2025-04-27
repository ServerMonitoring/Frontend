import{ useState } from "react";
import "./Setting.scss"
import UserSettings from "../../Component/Setting/TabUserSetting/UserSetting";
import DesignSettings from "../../Component/Setting/TabDesignSetting/DesignSetting";
import OtherSettings from "../../Component/Setting/TabOtherSetting/OtherSetting";
// Компонент для вкладок
const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState("user-settings"); // Состояние активной вкладки
  
    // Обработчик переключения вкладок
    const handleTabClick = (tab:string) => {
      setActiveTab(tab);
    };
  
    return (
      <main className="netdata-content">
        <section id="settings" className="page active">
          <h2>Settings</h2>
  
          {/* Вкладки */}
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === "user-settings" ? "active" : ""}`}
              onClick={() => handleTabClick("user-settings")}
            >
              User Settings
            </button>
            <button
              className={`tab-button ${activeTab === "design-settings" ? "active" : ""}`}
              onClick={() => handleTabClick("design-settings")}
            >
              Design Settings
            </button>
            <button
              className={`tab-button ${activeTab === "other-settings" ? "active" : ""}`}
              onClick={() => handleTabClick("other-settings")}
            >
              Other Settings
            </button>
          </div>
  
          {/* Содержимое вкладок */}
          <div className="tab-content">
            {activeTab === "user-settings" && <UserSettings />}
            {activeTab === "design-settings" && <DesignSettings />}
            {activeTab === "other-settings" && <OtherSettings />}
          </div>
        </section>
      </main>
    );
  };
  
 export default SettingsPage;