import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Title from './Components/Title'
import Navbar from './Components/Navbar'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Projects from './Components/Pages/Projects'
//import { Contact } from './Components/Pages/Contact'
function App() {
  return (
    <Router>
    <div className='main-container'>
      <div className='title-container'>
        <Title className='title-container'/>
      </div>
      <div>
        <Navbar className='navbar-container'/>
      </div>
    </div>
    <Switch>
            <Route path="/projects" component={ Projects }/>  
            <Route path="/about" component={ About }/>
            <Route path="/contact" component={ Contact }/>
    </Switch>
    </Router>
    
  );
}
export default App;
