import { NavLink } from 'react-router-dom'

function Navbar () {
    return (
        <div id="navbar" className="nav=links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Catalog</NavLink>
        </div>
    );
}

export default Navbar;