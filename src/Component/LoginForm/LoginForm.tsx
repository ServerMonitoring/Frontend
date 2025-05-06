import { useTranslation } from "react-i18next";
import "./LoginForm.scss"
import { useDispatch } from "react-redux";
import { login } from "../../state/slice/authslice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





export default function LoginForm(){
  const [username,setLogin] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const navigator = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = {
    id:0,
    username:username,
    password:password,
    token:"asdad",
    role:"auth"
  }
  const onSubmit = (data: any) => {
    console.log(data)
    dispatch(login(data));
    navigator("/server")
  };
    return(
  <div className="auth-content">
    <section className="login-section">
      <div className="login-card">
        <h2>{t('Login.H2')}</h2>
        <p>{t('Login.p')}</p>
        <form id="login-form">
          <div className="input-group">
            <label htmlFor="username">{t('Login.labelName')}</label>
            <input type="text" id="username" placeholder={t('Login.inputName')} onChange={(e)=>{setLogin(e.target.value)}} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">{t('Login.labelpassword')}</label>
            <input type="password" id="password" placeholder={t('Login.inputpassword')} onChange={(e)=>{setPassword(e.target.value)}} required />
          </div>
          <button type="submit" className="btn-primary" onClick={()=>{onSubmit(data)}}>{t('Login.buttonname')}</button>
        </form>
      </div>
    </section>
  </div>
    )
}