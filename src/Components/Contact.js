import React from 'react';

import "./Contact.css";

const Contact = () => {
  return(
    <div class="contact">
    <div class="contact_content">
      <h3 class="contact_title">
        Contact Me
      </h3>
      <p>
      Hi there, contact me to ask about anything you have in mind.
      </p>
      <form action="" class="contact_form" id="contact-form">
         <div class="contact_form-div">
              <label class="contact_form-tag">First Name</label>
              <input type="text" name="user_name" id="contact-name" class="contact_form-input"
               placeholder="Enter your first name" required/>
              </div>

         <div class="contact_form-div">
              <label class="contact_form-tag">Last Name</label>
              <input type="text" name="user_name" id="contact-name" class="contact_form-input"
               placeholder="Enter your last name" required/>
              </div>

          <div class="contact_form-div">
                <label class="contact_form-tag"> Email:</label>
                <input type="email" name="user_email" id="contact-email" class="contact_form-input"
                 placeholder="yourname@email.com" required/>
                </div>

          <div class="contact_form-div contact_form-area">
                <label class="contact_form-tag"> Message</label>
                <textarea name="user_project"  id="contact-project" class="contact_form-input" rows="10" cols="30"
                placeholder="Send a message and I'll reply you as soon as possible..." required></textarea>
                </div>

          <p id="contact-alert" class="contact_alert"></p>

          <div id ="terms">
            <label>
            <input type="checkbox" name="terms" class="inline" value="accept"/>
                You agree to providing your data to name who may contact you.
              </label>
              </div>
          <button type="submit" class="button">
              Send message
            </button>
    </form>
    </div>
    </div>

  );
}

export default Contact;
