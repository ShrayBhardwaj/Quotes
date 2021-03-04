import React from 'react';
import './App.css';
import About from "./About";
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Menu from './Menu';
import Login from './components/Login'
//import Admin from './components/Admin'
import Logout from './components/Logout'


import {Route, Switch} from 'react-router-dom';
 
const App = () => {
  
   
  return (
    <div>
     <Menu />  
    <Switch>
      
     
      <Route  exact path ="/Logout" component={Logout} />
      <Route  exact path ="/Login" component={Login} />
     
      <Route   path ="/About" component={About} />      
      <Route  path ="/Contact" component={Contact} />
      <Route   path ="/Home" component={Home} />
      <Route   path ="/Service" component={Service} />
      
    </Switch>

    </div>
  );
};

export default App;