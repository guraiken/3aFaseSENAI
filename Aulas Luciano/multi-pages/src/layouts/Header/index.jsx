import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"


export const Header = () => {
  const {user, logout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="bg-amber-600">
        Header
    </header>
  )
}
