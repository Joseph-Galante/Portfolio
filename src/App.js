// react router
import { Route, Redirect } from 'react-router-dom';
// pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Route exact path ="/" render={() => { return <Home /> }}/>
    </div>
  );
}

export default App;
