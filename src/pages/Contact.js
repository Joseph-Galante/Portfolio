const Contact = () =>
{
    return (
        <div className="contact-page">
            <h1>Contact Info</h1>
            <section className="contact-info">
                <p>Joseph Galante</p>
                <p>jgalante00@gmail.com</p>
                <p>845-764-1333</p>
            </section>

            <section className="contact-links">
                <a href="https://github.com/Joseph-Galante" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.imgur.com/7ihJ5Q7.png" alt="404" width={75} height={75} />
                </a>
                <a href="https://www.linkedin.com/in/joseph-galante-950426195/" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.imgur.com/7g4IwUf.png" alt="404" width={75} height={75} />
                </a>
            </section>
        </div>
    )
}

export default Contact;