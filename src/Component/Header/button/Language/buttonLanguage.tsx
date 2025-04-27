import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../state/RootReduceer";
import { setLanguage } from "../../../../state/slice/languageSlice";
import "./buttonLanguage.scss"

export default function ButtonLanguage(){
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state:RootState) => state.language.currentLanguage); // Состояние текущего языка
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для видимости меню

  // Обработчик выбора языка
  const handleLanguageClick = (lang:string) => {
    dispatch(setLanguage(lang)); // Диспатчим действие для изменения языка
    setIsMenuOpen(false); // Закрываем меню после выбора
  };

  return (
    <div
      className="language-dropdown"
      onMouseEnter={() => setIsMenuOpen(true)} // Показать меню при наведении
      onMouseLeave={() => setIsMenuOpen(false)} // Скрыть меню при уходе курсора
    >
      {/* Кнопка с текущим языком */}
      <button className="language-button">
        {currentLanguage === "en" ? "English" : "Русский"}
      </button>

      {/* Выпадающее меню */}
      {isMenuOpen && (
        <ul className="dropdown-menu">
          <li>
            <a onClick={() => handleLanguageClick("en")}>English</a>
          </li>
          <li>
            <a onClick={() => handleLanguageClick("ru")}>Русский</a>
          </li>
        </ul>
      )}
    </div>
  );
};
