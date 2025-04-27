import { useTranslation } from "react-i18next";
import "./LoginForm.scss"
export default function LoginForm(){
  const { t } = useTranslation();
  
    return(
  <div className="auth-content">
    <section className="login-section">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p>Please log in to continue.</p>
        <form id="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn-primary">Login</button>
        </form>
      </div>
    </section>
  </div>
    )
}