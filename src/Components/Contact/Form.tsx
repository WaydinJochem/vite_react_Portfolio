import { useForm, ValidationError } from "@formspree/react";

import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Swal from "sweetalert2";

function Form() {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mzbnzbdd");
  if (state.succeeded) {
    Swal.fire({
      title: "Complete",
      text: "Your message has been successfully delivered",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Go to Home",
      cancelButtonText: "Stay Here",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      } else {
        navigate("/contact");
      }
    });
  } 
  else if (state.submitting) {
    Swal.fire({
      title: "Submitting",
      text: "Message is being sent",
      icon: "info"
    });
  }
  else if (state.errors) {
    Swal.fire({
      title: "Hmmm...",
      text: "It appears that something has gone wrong, please try again or contact using the email address below",
      icon: "error",
    });
  } 
  return (
    <div className="form">
      <h2 id="form-intro">Let's Get in Touch</h2>
      <form onSubmit={handleSubmit} id="form-content">
        <div id="form-input">
          <div className="form-data">
            <label htmlFor="name">
              <span className="title">Name:</span>
              <input type="text" id="name" name="name" required />
            </label>
          </div>
          <div className="form-data">
            <label htmlFor="email">
              <span className="title">Email:</span>
              <input type="email" id="mail" name="mail" required />
            </label>
          </div>
        </div>
        <div id="form-text">
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="form-data">
            <label htmlFor="message">
              <p id="msg">Message:</p>
              <textarea id="message" name="message" required />
            </label>
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Send
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
}

export default Form;
