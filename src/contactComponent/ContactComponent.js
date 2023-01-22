import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactComponent(props) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tar0h7j",
        "template_wgpacqg",
        form.current,
        "X9FZgsDJSow5wxOmd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref="form" onSubmit="{sendEmail}">
      <h2>Contact us</h2>
      <div className="form-label">
        <label className="Name-field" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-label">
        <label className="Email-field">Email</label>
        <input className="form-control" type="email" />
      </div>
      <div className="form-label">
        <label className="Message-label">Message</label>
        <textarea className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Send
      </button>
    </form>
  );
}

export default ContactComponent;
