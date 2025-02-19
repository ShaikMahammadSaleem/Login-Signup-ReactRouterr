import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password })
    navigate("/home")
  }

  return (
    <div className="auth-form-container">
             <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Log In</button>
      </form>
            <Link to="/signup" className="auth-link">
             Don't have an account? Sign up
            </Link>
    </div>
  )
}

export default Login

