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
    <div class='body'>
    <Router>
      <div className='header-container'>
        <div className='title-container'>
        <Title/>
      </div>
      <div className='navbar-box'>
        <Navbar/>      
      </div>
    </div>
    <Switch>
        <Route exact path="/" component={ Projects }/>  
        <Route exact path="/about" component={ About }/>
        <Route exact path="/contact" component={ Contact }/>
      </Switch>
    </Router>
    
    </div>
    
  );
}
export default App;
