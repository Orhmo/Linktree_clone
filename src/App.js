import React from 'react';
import Profile from "./Components/Profile";
import Buttons from "./Components/Buttons";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


const App = () => {
  return (
  <div className="p-4">
    <Profile/>
    <Buttons/>
  </div>
  );
}

export default App;
