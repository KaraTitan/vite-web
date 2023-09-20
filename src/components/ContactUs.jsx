import "../styles/ContactUs.css";
import { useNavigate } from "react-router-dom";

function ContactUS() {
  const navigate = useNavigate();
  return (
    <>
      <div className="contactbody">
        <form className="colorful-form">
          <div className="form-group">
            <label className="form-label" for="name">
              Name:
            </label>
            <input
              required=""
              placeholder="Enter your name"
              className="form-input"
              type="text"
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="email">
              Email:
            </label>
            <input
              required=""
              placeholder="Enter your email"
              className="form-input"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="message">
              Message:
            </label>
            <textarea
              required=""
              placeholder="Enter your message"
              className="form-input"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button className="form-button" type="submit" onClick={() => navigate("/vite-web/")}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUS;
