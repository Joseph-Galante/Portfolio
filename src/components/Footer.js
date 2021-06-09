const Footer = () =>
{
    return (
        <div className="footer">
            <section className="footer-projects">
                <h4>My Projects</h4>
                <a href="https://github.com/Joseph-Galante/Demons-Respite" target="_blank" rel="noopener noreferrer">Demon's Respite</a>
                <br/>
                <a href="https://github.com/Joseph-Galante/U2_Project_Frontend" target="_blank" rel="noopener noreferrer">Minecraft Recipe API</a>
                <br/>
                <a href="https://github.com/Joseph-Galante/WorkBear_App" target="_blank" rel="noopener noreferrer">WorkBear</a>
                <br/>
                <a href="https://github.com/Joseph-Galante/Final_Project_Frontend" target="_blank" rel="noopener noreferrer">Anduin</a>
            </section>

            <section className="footer-contact">
                <h4>Contact Me</h4>
                <span>jgalante00@gmail.com</span>
                <span>845-764-1333</span>
                <section className="footer-links">
                    <a href="https://github.com/Joseph-Galante" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/J73iQKo.png" alt="404" width={50} height={50} />
                    </a>
                    <a href="https://www.linkedin.com/in/joseph-galante-950426195/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/qpvxWlK.png" alt="404" width={50} height={50} />
                    </a>
                </section>
            </section>
        </div>
    )
}

export default Footer;