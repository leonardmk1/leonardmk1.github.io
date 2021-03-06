import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="about-columns">
        <div>
          <h3>
            <span className="about-intro">Hello, my name is</span>
            <br />
            <span className="about-name"> Matthew Leonard</span>
          </h3>
          <br />
          <p>
            I am a full-stack web developer, and a front end enthusiast! I have
            experience in HTML, CSS, JavaScript, Node.js, MySQL, Sequelize,
            Mongoose, Mongo DB, and React.
          </p>
          <br />
          <p>
            I have been searching for the career that can withstand my constant
            need for mental stimulation and I believe that I have found a field
            that will always challenge me and fulfill that side me. I am
            constantly curious and am also looking to learn and improve my
            understanding no matter the topic.
          </p>
          <br />
          <p>
            I am married with two dogs and I live in Richmond, VA. I love hiking
            and long walks around the neighborhood. I am a passionate
            outdoorsman and foodie.
          </p>
        </div>

        <div>
          <img className="about-img" src={require("../../images/Matt.jpg")} />
          <h3 className="about-title">Education & Experience</h3>
          <ul className="about-list">
            <li>
              Trilogy Full Stack Web Development Bootcamp at University of
              Richmond
            </li>
            <li>
              Bachelor's of Science in Criminal Justice at Virginia Commonweatlh
              University
            </li>
            <li>
              Special Education Teacher at Specialized Education Services Inc.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
