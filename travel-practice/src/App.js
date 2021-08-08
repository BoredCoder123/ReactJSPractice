import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/sign-up' component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
