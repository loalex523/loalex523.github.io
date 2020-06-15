import React from 'react';
import './App.css';
import Title from './Components/Title'
import Navbar from './Components/Navbar'

//import { Contact } from './Components/Pages/Contact'
function App() {
  return (
    <div className='main-container'>
      <div className='title-container'>
        <Title className='title-container'/>
      </div>
      <div>
        <Navbar className='navbar-container'/>
      </div>
    </div>
  );
}

export default App;
