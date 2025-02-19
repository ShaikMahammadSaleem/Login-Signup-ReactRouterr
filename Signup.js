import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Signup attempt:", { name, email, password })
    navigate("/login")
  }

  return (
    <div className="auth-form-container">
                <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
               <Link to="/login" className="auth-link">
              Already have an account? Log in
             </Link>
    </div>
  )
}

export default Signup

