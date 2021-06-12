// react router
import { Link } from 'react-router-dom';
// components
import MobileMenu from './MobileMenu';

const NavBar = ({ mobile }) =>
{
    return (
        <nav>
            <div className="nav-left">
                <Link id="home-link" to="/">
                    <img src="https://i.imgur.com/WYms1v2.png" alt="404" height="60%" />
                </Link>
            </div>
            {mobile ?
                <div className="nav-right">
                    <MobileMenu />
                </div>
                :
                <div className="nav-right">
                    <Link to="/about">
                        <h4>About</h4>
                    </Link>
                    <Link to="/projects">
                        <h4>Projects</h4>
                    </Link>
                    <Link to="/contact">
                        <h4>Contact</h4>
                    </Link>
                </div>
            }
        </nav>
    )
}

export default NavBar;