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
            <div className="about-edu">
                <h1>Education</h1>
                <section className="edu-section">
                    <div>
                        <img src="https://i.imgur.com/V2ULHIu.png" alt="404" width={75} height={50} />
                        <p>Graduated as an Electrical Engineer from SUNY New Paltz</p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/Nl8nYal.png" alt="404" width={200} height={50} />
                        <p>Found a real passion for coding in my first C++ course</p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/Rd3ERXm.png" alt="404" width={60} height={60} />
                        <p>Couldn't find a job in my studied field</p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/BINtIFb.png" alt="404" width={60} height={60} />
                        <p>Found a program to study to be a web developer</p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/GytgP7y.png" alt="404" width={60} height={60} />
                        <p>Full stack developer who creates quality projects and apps</p>
                    </div>
                </section>
            </div>

            <div className="about-skills">
                <h1>Skills</h1>
                <section className="skills-section">
                    <div>
                        <img src="https://i.imgur.com/VHAlBLi.png" alt="404" width={100} height={100} />
                        <h4>JavaScript</h4>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/EjWsdtm.png" alt="404" width={100} height={100} />
                        <h4>HTML</h4>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/FcyKdtR.png" alt="404" width={100} height={100} />
                        <h4>CSS</h4>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/qULKlEp.png" alt="404" width={100} height={100} />
                        <h4>Node</h4>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/cc5wEMI.png" alt="404" width={100} height={100} />
                        <h4>React</h4>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/1jGPRhZ.png" alt="404" width={100} height={100} />
                        <h4>PostgreSQL</h4>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/nVrc4yL.png" alt="404" width={100} height={100} />
                        <h4>Python</h4>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/J73iQKo.png" alt="404" width={100} height={100} />
                        <h4>Git</h4>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/Aanpe7t.png" alt="404" width={100} height={100} />
                        <h4>Heroku</h4>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/qR9mhfj.png" alt="404" width={100} height={100} />
                        <h4>C#</h4>
                    </div>
                </section>
            </div>

            <input type="button" value="Check Out My Projects" onClick={() => {setRedirect('/projects')}} />
        </div>
    )
}

export default About;