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
            <section className="home-pic">
                <img src="https://i.imgur.com/d8OmLjW.jpg" alt="404"  />
            </section>
            <section className="home-details">
                <h1 style={{fontSize: "36px"}}>Joe Galante</h1>
                <h3>Electrical Engineer graduate turned Software Developer</h3>
                <p>" A curious tinkerer who works logically and efficiently, while maintaining a positive attitude. I enjoy taking on more challenging tasks in an effort to learn and sharpen my skills as quickly as possible. I take projects head on and with the confidence to exceed the project’s initial goals, with little to no extra guidance. I am passionate about working effectively with others while using standard practices to assure I am always providing clear and concise code. "</p>
                <input type="button" value="Read More About Me" onClick={() => {setRedirect('/about')}} />
            </section>
        </div>
    )
}

export default Home;