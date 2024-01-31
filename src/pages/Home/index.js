import { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Home = () => {
  const [redirect, setRedirect] = useState("");
  const keyWords = ["self-motivated", "perfectionist", "stunning"];

  return (
    <div className={styles.page}>
      {redirect !== "" ? <Redirect to={redirect} /> : null}
      <section className={styles.details}>
        <h1>Hello! I'm</h1>
        <h1>Joe Galante</h1>
        <span className={styles.journey}>
          <h2>Electrical Engineer</h2>
          <h2>turned</h2>
          <h2>Software Developer</h2>
        </span>
        <span className={styles.summary}>
          {"A highly self-motivated and naturally curious perfectionist with a passion for creating stunning UX/UI"
            .split(" ")
            .map((str) => (
              <p
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
        />
      </section>
      <section className={styles.pic}>
        <img src="https://i.imgur.com/d8OmLjW.jpg" alt="404" />
      </section>
    </div>
  );
};

export default Home;
