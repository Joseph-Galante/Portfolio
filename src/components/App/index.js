import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { FLEX_HORIZONTAL_LIST } from "../../shared/constants";
import styles from "./styles.module.scss";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      height="100vh"
    >
      <Box {...FLEX_HORIZONTAL_LIST} width="100%" height="100%">
        <NavBar />
        <Box className={styles.content}>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/projects" render={() => <Projects />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
