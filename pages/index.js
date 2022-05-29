import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef(null);
  const feebackInputRef = useRef(null);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feebackInputRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        text: enteredFeedback,
      }),
    })
      .then((response) => response.json())
      .then(() => loadFeedbackHandler());
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((results) => setFeedbackItems(results));
  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" ref={feebackInputRef} />
        </div>
        <button onClick={submitFormHandler}>Submit</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((f) => (
          <li key={f.id}>{f.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
