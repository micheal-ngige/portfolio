import React from 'react'
import "./skills.css"
import backend from "../../assets/backend.png"
import frontend from "../../assets/frontend.png"

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do </span>
      <span className="skillDescription">
        Software Engineer with fundamental knowledge of software design,
        development, and testing. Seeking to utilize broad educational
        background with excellent analytical, technical, and programming skills
        to thrive as software engineer. <br />
       I have honed my skills in designing, developing, and
        maintaining applications. My expertise lies in JavaScript, React 
        , and Python, enabling me to create efficient and robust
        solutions.<br /> In addition to my technical proficiency, I have
        developed excellent troubleshooting abilities. This knowledge allows me to address
        challenges effectively during the development and maintenance phases. As
        a team player, I am self-motivated and focused on delivering exceptional
        customer deployment, implementation, and support.<br /> With a solid
        educational background and a wide range of skills and experiences, I
        bring a well-rounded perspective to development. I am committed
        to delivering high-quality solutions and contributing to the success of
        any team or organization.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={frontend} alt="frontendimg" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend</h2>
            <p>HTML5, CSS, Bootstrap, JavaScript, React, Angular, TypeScript</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={backend} alt="backendimg" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend</h2>
            <p>
              Python, Flask, Django,
              <br /> RESTful APIs, API documentation- Postman, JWT, CI/CD-
              Circle CI,{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
