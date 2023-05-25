import { useRef } from "react";

function HomePage() {
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
      .then((data) => console.log("data -", data));
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
    </div>
  );
}

export default HomePage;
