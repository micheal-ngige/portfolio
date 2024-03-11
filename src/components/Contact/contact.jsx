import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png"


export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d5ltess",
        "template_5inwzbv",
        form.current,
        "KWWzCzWASiVgfCPCoAdjB"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact--page">
      <div id="contact--contact">
        <h2 className="contact--me"> Contact Me</h2>
        <span className="conctact--description">
          Kindly fill the form below for any work opportunities
        </span>
        <form onSubmit={sendEmail} className="contact--form" ref={form}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="send" className="submit--btn">
            Submit
          </button>
        </form>
        <div className="links">
          <a href="https://github.com/micheal-ngige" target="_blank">
            <img src={github} alt="Github" className="links--img" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-ngige-702129143/"
            target="_blank"
          >
            <img src={linkedin} alt="LinkedIn" className="links--img" />
          </a>
          <a href="mailto:michaelngige095@gmail.com" className="email--p">
            <img src={email} alt="Email" className="links--img" />
            michaelngige095@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
