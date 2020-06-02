import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideContainerComp from './assets/Components/HomeComponent./SideContainerComp';
import './assets/Components/myStyles.css';
import InboxContainerComp from './assets/Components/HomeComponent./InboxContainerComp';
import ContactContainerComp from './assets/Components/HomeComponent./ContactContainerComp';
import LoginComponent from './assets/Components/LoginComponents/LoginComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainHome from './assets/Components/HomeComponent./MainHome';
import LoginfunComp from './assets/Components/LoginComponents/LoginfunComp';


function App() {

  let noError = true;
  return (
    <Router>
      <div className="App">

        {noError && <Route path="/home" exact component={MainHome} />}
        <Route path="/" exact component={LoginfunComp} />

      </div>
    </Router>
  )
}

export default App;
