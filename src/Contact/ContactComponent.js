import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactComponent() {
  const [unset, setUnset] = useState(true);
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
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2>Contact us</h2>
      <div className="form-label">
        <label className="Name-field" htmlFor="name">
          Name
        </label>
        <input className="form-control" name="user_name" type="text" required />
      </div>
      <div className="form-label">
        <label className="Email-field">Email</label>
        <input
          className="form-control"
          name="user_email"
          type="email"
          required
        />
      </div>
      <div className="form-label">
        <label className="Message-label">Message</label>
        <textarea className="form-control" name="user_name" required />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        onClick={() => setUnset(!unset)}
      >
        Send
      </button>
      <div className={unset ? "Contactusmessage" : "Contactusvisible"}>
        <p>Your message has been sent!</p>
      </div>
    </form>
  );
}

export default ContactComponent;
