import React from 'react'
import project4 from "../../assets/bank.png"
import project2 from "../../assets/keja-yangu.png";
import project3 from "../../assets/img-quest.png";
import project1 from "../../assets/hrs1.png";
import "./works.css"


function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDescription">
        I take pride in creating user friendly and interactive applications
        paying attention to details.{" "}
      </span>
      <div className="worksImgs">
        <div>
          <img
            src={project1}
            alt="Project 1 Description"
            className="worksImg"
          />
          <p>
            <a
              href="https://github.com/micheal-ngige/Human-Resource-App"
              className="img--p"
            >
              https://github.com/micheal-ngige/Human-Resource-App
            </a>
          </p>
        </div>
        <div>
          <img
            src={project2}
            alt="Project 2 Description"
            className="worksImg"
          />
          <p>
            <a
              href="https://github.com/micheal-ngige/keja-yangu-house"
              className="img--p"
            >
              https://github.com/micheal-ngige/keja-yangu-house
            </a>
          </p>
        </div>
        <div>
          <img
            src={project3}
            alt="Project 3 Description"
            className="worksImg"
          />
          <p>
            <a
              href="https://github.com/micheal-ngige/image-quest"
              className="img--p"
            >
              https://github.com/micheal-ngige/image-quest
            </a>
          </p>
        </div>
        <div>
          <img
            src={project4}
            alt="Project 4 Description"
            className="worksImg"
          />
          <p>
            <a
              href="https://github.com/micheal-ngige/Bank-of-Flatiron"
              className="img--p"
            >
              https://github.com/micheal-ngige/Bank-of-Flatiron
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Works
