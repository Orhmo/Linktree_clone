import React from 'react';

const Buttons = () =>{

  return(
    <div>
    <div class="flex justify-content-center">
    <div className="links flex flex-column align-items-center">


    <a href="https://twitter.com/ooh_jhay" target="_blank" id="btn__twitter"  rel="noreferrer" className="twitter p-2 m-2 ">
        <span className="px-3">Twitter Link</span>
      </a>


    <a href="https://training.zuri.team/" target="_blank" id="btn__zuri"  rel="noreferrer" className="zuri p-3 m-2">
        <span className="px-3">Zuri Team</span>
      </a>


    <a href="http://books.zuri.team" target="_blank" id="books"  rel="noreferrer"
    className="books p-3 m-2" title="Get access to amazing design and programming books.">
        <span className="px-3">Zuri Books</span>
      </a>


    <a href="https://books.zuri.team/python-for-beginners?ref_id=<orhmo>" target="_blank" id="book__python"  rel="noreferrer"
     className="python p-3 m-2 "title="Are you a beginner? Would you like to learn Python without a programming experience.Then, this book is just for you.">
        <span className="px-3">Python Books</span>
      </a>

    <a href="https://background.zuri.team" target="_blank" id="pitch"  rel="noreferrer"
    className="pitch p-3 m-2" title="Think you got what it takes?">
        <span className="px-3">Background Check for Coders </span>
      </a>

    <a href="https://books.zuri.team/design-rules" target="_blank" id="book__design"  rel="noreferrer"
    className="design p-3 m-2"  title=" Take your designs to the next level,Get a copy of this amazing guide.">
        <span className="px-3">Design Books</span>
      </a>

    <a href="/contact" target="_blank" id="contact"  rel="noreferrer"
    className="contact p-3 m-2">
        <span className="px-3">Contact Me</span>
      </a>

    </div>
    </div>
    </div>
)
}

export default Buttons;
