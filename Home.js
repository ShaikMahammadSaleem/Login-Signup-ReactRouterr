import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>You are now logged in!</p>
      <button onClick={handleLogout} className="logout-button"> Logout </button>
       </div>
  )
}

export default Home

