import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <Link to="/" className="btn btn-ghost text-xl">RoamRadar</Link>
            </div>

            <div className="navbar-end">
                <Link to="/favorites" className="btn btn-primary">Favorites</Link>
            </div>
        </div>
    )
}

export default Navbar;