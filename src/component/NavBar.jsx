import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home page</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/post'>Post list</Link></li>

                    </ul>
                </nav>

            </div>
            <Outlet />
        </>

    )
}

export default NavBar;