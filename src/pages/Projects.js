// react
import { useState } from 'react';
// react router
import { Redirect } from 'react-router-dom';
 
const Projects = () =>
{
    // states
    const [ redirect, setRedirect ] = useState('');

    return (
        <div className="project-page">
            {redirect !== '' ? <Redirect to={redirect} /> : null}
            <h1>Solo Projects</h1>
            <div className="project">
                <section className="project-details">
                    <h3>Demon's Respite</h3>
                    <p>An 8-bit style roguelike made using:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </section>
                <a href="https://github.com/Joseph-Galante/Demons-Respite" target="_blank" rel="noopener noreferrer">Demon's Respite</a>
            </div>
            <div className="project">
                <section className="project-details">
                    <h3>Minecraft Recipe API</h3>
                    <p>A Minecraft recipe search app made using:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>Node (Express)</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </section>
                <a href="https://github.com/Joseph-Galante/U2_Project_Frontend" target="_blank" rel="noopener noreferrer">Minecraft Recipe API</a>
            </div>
            <div className="project">
                <section className="project-details">
                    <h3>WorkBear</h3>
                    <p>A project management app made using:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>Node (Express)</li>
                        <li>React</li>
                        <li>CSS</li>
                    </ul>
                </section>
                <a href="https://github.com/Joseph-Galante/WorkBear_App" target="_blank" rel="noopener noreferrer">WorkBear</a>
            </div>
            <div className="project">
                <section className="project-details">
                    <h3>Anduin</h3>
                    <p>An eCommerce app made using:</p>
                    <ul>
                        <li>Python (Flask)</li>
                        <li>React</li>
                        <li>CSS</li>
                    </ul>
                </section>
                <a href="https://github.com/Joseph-Galante/Final_Project_Frontend" target="_blank" rel="noopener noreferrer">Anduin</a>
            </div>
            
            <input type="button" value="Contact Me" onClick={() => {setRedirect('/contact')}} />
        </div>
    )
}

export default Projects;