
import "./headers.scss"

export default function Headers(){
    return(
        <header className="netdata-header">
        <div className="header-left">
          <img src="./public/"></img>
          <h1>Server Monitoring</h1>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li><a href="index.html">Dashboard</a></li>
              <li><a href="settings.html">Settings</a></li>
              <li><a href="servers.html">Servers</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}