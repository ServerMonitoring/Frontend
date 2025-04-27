import "./headers.scss"
import { useTranslation } from "react-i18next"
import ButtonTheme from "./button/Theme/buttonTheme"
import ButtonLanguage from "./button/Language/buttonLanguage"

export default function Headers(){
  const isAuth = false
  const {t}= useTranslation();
  const ArrHeadersRight=()=>{
    if(isAuth){
      return [
        <li><a href="index.html">{t('Headers.ElementDashboard')}</a></li>,
        <li><a href="settings.html">{t('Headers.ElementSetting')}</a></li>,
        <li><a href="servers.html">{t('Headers.ElementServer')}</a></li>,
      ]
    } else{
      return (   
      <>
        <ButtonTheme />
        <ButtonLanguage />
      </>)
    
    }
  }
    return(
        <header className="netdata-header">
        <div className="header-left">
          <img id="logo" src="/icons.png"></img>
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