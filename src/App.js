// react
import { useEffect } from 'react';
// react router
import { Route, useLocation } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  // variables
  const { pathname } = useLocation();

  // on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <NavBar />

      <Route exact path ="/" render={() => { return <Home /> }} />
      
      <Route exact path ="/about" render={() => { return <About /> }} />

      <Route exact path ="/projects" render={() => { return <Projects /> }} />

      <Route exact path ="/contact" render={() => { return <Contact /> }} />

      <Footer />
    </div>
  );
}

export default App;
