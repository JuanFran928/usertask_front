import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function LoginPage() {
  let {loginUser} = useContext(AuthContext)
  return (
    <div><form onSubmit={loginUser}>
        <input type="email" name="email" placeholder='Enter email'/> <br></br>
        <input type="password" name="password" placeholder='Enter password'/><br></br>
        <input type="submit" value="Enviar"/>
        </form></div>
  )
}

export default LoginPage