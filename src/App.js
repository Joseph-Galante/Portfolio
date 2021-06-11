// react
import { useEffect, useState } from 'react';
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
  // states
  const [ mobile, setMobile ] = useState(false);

  // variables
  const { pathname } = useLocation();

  // on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // functions
  const checkScreenSize = () =>
  {
    // console.log(window.outerWidth);
    if (window.outerWidth <= 800)
    {
      setMobile(true);
    }
  }
  useEffect(checkScreenSize, []);

  return (
    <div className="App">
      <NavBar mobile={mobile} />

      <Route exact path ="/" render={() => { return <Home /> }} />
      
      <Route exact path ="/about" render={() => { return <About /> }} />

      <Route exact path ="/projects" render={() => { return <Projects /> }} />

      <Route exact path ="/contact" render={() => { return <Contact /> }} />

      <Footer />
    </div>
  );
}

export default App;
