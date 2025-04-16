import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary container">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Site</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <NavLink to='/'><a class="nav-link active" aria-current="page" href="#">HomePage</a></NavLink>
                                <NavLink to='/about'><a class="nav-link" href="#">About Us</a></NavLink>
                                <NavLink to='/post'><a class="nav-link" href="#">Posts list</a></NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>

    )
}

export default NavBar;
