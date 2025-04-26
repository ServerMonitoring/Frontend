import "./SidebarRight.scss"

export default function SideBarRight(){
    return(
      <aside className="netdata-sidebar">
        <h2>Servers</h2>
        <ul id="sidebar-server-list">
          <li><a href="settings.html">Servers</a></li>
          <li><a href="servers.html" className="active">Servers 1</a></li>
          <li><a href="analytics.html">Servers 2</a></li>
        </ul>
      </aside>
    )
}