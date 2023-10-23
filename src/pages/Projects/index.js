import { useState } from "react";
import { Redirect } from "react-router-dom";

const Projects = () => {
  const [redirect, setRedirect] = useState("");

  return (
    <div className="project-page">
      {redirect !== "" ? <Redirect to={redirect} /> : null}
      <h1>Projects</h1>
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
        <section className="project-img">
          <img
            src="https://i.imgur.com/cnVWv8Q.png"
            alt="404"
            width={300}
            height={150}
          />
          <span className="img-options">
            <a
              className="to-git"
              href="https://github.com/Joseph-Galante/Demons-Respite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="to-git-dark"
                src="https://i.imgur.com/J73iQKo.png"
                alt="404"
                width={50}
                height={50}
              />
              <img
                className="to-git-light"
                src="https://i.imgur.com/7ihJ5Q7.png"
                alt="404"
                width={50}
                height={50}
              />
              <p className="to-git-tip">View Repo</p>
            </a>
            <a
              className="to-app"
              href="https://joseph-galante.github.io/Demons-Respite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="to-app-dark"
                src="https://i.imgur.com/JDWntEK.png"
                alt="404"
                width={50}
                height={50}
              />
              <img
                className="to-app-light"
                src="https://i.imgur.com/a4O1kq4.png"
                alt="404"
                width={50}
                height={50}
              />
              <p className="to-app-tip">Launch App</p>
            </a>
          </span>
        </section>
      </div>
      <div className="project">
        <section className="project-details">
          <h3>Minecraft Recipe Finder *</h3>
          <p>A Minecraft recipe search app made using:</p>
          <ul>
            <li>JavaScript</li>
            <li>Node (Express)</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>
        <section className="project-img">
          <img
            src="https://i.imgur.com/xQgYKtU.png"
            alt="404"
            width={300}
            height={150}
          />
          <span className="img-options">
            <a
              className="to-git"
              href="https://github.com/Joseph-Galante/U2_Project_Frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="to-git-dark"
                src="https://i.imgur.com/J73iQKo.png"
                alt="404"
                width={50}
                height={50}
              />
              <img
                className="to-git-light"
                src="https://i.imgur.com/7ihJ5Q7.png"
                alt="404"
                width={50}
                height={50}
              />
              <p className="to-git-tip">View Repo</p>
            </a>
            {/* <a
              className="to-app"
              href="https://minecraft-recipe-finder.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="to-app-dark"
                src="https://i.imgur.com/JDWntEK.png"
                alt="404"
                width={50}
                height={50}
              />
              <img
                className="to-app-light"
                src="https://i.imgur.com/a4O1kq4.png"
                alt="404"
                width={50}
                height={50}
              />
              <p className="to-app-tip">Launch App</p>
            </a> */}
          </span>
        </section>
      </div>
      <div className="project">
        <section className="project-details">
          <h3>WorkBear *</h3>
          <p>A project management app made using:</p>
          <ul>
            <li>JavaScript</li>
            <li>Node (Express)</li>
            <li>React</li>
            <li>CSS</li>
          </ul>
        </section>
        <section className="project-img">
          <img
            src="https://i.imgur.com/gLvgqpA.png"
            alt="404"
            width={300}
            height={150}
          />
          <span className="img-options">
            <a
              className="to-git"
              href="https://github.com/Joseph-Galante/WorkBear_App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="to-git-dark"
                src="https://i.imgur.com/J73iQKo.png"
                alt="404"
                width={50}
                height={50}
              />
              <img
                className="to-git-light"
                src="https://i.imgur.com/7ihJ5Q7.png"
                alt="404"
                width={50}
                height={50}
              />
              <p className="to-git-tip">View Repo</p>
            </a>
            {/* <a
              className="to-app"
              href="https://serene-eyrie-38549.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="to-app-dark"
                src="https://i.imgur.com/JDWntEK.png"
                alt="404"
                width={50}
                height={50}
              />
              <img
                className="to-app-light"
                src="https://i.imgur.com/a4O1kq4.png"
                alt="404"
                width={50}
                height={50}
              />
              <p className="to-app-tip">Launch App</p>
            </a> */}
          </span>
        </section>
      </div>
      <div className="project">
        <section className="project-details">
          <h3>Anduin *</h3>
          <p>An eCommerce app made using:</p>
          <ul>
            <li>Python (Flask)</li>
            <li>React</li>
            <li>CSS</li>
          </ul>
        </section>
        <section className="project-img">
          <img
            src="https://i.imgur.com/JiWLtVJ.png"
            alt="404"
            width={300}
            height={150}
          />
          <span className="img-options">
            <a
              className="to-git"
              href="https://github.com/Joseph-Galante/Final_Project_Frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="to-git-dark"
                src="https://i.imgur.com/J73iQKo.png"
                alt="404"
                width={50}
                height={50}
              />
              <img
                className="to-git-light"
                src="https://i.imgur.com/7ihJ5Q7.png"
                alt="404"
                width={50}
                height={50}
              />
              <p className="to-git-tip">View Repo</p>
            </a>
            {/* <a
              className="to-app"
              href="https://anduin-app.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="to-app-dark"
                src="https://i.imgur.com/JDWntEK.png"
                alt="404"
                width={50}
                height={50}
              />
              <img
                className="to-app-light"
                src="https://i.imgur.com/a4O1kq4.png"
                alt="404"
                width={50}
                height={50}
              />
              <p className="to-app-tip">Launch App</p>
            </a> */}
          </span>
        </section>
      </div>

      <p className="disclaimer">
        <strong>* - </strong>
        Indicates this project has been migrated from Heroku to GCP and due to
        incurring costs there is no database associated with it. The project is
        considered deprecated and will most likely never be supported again.
        Please take a look at the project's source code, if you're interested.
      </p>

      <input
        type="button"
        value="Contact Me"
        onClick={() => {
          setRedirect("/contact");
        }}
      />
    </div>
  );
};

export default Projects;
