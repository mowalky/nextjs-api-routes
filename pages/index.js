import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef(null);
  const feebackInputRef = useRef(null);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feebackInputRef.current.value;
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
      </form>
    </div>
  );
}

export default HomePage;
