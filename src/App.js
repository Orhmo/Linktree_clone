import "./App.css";
import React from 'react';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Socials from "./Components/Socials";
import Buttons from "./Components/Buttons";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";



const App = () => {
  return (
  <div className="container p-m-4">
    <Nav/>
    <Profile/>
    <Buttons/>
    <Socials/>
    <Footer/>
  </div>
  );
}

export default App;
