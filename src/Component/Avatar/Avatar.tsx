import "./Avatar.scss"
export default function Avatar(){
    return(
        <>
        <div className="user-avatar" id="user-avatar">
        <span>J</span> 
        <div className="dropdown-menu" id="dropdown-menu">
          <ul>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="settings.html">Settings</a></li>
            <li><a href="logout.html">Logout</a></li>
          </ul>
        </div>
      </div>
      </>
    )
}