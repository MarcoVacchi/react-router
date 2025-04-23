import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Site</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to='/' className="nav-link">HomePage</NavLink>
                                <NavLink to='/about' className="nav-link">About Us</NavLink>
                                <NavLink to='/posts' className="nav-link">Posts list</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default NavBar;
