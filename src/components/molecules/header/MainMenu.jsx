import { Link } from "react-router-dom"

const MainMenu = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <Link to="/products">Productos</Link>
        </ul>
    </nav>
  )
}

export default MainMenu