// react router
import { Link } from 'react-router-dom';

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
                    <div className="mobile-menu">
                        <img id="mobile-menu-light" src="https://i.imgur.com/g5FG73S.png" alt="404" width={50} height={50} />
                        <img id="mobile-menu-dark" src="https://i.imgur.com/ejjsR1a.png" alt="404" width={50} height={50} />
                    </div>
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