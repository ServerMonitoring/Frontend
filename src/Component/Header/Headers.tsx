import "./headers.scss"

export default function Headers(){
  const isAuth = true
  const Language = "Ru"
  const Theme = "Black"
  const ArrHeadersRight=()=>{
    if(isAuth){
      return [
        <li><a href="index.html">Dashboard</a></li>,
        <li><a href="settings.html">Settings</a></li>,
        <li><a href="servers.html">Servers</a></li>,
      ]
    } else{
      return [
      <li><a href="servers.html">Language: {Language}</a></li>,
      <li><a href="servers.html">Theme: {Theme}</a></li>
      ]
    }
  }
  
  [
    <li><a href="index.html">Dashboard</a></li>,
    <li><a href="settings.html">Settings</a></li>,
    <li><a href="servers.html">Servers</a></li>,
  ]
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