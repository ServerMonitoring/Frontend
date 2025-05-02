import {  useState } from "react"
import "./headers.scss"
import { setLanguage } from "../../state/slice/languageSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { useTranslation } from "react-i18next"
import { toggleTheme } from "../../state/slice/themeSlice"

export default function Headers(){
  const isAuth = false
  const {t}= useTranslation();
  const dispatch = useDispatch();
  const selectedLang = useSelector((state:RootState) => state.language.currentLanguage);
  const selectedTheme = useSelector((state:RootState) => state.theme.isDarkMode);// Состояние для выбранного языка
  const ArrHeadersRight=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpenTheme, setIsMenuOpenTheme] = useState(false); // Состояние для видимости меню
      // Обработчик выбора языка
  const handleLanguageClick = (lang: string) => {
    dispatch(setLanguage(lang));
    setIsMenuOpen(false); // Закрываем меню после выбора
  };
  const handleThemeClick = (theme:boolean) => {
    dispatch(toggleTheme(theme));
    setIsMenuOpenTheme(false); // Закрываем меню после выбора
  };
    if(isAuth){
      return [
        <li><a href="/setting">{t('Headers.ElementSetting')}</a></li>,
        <li><a href="/server">{t('Headers.ElementServer')}</a></li>,
        <li><a href="/help">{t('Headers.ElementHelp')}</a></li>
      ]
    } else{
      return     (
      <>
      <div
      className="language-dropdown"
      onMouseEnter={() => setIsMenuOpenTheme(true)}
      onMouseLeave={() => setIsMenuOpenTheme(false)}
    >
      {/* Кнопка с выбранным языком */}
      <button className="language-button">
      {t('Headers.Theme.Name')}: {selectedTheme? t('Headers.Theme.Black'):t('Headers.Theme.White')}
      </button>

      {/* Выпадающее меню */}
      {isMenuOpenTheme && (
        <ul className="dropdown-menu">
          <li>
            <a  onClick={() => handleThemeClick(true)}>
              {t('Headers.Theme.Black')}
            </a>
          </li>
          <li>
            <a  onClick={() => handleThemeClick(false)}>
              {t('Headers.Theme.White')}
            </a>
          </li>
        </ul>
      )}
    </div>
      <div
      className="language-dropdown"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      {/* Кнопка с выбранным языком */}
      <button className="language-button">
      {t('Headers.Language')}: {selectedLang}
      </button>

      {/* Выпадающее меню */}
      {isMenuOpen && (
        <ul className="dropdown-menu">
          <li>
            <a  onClick={() => handleLanguageClick("en")}>
              English
            </a>
          </li>
          <li>
            <a  onClick={() => handleLanguageClick("ru")}>
              Русский
            </a>
          </li>
        </ul>
      )}
    </div>
    </>)
    }
  }
    return(
        <header className="netdata-header">
        <div className="header-left">
          <img src="./public/"></img>
          <h1>Server Monitoring</h1>
        </div>
        <div className="header-right">
          <nav>
            <ul>
                <ArrHeadersRight />
            </ul>
          </nav> 
        </div>
      </header>
    )
}