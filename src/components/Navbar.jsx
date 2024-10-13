import { NavLink } from 'react-router-dom'

function Navbar ({token, setToken}) {
    const Logout = () => {setToken(null)}
    if( token ) {
        return (
            <div id="navbar" className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Catalog</NavLink>
                <a onClick={Logout}>Logout</a>
            </div>
        );
    }
    return (
        <div id="navbar" className="nav-links">
            {/* <h1 className="header">Lorem's Bodega</h1> */}
            <NavLink className="navlink1" to="/">Home</NavLink>
            <NavLink className="navlink2" to="/products">Catalog</NavLink>
            <NavLink className="navlink3" to="/SignUp">Login</NavLink>
        </div>
    );
}

export default Navbar;