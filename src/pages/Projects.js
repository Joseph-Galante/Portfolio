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
            <h1>My Projects</h1>
            <a href="https://github.com/Joseph-Galante/Demons-Respite" target="_blank" rel="noopener noreferrer">Demon's Respite</a>
            <br/>
            <a href="https://github.com/Joseph-Galante/U2_Project_Frontend" target="_blank" rel="noopener noreferrer">Minecraft Recipe API</a>
            <br/>
            <a href="https://github.com/Joseph-Galante/WorkBear_App" target="_blank" rel="noopener noreferrer">WorkBear</a>
            <br/>
            <a href="https://github.com/Joseph-Galante/Final_Project_Frontend" target="_blank" rel="noopener noreferrer">Anduin</a>
            <br/>
            <input type="button" value="Contact Me" onClick={() => {setRedirect('/contact')}} />
        </div>
    )
}

export default Projects;