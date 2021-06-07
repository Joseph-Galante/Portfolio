// react
import { useState } from 'react';
// react router
import { Redirect } from 'react-router-dom';

const Home = () =>
{
    // states
    const [ redirect, setRedirect ] = useState('');

    return (
        <div className="home-page">
            {redirect !== '' ? <Redirect to={redirect} /> : null}
            <h1>Joe Galante</h1>
            <h3>Electrical Engineer graduate turned Software Developer</h3>
            <p>Focused on quality and robust design for web and mobile applications</p>
            <input type="button" value="Read More About Me" onClick={() => {setRedirect('/about')}} />
        </div>
    )
}

export default Home;