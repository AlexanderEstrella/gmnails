import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

function ContactComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      .then((result) => {
        console.log(result.status);
      })
      .catch((err) => {
        alert("error");
      })
      .finally(() => {
        setUnset(!unset);
      });
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className="Fbusinessct">Contact us</h2>
      <div className="form-label">
        <label className="Name-field" htmlFor="name">
          Name
        </label>
        <input className="form-control" name="user_name" type="text" placeholder="Enter your name" required />
      </div>
      <div className="form-label">
        <label className="Email-field">Email</label>
        <input
          className="form-control"
          name="user_email"
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          placeholder="Enter your email"
        />
        {errors.email && <span>Invalid email</span>}
      </div>
      <div className="form-label">
        <label className="Message-label">Message</label>
        <textarea className="form-control" name="user_name" placeholder="Type your message here" required />
      </div>
      <button className="btn btn-primary" type="submit">
        Send
      </button>
      <div className={unset ? "Contactusmessage" : "Contactusvisible"}>
        <p>Your message have been sent!</p>
      </div>
    </form>
  );
}

export default ContactComponent;
