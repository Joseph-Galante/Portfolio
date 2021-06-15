// react
import { useState } from 'react';
// react router
import { Redirect } from 'react-router-dom';

const MobileMenu = () =>
{
    // states
    const [ dropdown, setDropdown ] = useState(false);
    const [ redirect, setRedirect ] = useState('');

    // functions
    const checkClick = (el) =>
    {
        // remove event listener on doc - prevents multiple event listeners
        document.removeEventListener('click', (e) => {checkClick(e.target)});

        // grab mobile menu
        const mobileMenu = document.querySelector('#mobile-menu-dark');
        // if click was outside mobile menu
        if (el !== mobileMenu)
        {
            // close dropdown
            setDropdown(false);
        }
        
        // check which dropdown item was clicked, if any
        if (el.className === 'dropdown-item')
        {
            // go to selected item's page
            setRedirect(el.innerHTML.toLowerCase());
        }
    }
    
    return (
        <div className={dropdown ? "mobile-menu active" : "mobile-menu"} onClick={() => {
            document.addEventListener('click', (e) => {checkClick(e.target)});
            setDropdown(true);
        }}>
            {redirect !== '' ? <Redirect to={redirect} /> : null}
            <img id="mobile-menu-light" src="https://i.imgur.com/g5FG73S.png" alt="404" width={50} height={50} />
            <img id="mobile-menu-dark" src="https://i.imgur.com/ejjsR1a.png" alt="404" width={50} height={50} />
            {dropdown ?
                <div className="dropdown">
                    <section className="dropdown-item">About</section>
                    <section className="dropdown-item">Projects</section>
                    <section className="dropdown-item">Contact</section>
                </div>
                :
                null
            }
        </div>
    )
}

export default MobileMenu;