import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";

import NavBar from "../NavBar";
import Footer from "../Footer";

import styles from "./styles.module.scss";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.app}>
      <div className={styles.layout}>
        <NavBar />
        <div className={styles.content}>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/projects" render={() => <Projects />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
