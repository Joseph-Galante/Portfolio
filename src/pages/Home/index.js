import { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Page from "../../components/Page";
import Highlighter from "../../components/Highlighter";
import styles from "./styles.module.scss";

const Home = () => {
  const [redirect, setRedirect] = useState("");

  return (
    <Page extraClassnames={styles.home}>
      {redirect !== "" ? <Redirect to={redirect} /> : null}
      <section className={styles.details}>
        <h2 className={styles.greeting}>{"> start greeting.exe"}</h2>
        <h1 className={styles.introduction}>Hello! I'm</h1>
        <h1 className={styles.name}>Joe Galante</h1>
        <span className={styles.journey}>
          <h2>Electrical Engineer</h2>
          <h2>turned</h2>
          <h2>Software Developer</h2>
        </span>
        <Highlighter
          extraClassnames={styles.summary}
          text="A highly self-motivated and naturally curious perfectionist with a passion for creating stunning UX/UI"
          keyWords={["self-motivated", "perfectionist", "stunning"]}
        />
        <Button
          text="Read More About Me"
          onClick={() => {
            setRedirect("/about");
          }}
        />
      </section>
    </Page>
  );
};

export default Home;
