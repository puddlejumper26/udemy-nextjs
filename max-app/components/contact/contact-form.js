import { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
}

function ContactForm() {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterName, setEnterName] = useState("");
  const [enterInput, setEnterInput] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // pending, success, error
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enterEmail,
        name: enterName,
        message: enterInput,
      });
      setRequestStatus("success");
      setEnterEmail("");
      setEnterInput("");
      setEnterName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      title: "Sending Message ....",
      message: "Please wait for a moment",
      status: "pending",
    };
  }

  if (requestStatus === "success") {
    notification = {
      title: "Message already sent ....",
      message: "Success!",
      status: "success",
    };
  }

  if (requestStatus === "error") {
    notification = {
      title: "Error ....",
      message: requestError,
      status: "error",
    };
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
      {!!notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
}

export default ContactForm;
