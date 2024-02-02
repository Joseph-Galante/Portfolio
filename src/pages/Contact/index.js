import Page from "../../components/Page";
import { RESUME_URL, GITHUB_URL, LINKEDIN_URL } from "../../shared/constants";
import styles from "./styles.module.scss";

const Contact = () => (
  <Page heading={<h1>Contact Info</h1>}>
    <section className={styles.info}>
      <p>Joseph Galante</p>
      <p>jgalante00@gmail.com</p>
      <p>845-764-1333</p>

      <section className={styles.links}>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </section>
    </section>
  </Page>
);

export default Contact;
