import Login from "../components/Login/Login";
import styles from "./loginPage.module.css";


export default function LoginPage() {
  return (
    <div className={styles.loginPageContainer}>
      <Login>
        <Login.InputUserNameLogin />
        <Login.InputUserPasswordLogin />
        <Login.ButtonEnterLogin />
        <Login.ButtonCancelLogin />
      </Login>
    </div>
  )
}
