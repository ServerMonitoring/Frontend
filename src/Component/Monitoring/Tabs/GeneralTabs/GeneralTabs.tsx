import React, { useState } from "react";
import "./GeneralTabs.scss";

interface Tab {
  id: string;
  label: string;
  icon: string;
  content: JSX.Element;
}

export default function ServerDetails() {
  const [activeTab, setActiveTab] = useState("general");
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Статические данные для характеристик сервера
  const tabs: Tab[] = [
    {
      id: "general",
      label: "Общие",
      icon: "📋",
      content: (
        <div className="tab-content">
          <p><strong>Имя сервера:</strong> Main Server</p>
          <p><strong>IP-адрес:</strong> 192.168.1.10</p>
          <p><strong>Операционная система:</strong> Ubuntu 22.04 LTS</p>
          <p><strong>Время работы:</strong> 12 дней 5 часов</p>
        </div>
      ),
    },
    {
      id: "cpu",
      label: "Процессор",
      icon: "💻",
      content: (
        <div className="tab-content">
          <p><strong>Модель процессора:</strong> Intel Core i7-12700K</p>
          <p><strong>Количество ядер:</strong> 12</p>
          <p><strong>Частота:</strong> 3.6 GHz</p>
          <p><strong>Температура:</strong> 55°C</p>
        </div>
      ),
    },
    {
      id: "memory",
      label: "Память",
      icon: "💾",
      content: (
        <div className="tab-content">
          <p><strong>Общий объем:</strong> 32 GB</p>
          <p><strong>Используется:</strong> 16 GB (50%)</p>
          <p><strong>Свободно:</strong> 16 GB (50%)</p>
        </div>
      ),
    },
    {
      id: "network",
      label: "Сеть",
      icon: "🌐",
      content: (
        <div className="tab-content">
          <p><strong>Загрузка:</strong> 1.2 MB/s</p>
          <p><strong>Выгрузка:</strong> 800 KB/s</p>
          <p><strong>Активные соединения:</strong> 12</p>
        </div>
      ),
    },
  ];

  // Плавное обновление контента
  const handleTabChange = (tabId: string) => {
    setIsContentVisible(false); // Скрываем текущий контент
    setTimeout(() => {
      setActiveTab(tabId);
      setIsContentVisible(true); // Показываем новый контент
    }, 300); // Задержка для анимации
  };

  return (
    <div className="server-details-container">
      {/* Панель вкладок */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => handleTabChange(tab.id)}
          >
            <span className="icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Содержимое активной вкладки */}
      <div className={`tab-content-wrapper ${isContentVisible ? "visible" : ""}`}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}