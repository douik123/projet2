import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Prof from './profile/Prof.js'
import Name from './profile/FullName.js'
import Adresse from './profile/Address'


class App extends Component { 
  render() {
   return (
    <div className='App'>
      <Name/>
      <Prof/>
      
      <Adresse/>
    </div>
   );
  }
}

export default App;
