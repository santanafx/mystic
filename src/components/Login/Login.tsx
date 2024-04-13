import React, { createContext } from 'react'
import { LoginContextType } from '../../types/types'
import ButtonCancelLogin from './ButtonCancelLogin'
import ButtonEnterLogin from './ButtonEnterLogin'
import InputUserNameLogin from './InputUserNameLogin'
import InputUserPasswordLogin from './InputUserPasswordLogin'
import styles from "./Login.module.css"

export const LoginContext = createContext<LoginContextType>({
  InputUserNameLogin,
  InputUserPasswordLogin,
  ButtonEnterLogin,
  ButtonCancelLogin
});

export default function Login({ children }: { children: React.ReactNode }) {
  return (
    <LoginContext.Provider value={{}}>
      <div className={styles.loginContainer}>
        {children}
      </div>
    </LoginContext.Provider>
  )
}

Login.InputUserNameLogin = InputUserNameLogin;
Login.InputUserPasswordLogin = InputUserPasswordLogin;
Login.ButtonEnterLogin = ButtonEnterLogin;
Login.ButtonCancelLogin = ButtonCancelLogin;