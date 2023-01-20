import { Link } from "react-router-dom"

const MainMenu = () => {
  return (
    <nav>
        <ul className="flex gap-x-3 text-white">
            <li>
                <Link className="menu-item" to="/">Inicio</Link>
            </li>
            <li>
              <Link className="menu-item" to="/products">Productos</Link>
            </li>
        </ul>
    </nav>
  )
}

export default MainMenu