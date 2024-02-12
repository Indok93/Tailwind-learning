import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="flex justify-center">
        <ul className="list-none flex space-x-4">
            <li><NavLink to="/" className="text-blue-500 hover:text-blue-700">Home</NavLink></li>
            <li><NavLink to="posters" className="text-blue-500 hover:text-blue-700">Posters</NavLink></li>
            <li><NavLink to="about" className="text-blue-500 hover:text-blue-700">About</NavLink></li>
            <li><NavLink to="contact" className="text-blue-500 hover:text-blue-700">Contact</NavLink></li>
        </ul>
    </nav>
  )
}
