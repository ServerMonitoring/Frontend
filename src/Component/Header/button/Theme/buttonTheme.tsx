import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../state/RootReduceer";
import { toggleTheme } from "../../../../state/slice/themeSlice";
import "./buttonTheme.scss"

export default function ButtonTheme(){
  const dispatch = useDispatch();
  const currentTheme = useSelector((state:RootState) => state.theme.isDarkMode); // Состояние текущей темы
  const [isMenuOpenTheme, setIsMenuOpenTheme] = useState(false); // Состояние для видимости меню

  // Обработчик выбора темы
  const handleThemeClick = (state: boolean) => {
    dispatch(toggleTheme(state)); // Диспатчим действие для изменения темы
    setIsMenuOpenTheme(false); // Закрываем меню после выбора
  };

  return (
    <div
      className="theme-dropdown"
      onMouseEnter={() => setIsMenuOpenTheme(true)}
      onMouseLeave={() => setIsMenuOpenTheme(false)}
    >
      {/* Кнопка с текущей темой */}
      <button className="theme-button">
        {currentTheme === true ? "Dark Mode" : "Light Mode"}
      </button>

      {/* Выпадающее меню */}
      {isMenuOpenTheme && (
        <ul className=".dropdown-menu-theme">
          <li>
            <a onClick={() => handleThemeClick(false)}>Light Mode</a>
          </li>
          <li>
            <a onClick={() => handleThemeClick(true)}>Dark Mode</a>
          </li>
        </ul>
      )}
    </div>
  );
};