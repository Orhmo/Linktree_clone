
import React from 'react';

import Nav from "./Nav";
import Profile from "./Profile";
import Socials from "./Socials";
import Buttons from "./Buttons";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";



const Landing = () => {
  return (
      <div className="container p-m-4">
        <Nav/>
        <Profile/>
        <Buttons/>
        <Socials/>
      </div>
    );
}

export default Landing;
