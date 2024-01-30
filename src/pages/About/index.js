import { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./styles.module.scss";

const About = () => {
  const [redirect, setRedirect] = useState("");

  return (
    <div className={styles.page}>
      {redirect !== "" ? <Redirect to={redirect} /> : null}
      <div className={styles.skillsSection}>
        <h1>Skills</h1>
        <section className={styles.skills}>
          <section className={styles.languagesSection}>
            <h2>Languages</h2>
            <section className={styles.languages}>
              <div>
                <h4>JavaScript</h4>
              </div>
              <div>
                <h4>HTML</h4>
              </div>
              <div>
                <h4>CSS</h4>
              </div>
              <div>
                <h4>PostgreSQL</h4>
              </div>
              <div>
                <h4>Python</h4>
              </div>
              <div>
                <h4>C#</h4>
              </div>
            </section>
          </section>

          <section className={styles.frameworksSection}>
            <h2>Frameworks</h2>
            <section className={styles.frameworks}>
              <div>
                <h4>Node</h4>
              </div>
              <div>
                <h4>React</h4>
              </div>
            </section>
          </section>

          <section className={styles.productionSection}>
            <h2>Version Control</h2>
            <section className={styles.production}>
              <div>
                <h4>Git</h4>
              </div>
              <div>
                <h4>GCP</h4>
              </div>
            </section>
          </section>
        </section>
      </div>

      <Button
        text="Check Out My Projects"
        onClick={() => {
          setRedirect("/projects");
        }}
      />
    </div>
  );
};

export default About;
