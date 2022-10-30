import React from 'react';
import { Button } from 'primereact/button';

const Buttons = () =>{
  return(
    <div>
    <div className="flex justify-content-center align-items-center">
    <div className="flex flex-column" >
    <a href="https://twitter.com/ooh_jhay" target="_blank" id="btn__twitter"  rel="noreferrer">
    <Button className="twitter p-3 m-2" aria-label="Twitter">
        <span className="px-3 m-2">Twitter Link</span>
      </Button>
      </a>

    <a href="https://training.zuri.team/" target="_blank" id="btn__zuri"  rel="noreferrer">
    <Button className="zuri p-3 m-2" aria-label="Zuri">
        <span className="px-3">Zuri Team</span>
      </Button>
      </a>

    <a href="http://books.zuri.team" target="_blank" id="books"  rel="noreferrer">
    <Button className="books p-3 m-2" aria-label="Books">
        <span className="px-3">Zuri Books</span>
      </Button>
      </a>

    <a href="https://books.zuri.team/python-for-beginners?ref_id=<orhmo>" target="_blank" id="book__python"  rel="noreferrer">
    <Button className="python p-3 m-2" aria-label="Python">
        <span className="px-3">Python Books</span>
      </Button>
      </a>

    <a href="https://background.zuri.team" target="_blank" id="pitch"  rel="noreferrer">
    <Button className="pitch p-3 m-2" aria-label="Pitch">
        <span className="px-3">Background Check for Coders </span>
      </Button>
      </a>

    <a href="https://books.zuri.team/design-rules" target="_blank" id="book__design"  rel="noreferrer">
    <Button className="design p-3 m-2" aria-label="Design">
        <span className="px-3">Design Books</span>
      </Button>
      </a>
    </div>
    </div>
    </div>
)
}

export default Buttons;
