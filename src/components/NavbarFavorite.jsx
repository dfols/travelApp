import { Link } from "react-router-dom";
function NavbarFavorite() {

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl">RoamRadar</Link>
            </div>

            <div className="navbar-end">
                <Link to="/search" className="btn btn-primary">Search</Link>
            </div>
        </div>
    )
}

export default NavbarFavorite;