import React from 'react';
import "primereact/resources/primereact.min.css";
import { Button } from 'primereact/button';
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Avatar } from 'primereact/avatar';

const App = () => {
  return (
    <div className="p-4">
    <div className="flex justify-content-center align-items-center">
      <Avatar image="profile.jpg" id="profile__img" shape="circle" size="x-large"/>
      </div>
    <div className="flex justify-content-center">
      <p id="twitter">ooh_jhay</p>
      <p id="slack" style={{display: 'none'}}>Orhmo</p>
    </div>

    <div className="flex justify-content-center">
    <div className="flex flex-column">
    <a href="https://twitter.com/ooh_jhay" target="_blank" id="btn__twitter"  rel="noreferrer">
    <Button className="twitter p-3" aria-label="Twitter">
        <span className="px-3">Twitter Link</span>
      </Button>
      </a>

    <a href="https://training.zuri.team/" target="_blank" id="btn__zuri"  rel="noreferrer">
    <Button className="zuri p-3" aria-label="Zuri">
        <span className="px-3">Zuri Team</span>
      </Button>
      </a>

    <a href="http://books.zuri.team" target="_blank" id="books"  rel="noreferrer">
    <Button className="books p-3" aria-label="Books">
        <span className="px-3">Zuri Books</span>
      </Button>
      </a>

    <a href="https://books.zuri.team/python-for-beginners?ref_id=<orhmo>" target="_blank" id="book__python"  rel="noreferrer">
    <Button className="python p-3" aria-label="Python">
        <span className="px-3">Python Books</span>
      </Button>
      </a>

    <a href="https://background.zuri.team" target="_blank" id="pitch"  rel="noreferrer">
    <Button className="pitch p-3" aria-label="Pitch">
        <span className="px-3">Background Check for Coders </span>
      </Button>
      </a>

    <a href="https://books.zuri.team/design-rules" target="_blank" id="book__design"  rel="noreferrer">
    <Button className="design p-3" aria-label="Design">
        <span className="px-3">Design Books</span>
      </Button>
      </a>
    </div>
    </div>
    </div>
  );
}

export default App;
