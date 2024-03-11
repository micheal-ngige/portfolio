import React from "react";
import "./intro.css";
import bg from "../../assets/bg.jpg";
import btnImg from "../../assets/hire.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">
          Hello, <br />
        </span>
        <span className="introText">
          I'm <span className="introName">Michael</span> <br /> Software
          Engineer and Author
        </span>
        <p className="introPara">
           a versatile individual with a passion for technology and
          writing. As a software engineer, I thrive in solving complex
          problems and creating innovative solutions. On the other hand, my love
          for writing allows me to connect with the world through prose. Combining these diverse interests, I
          continuously seek opportunities to grow, learn, and make a positive
          impact in each of these domains.
        </p>
        <Link to="hire-section" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Hire me" className="btnImg" /> Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Background" className="bg" />
    </section>
  );
}

export default Intro;
