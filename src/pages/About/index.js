import { useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "./styles.module.scss";

const About = () => {
  const [redirect, setRedirect] = useState("");

  return (
    <div className={styles.page}>
      {redirect !== "" ? <Redirect to={redirect} /> : null}
      <div className={styles.eduSection}>
        <h1>Education</h1>
        <section className={styles.edu}>
          <div>
            <img
              src="https://i.imgur.com/V2ULHIu.png"
              alt="404"
              width={75}
              height={50}
            />
            <p>Graduated as an Electrical Engineer from SUNY New Paltz</p>
          </div>
          <div>
            <img
              src="https://i.imgur.com/Nl8nYal.png"
              alt="404"
              width={200}
              height={50}
            />
            <p>Found a real passion for coding in my first C++ course</p>
          </div>
          <div>
            <img
              src="https://i.imgur.com/4tQtrvD.png"
              alt="404"
              width={60}
              height={60}
            />
            <p>Started learning C# and OOP concepts with Unity</p>
          </div>
          <div>
            <img
              src="https://i.imgur.com/BINtIFb.png"
              alt="404"
              width={60}
              height={60}
            />
            <p>
              Studied to be a full stack web developer in an immersive program
            </p>
          </div>
          <div>
            <img
              src="https://i.imgur.com/GytgP7y.png"
              alt="404"
              width={60}
              height={60}
            />
            <p>Full stack developer who creates quality projects and apps</p>
          </div>
        </section>
      </div>

      <div className={styles.skillsSection}>
        <h1>Skills</h1>
        <section className={styles.skills}>
          <section className={styles.languagesSection}>
            <h2>Languages</h2>
            <section className={styles.languages}>
              <div>
                <img
                  src="https://i.imgur.com/VHAlBLi.png"
                  alt="404"
                  width={100}
                  height={100}
                />
                <h4>JavaScript</h4>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/EjWsdtm.png"
                  alt="404"
                  width={100}
                  height={100}
                />
                <h4>HTML</h4>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/FcyKdtR.png"
                  alt="404"
                  width={100}
                  height={100}
                />
                <h4>CSS</h4>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/1jGPRhZ.png"
                  alt="404"
                  width={100}
                  height={100}
                />
                <h4>PostgreSQL</h4>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/nVrc4yL.png"
                  alt="404"
                  width={100}
                  height={100}
                />
                <h4>Python</h4>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/qR9mhfj.png"
                  alt="404"
                  width={100}
                  height={100}
                />
                <h4>C#</h4>
              </div>
            </section>
          </section>

          <section className={styles.frameworksSection}>
            <h2>Frameworks</h2>
            <section className={styles.frameworks}>
              <div>
                <img
                  src="https://i.imgur.com/qULKlEp.png"
                  alt="404"
                  width={100}
                  height={100}
                />
                <h4>Node</h4>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/cc5wEMI.png"
                  alt="404"
                  width={100}
                  height={100}
                />
                <h4>React</h4>
              </div>
            </section>
          </section>
          <section className={styles.productionSection}>
            <h2>Version Control / Production</h2>
            <section className={styles.production}>
              <div>
                <img
                  src="https://i.imgur.com/J73iQKo.png"
                  alt="404"
                  width={100}
                  height={100}
                />
                <h4>Git</h4>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/GnCxhBH.png"
                  alt="404"
                  height={80}
                />
                <h4>GCP</h4>
              </div>
            </section>
          </section>
        </section>
      </div>

      <input
        type="button"
        value="Check Out My Projects"
        onClick={() => {
          setRedirect("/projects");
        }}
      />
    </div>
  );
};

export default About;
