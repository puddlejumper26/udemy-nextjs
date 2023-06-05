import { useState } from "react";
import classes from "./contact-form.module.css";

function ContactForm() {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterName, setEnterName] = useState("");
  const [enterInput, setEnterInput] = useState("");

  function sendMessageHandler(event) {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enterEmail,
        name: enterName,
        message: enterInput,
      }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <section className={classes.contact}>
      <h1>Hi, How are you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enterEmail}
              onChange={(event) => {
                setEnterEmail(event.target.value);
              }}
            />
          </div>{" "}
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enterName}
              onChange={(event) => {
                setEnterName(event.target.value);
              }}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={enterInput}
            onChange={(event) => {
              setEnterInput(event.target.value);
            }}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
