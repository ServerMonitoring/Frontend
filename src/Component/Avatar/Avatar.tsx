import { useState } from "react";
import "./Avatar.scss"
import { useDispatch } from "react-redux";
import { logout } from "../../state/slice/authslice";
import { useNavigate } from "react-router-dom";

export default function Avatar(){
      const urlLogin = "/auth"
      const urlLK = "/profile"
      const navigator = useNavigate();
      const dispatch = useDispatch();
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const handleOpenProfileClick = () => {
          navigator(urlLK);
          setIsMenuOpen(false); // Закрываем меню после выбора
        };
        const handleGotoHomeClick = () => {
          dispatch(logout());
          navigator(urlLogin);
          setIsMenuOpen(false); // Закрываем меню после выбора
        };
    return(
        <>
        <div className="user-avatar" id="user-avatar"       
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}>
        <span>J</span> 
        {isMenuOpen && (
        <ul className="dropdown-menu">
          <li>
            <a onClick={()=>{handleOpenProfileClick()}}>
              Профиль
            </a>
          </li>
          <li>
            <a onClick={() => {handleGotoHomeClick()}}>
              Выйти из Аккаунта
            </a>
          </li>
        </ul>
      )}
      </div>
      </>
    )
}