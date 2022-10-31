import React from 'react';
import "primeflex/primeflex.css";
const Nav = () =>{
  return(
    <div className="share">
    <img
      className="share md:flex sm:hidden"
      src="share-dashed.png"
      alt="share"
    />
    <img
      className="more sm:flex md:hidden"
      src="more-dashed.png"
      alt="more"
    />
    </div>
  )
}

export default Nav;
