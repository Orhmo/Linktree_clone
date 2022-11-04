import "./App.css";
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Landing from "./Components/Landing";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className="container p-m-4">
      <Router>
          <Routes>
            <Route path="/"
              element={<Landing/>}/>
            <Route path="/contact"
              element={<Contact/>}/>
          </Routes>
      </Router>
    <br/>
    <Footer/>
    </div>
);
}

export default App;
