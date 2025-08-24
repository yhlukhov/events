import { NavLink } from "react-router"
import './header.css'

export default function Header() {
  return (
    <nav className="flex gap-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/events">Events</NavLink>
    </nav>
  )
}