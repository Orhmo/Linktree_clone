import React from 'react';

import "./Contact.css";


export default class Contact extends React.Component {

      state = {
        fields: {},
        errors: {}
    }
    //Validation method
    handleValidation = ()=>{
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Names check if name is empty or not
      if(!fields["firstname"]){
         formIsValid = false;
         errors["firstname"] = "First name is required!";
      }
      if(!fields["lastname"]){
         formIsValid = false;
         errors["lastname"] = "Last name is required!";
      }
        //names should not contain special char
      if(typeof fields["firstname"] !== "undefined"){
          if(!fields["firstname"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["firstname"] = "Only letters is required";
          }
        }
      if(typeof fields["lastname"] !== "undefined"){
          if(!fields["lastname"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["lastname"] = "Only letters is required";
          }
        }

      //Email should not be empty
      if(!fields["email"]){
         formIsValid = false;
         errors["email"] = "Email is required!";
      }
        //validating email
      if(typeof fields["email"] !== "undefined"){
         let lastAtPos = fields["email"].lastIndexOf('@');
         let lastDotPos = fields["email"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0
         && fields["email"].indexOf('@@') === -1 &&
         lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
     }
          //Messages should not be empty
      if(!fields["message"]){
          formIsValid = false;
          errors["message"] = "Message is required!";
        }


     this.setState({errors: errors});
     return formIsValid;
 }

    //after submit form it will be called
  handleSubmit = (e) =>{
  e.preventDefault();
    if(this.handleValidation())
      alert("Form submitted successfully")
  }

    //updating the field value
  handleUpdate(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
}



    render(){
      return (
        <div className="container">
          <div className="contact_content" >
             <form  onSubmit= {this.handleSubmit.bind(this)} className="contact_form">
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
                        placeholder="Enter your first name"
                        onChange={this.handleUpdate.bind(this, "firstname")}
                        value={this.state.fields["firstname"]}/>
                        <span style={{color: "red"}}>
                        {this.state.errors["firstname"]}</span>
                      </div>

                  <div class="contact_form-div">
                    <label>Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        id="last_name"
                        placeholder="Enter your first name"
                        onChange={this.handleUpdate.bind(this, "lastname")}
                        value={this.state.fields["lastname"]}/>
                        <span style={{color: "red"}}>
                        {this.state.errors["lastname"]}</span>
                      </div>
                    </div>

                <div class="contact_form-div">
                    <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="yourname@email.com"
                        onChange={this.handleUpdate.bind(this, "email")}
                        value={this.state.fields["email"]}/>
                        <span style={{color: "red"}}>
                        {this.state.errors["email"]}</span>
                    </div>

               <div class="contact_form-div contact_form-area">
                  <label>Message</label>
                     <textarea
                        name="message"
                        id="message"
                        rows="10" cols="30"
                        placeholder="Send a message and I'll reply you as soon as possible..."
                        onChange={this.handleUpdate.bind(this, "message")}
                        value={this.state.fields["message"]}>
                        <span style={{color: "red", border:"red"}}>
                        {this.state.errors["message"]}</span>
                        </textarea>
                    </div>

                <div class="contact_form-div" id ="terms">
                  <label for="accept">
                      <input
                        type="checkbox"
                        id="accept"
                        name="accept"
                        value="accepted"/>
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
    )
  }
}
