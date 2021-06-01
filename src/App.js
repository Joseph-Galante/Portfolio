// react router
import { Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// components
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path ="/" render={() => { return <Home /> }} />
      
      <Route exact path ="/about" render={() => { return <About /> }} />

      <Route exact path ="/projects" render={() => { return <Projects /> }} />

      <Route exact path ="/contact" render={() => { return <Contact /> }} />
    </div>
  );
}

export default App;
