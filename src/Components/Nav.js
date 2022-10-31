import React from 'react';
import {useState} from 'react';
import 'primeicons/primeicons.css';

const Nav = () =>{
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return(
    <div>
      <div>
        <div className="icons" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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

          {isHovering && (
          <div>
            <h4>Share</h4>
          </div>
          )}
        </div>
      </div>

  )
}

export default Nav;
