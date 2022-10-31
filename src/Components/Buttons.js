import React from 'react';
import { Button } from 'primereact/button';

const Buttons = () =>{


  return(
    <div>
    <div class="flex justify-content-center">
    <div className="links flex flex-column align-items-center">

    <a href="https://twitter.com/ooh_jhay" target="_blank" id="btn__twitter"  rel="noreferrer" >
    <Button text="My twitter Profile"
    className="twitter p-2 m-2 " aria-label="Twitter">
        <span className="px-3">Twitter Link</span>
      </Button>
      </a>

    <a href="https://training.zuri.team/" target="_blank" id="btn__zuri"  rel="noreferrer">
    <Button text="Meet the Zuri Team" className="zuri p-3 m-2" aria-label="Zuri">
        <span className="px-3">Zuri Team</span>
      </Button>
      </a>

    <a href="http://books.zuri.team" target="_blank" id="books"  rel="noreferrer">
    <Button text="Get access to amazing design and programming books." className="books p-3 m-2" aria-label="Books">
        <span className="px-3">Zuri Books</span>
      </Button>
      </a>

    <a href="https://books.zuri.team/python-for-beginners?ref_id=<orhmo>" target="_blank" id="book__python"  rel="noreferrer">
    <Button text="Are you a beginner? Would you like to learn Python without a programming experience.Then, this book is just for you." className="python p-3 m-2 justify-content-center" aria-label="Python">
        <span className="px-3">Python Books</span>
      </Button>
      </a>

    <a href="https://background.zuri.team" target="_blank" id="pitch"  rel="noreferrer">

    <Button text="Think you got what it take?" className="pitch p-3 m-2" aria-label="Pitch">
        <span className="px-3">Background Check for Coders </span>
      </Button>
      </a>

    <a text=" Take your designs to the next level,Get a copy of this amazing guide." href="https://books.zuri.team/design-rules" target="_blank" id="book__design"  rel="noreferrer">
    <Button
     className="design p-3 m-2" aria-label="Design">
        <span className="px-3">Design Books</span>
      </Button>
      </a>

    </div>
    </div>
    </div>
)
}

export default Buttons;
