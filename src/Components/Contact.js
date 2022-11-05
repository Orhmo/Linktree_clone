import React from 'react';
import { useState, useEffect } from 'react';

import "./Contact.css";

const Contact = () => {
  const initialValues = { firstname: "", lastname: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
      console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.firstname) {
      errors.firstname = "First name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  }

  return(
    <div class="container">

    <div class="contact_content">
      <form action="" class="contact_form"
        onSubmit={handleSubmit} id="contact-form">

        <h3 class="contact_title">
          Contact Me
        </h3>
        <p>
        Hi there, contact me to ask about anything you have in mind.
        </p>

        <div class="names">
         <div class="contact_form-div">
            <label>First Name</label>
              <input
                type="text"
                name="firstname"
                id="first_name"
                value={formValues.firstname}
                onChange={handleChange}
                placeholder="Enter your first name" required/>
              </div>
              <p>{formErrors.firstname}</p>

         <div class="contact_form-div">
              <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="last_name"
                  value={formValues.lastname}
                  onChange={handleChange}
                  placeholder="Enter your last name" required/>
              </div>
              <p>{formErrors.lastname}</p>
          </div>
          
          <div class="contact_form-div">
                <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="yourname@email.com" required/>
                </div>
                <p>{formErrors.email}</p>

          <div class="contact_form-div contact_form-area">
                <label>Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="10" cols="30"
                    placeholder="Send a message and I'll reply you as soon as possible..." required></textarea>
                </div>
                <p>{formErrors.message}</p>
          <p id="contact-alert" class="contact_alert"></p>

          <div class="contact_form-div" id ="terms">
              <input
                type="checkbox"
                id="accept"
                name="accept"
                value="accepted"
                required/>
                <label for="accept">
                You agree to providing your data to Oguka, Valentina Omojevwe who may contact you.
              </label>
              </div>

          <button
            type="submit"
            id="btn__submit"
            class="button">
              Send message
            </button>
    </form>
    </div>
    </div>

  );
}

export default Contact;
