import Page from "../../components/Page";
import Box from "@mui/material/Box";
import {
  RESUME_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  FLEX_VERTICAL_LIST,
} from "../../shared/constants";
import styles from "./styles.module.scss";

const Contact = () => (
  <Page heading={<h1>Contact Info</h1>}>
    <Box className={styles.info} {...FLEX_VERTICAL_LIST} rowGap={1.5}>
      <p>Joseph Galante</p>
      <p>jgalante00@gmail.com</p>
      <p>845-764-1333</p>

      <Box {...FLEX_VERTICAL_LIST} rowGap={2} mt={3}>
        <a
          className={styles.link}
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          className={styles.link}
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className={styles.link}
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </Box>
    </Box>
  </Page>
);

export default Contact;
