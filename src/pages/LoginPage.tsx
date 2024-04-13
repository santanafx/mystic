import Login from "../components/Login/Login";

export default function LoginPage() {
  return (
    <div>
      <Login>
        <Login.InputUserNameLogin />
        <Login.InputUserPasswordLogin />
        <Login.ButtonEnterLogin />
        <Login.ButtonCancelLogin />
      </Login>
    </div>
  )
}
