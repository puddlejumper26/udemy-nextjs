import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log("post - data -", data));
  }

  function loadFeedbackHandler() {
    console.log("loadFeedback handler");
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        console.log("data in loadFeedback handler", data.feedback);
        setFeedbackItems(data.feedback);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <label>Email</label>
        <input htmlFor="email" type="email" id="email" ref={emailInputRef} />
        <label>feedback</label>
        <textarea
          htmlFor="feedback"
          type="feedback"
          if="feedback"
          ref={feedbackInputRef}
        />
        <button>Submit</button>
      </form>
      {/* <hr></hr> */}
      <button onClick={loadFeedbackHandler}>Load feedback</button>
      <ul>
        {feedbackItems?.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
