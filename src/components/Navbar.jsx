import { NavLink } from 'react-router-dom'

function Navbar ({token, setToken}) {
    const Logout = () => {setToken(null)}
    if( token ) {
        return (
            <div id="navbar" className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Catalog</NavLink>
                <NavLink to="/products/productsId">Details</NavLink>
                <a onClick={Logout}>Logout</a>
            </div>
        );
    }
    return (
        <div id="navbar" className="nav-links">
            <h1 className="header">Lorem's Bodega</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Catalog</NavLink>
            <NavLink to="/SignUp">Login</NavLink>
        
        </div>
    );
}

export default Navbar;