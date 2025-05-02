import { useTranslation } from "react-i18next"
import "./SidebarRight.scss"

export default function SideBarRight(){
  const {t}=useTranslation();
    return(
      <aside className="netdata-sidebar">
        <h2>{t("SideBarRight.h2")}</h2>
        <ul id="sidebar-server-list">
          <li><a href="servers.html" className="active">Servers 1</a></li>
          <li><a href="analytics.html">Servers 2</a></li>
        </ul>
      </aside>
    )
}