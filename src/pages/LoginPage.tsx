import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div>Login
      <Link to={"/matchMenu/200"} >Go to Lobby</Link>
    </div>
  )
}
