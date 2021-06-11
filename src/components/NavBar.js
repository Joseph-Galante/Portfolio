// react router
import { Link } from 'react-router-dom';

const NavBar = () =>
{
    return (
        <nav>
            <div className="nav-left">
                <Link id="home-link" to="/">
                    <img src="https://i.imgur.com/WYms1v2.png" alt="404" width={300} />
                </Link>
            </div>
            <div className="nav-right">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar;