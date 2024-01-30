import { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./styles.module.scss";

const Home = () => {
  const [redirect, setRedirect] = useState("");

  return (
    <div className={styles.page}>
      {redirect !== "" ? <Redirect to={redirect} /> : null}
      <section className={styles.pic}>
        <img src="https://i.imgur.com/d8OmLjW.jpg" alt="404" />
      </section>
      <section className={styles.details}>
        <h1>Joe Galante</h1>
        <h2>Electrical Engineer turned Software Developer</h2>
        <p className={styles.summary}>
          " A curious tinkerer who works logically and efficiently, while
          maintaining a positive attitude. I enjoy taking on more challenging
          tasks in an effort to learn and sharpen my skills as quickly as
          possible. I take projects head on and with the confidence to exceed
          the project’s initial goals, with little to no extra guidance. I am
          passionate about working effectively with others while using standard
          practices to ensure I am always providing clear and concise code. "
        </p>
        <Button
          text="Read More About Me"
          onClick={() => {
            setRedirect("/about");
          }}
        />
      </section>
    </div>
  );
};

export default Home;
