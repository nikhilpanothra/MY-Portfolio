
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "33dfff48-c72b-47fd-9637-55c8d20a6c5f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message);
        toast.error(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again later.");
      toast.error("Something went wrong. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message
            about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" /> <p>nikhilpanothra687@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" /> <p>+91 9906244687</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" /><p>Jammu, J&k India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className='contact-submit' disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit now"}
          </button>

        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={4000} />
    </div>
  );
}
