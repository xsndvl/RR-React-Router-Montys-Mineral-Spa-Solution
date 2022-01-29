import { Link } from "react-router-dom"

function NavBar() {
    return(
        <div className="navBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/packages">Our Packages</Link>
          </li>
        </ul>
      </div>
    )
}

export default NavBar