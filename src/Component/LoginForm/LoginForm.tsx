import { useTranslation } from "react-i18next";
import "./LoginForm.scss"
export default function LoginForm(){
  const { t } = useTranslation();

    return(
  <div className="auth-content">
    <section className="login-section">
      <div className="login-card">
        <h2>{t('Login.H2')}</h2>
        <p>{t('Login.p')}</p>
        <form id="login-form">
          <div className="input-group">
            <label htmlFor="username">{t('Login.labelName')}</label>
            <input type="text" id="username" placeholder={t('Login.inputName')} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">{t('Login.labelpassword')}</label>
            <input type="password" id="password" placeholder={t('Login.inputpassword')} required />
          </div>
          <button type="submit" className="btn-primary">{t('Login.buttonname')}</button>
        </form>
      </div>
    </section>
  </div>
    )
}