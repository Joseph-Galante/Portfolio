// react
import { useState } from 'react';
// react router
import { Redirect } from 'react-router-dom';

const About = () =>
{
    // states
    const [ redirect, setRedirect ] = useState('');
    
    return (
        <div className="about-page">
            {redirect !== '' ? <Redirect to={redirect} /> : null}
            <h1>About Me</h1>
            <section className="about-section">
                <div>
                    <img src="https://i.imgur.com/V2ULHIu.png" width={75} height={50} />
                    <p>Graduated as an Electrical Engineer from SUNY New Paltz</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/Nl8nYal.png" width={200} height={50} />
                    <p>Found a real passion for coding</p>
                </div>
                <div>
                    <img src="image" width={75} height={50} />
                    <p>Couldn't find a job in studied field</p>
                </div>
                <div>
                    <img src="image" width={75} height={50} />
                    <p>Found a program to study to be a web developer</p>
                </div>
                <div>
                    <img src="image" width={75} height={50} />
                    <p>Full stack developer who creates quality projects and apps</p>
                </div>
            </section>
            <input type="button" value="Check Out My Projects" onClick={() => {setRedirect('/projects')}} />
        </div>
    )
}

export default About;