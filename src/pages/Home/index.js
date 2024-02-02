import { useState } from "react";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
import Button from "../../components/Button";
import Page from "../../components/Page";
import styles from "./styles.module.scss";

const Home = () => {
  const [redirect, setRedirect] = useState("");
  const keyWords = ["self-motivated", "perfectionist", "stunning"];

  return (
    <Page extraClassnames={styles.home}>
      {redirect !== "" ? <Redirect to={redirect} /> : null}
      <section className={styles.details}>
        <h2 className={styles.greeting}>{"> start greeting.exe"}</h2>
        <h1>Hello! I'm</h1>
        <h1 className={styles.name}>Joe Galante</h1>
        <span className={styles.journey}>
          <h2>Electrical Engineer</h2>
          <h2>turned</h2>
          <h2>Software Developer</h2>
        </span>
        <span className={styles.summary}>
          {"A highly self-motivated and naturally curious perfectionist with a passion for creating stunning UX/UI"
            .split(" ")
            .map((str, i) => (
              <p
                key={str.concat(i)}
                className={classNames({
                  [styles.highlighted]: keyWords.includes(str),
                })}
              >
                {str}
              </p>
            ))}
        </span>
        <Button
          text="Read More About Me"
          onClick={() => {
            setRedirect("/about");
          }}
          variant="purple"
        />
      </section>
    </Page>
  );
};

export default Home;
