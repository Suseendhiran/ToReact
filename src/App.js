import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './assets/Components/HomeComponent./SideContainerComp';
import SideContainerComp from './assets/Components/HomeComponent./SideContainerComp';
import './assets/Components/myStyles.css'
import InboxContainerComp from './assets/Components/HomeComponent./InboxContainerComp';
import ContactContainerComp from './assets/Components/HomeComponent./ContactContainerComp';
import MessageContainerComp from './assets/Components/HomeComponent./MessageContainerComp';
import ProfileContainerComp from './assets/Components/HomeComponent./ProfileContainerComp';


const height = {
  height: '100%'
}

function App() {
  return (
    <div className="App">
      <section className="home-section">
        <SideContainerComp />
        <InboxContainerComp />
        <ContactContainerComp />
        <MessageContainerComp />
        <ProfileContainerComp />
      </section>


    </div>
  )
}

export default App;
