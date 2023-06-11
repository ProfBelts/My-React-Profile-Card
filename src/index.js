import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "green",
  },
  {
    skill: "HTML/CSS",
    level: "Intermediate",
    color: "yellow",
  },
  {
    skill: "React",
    level: "Beginner",
    color: "blue",
  },
  {
    skill: "NodeJS",
    level: "Intermediate",
    color: "yellow",
  },
  {
    skill: "jQuery",
    level: "Advanced",
    color: "green",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar photoName="pictures/avatar.jpg" name="profile-picture" />

      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} className="avatar" />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <div>
        <h1> Joseph Beltran</h1>
      </div>
      <div>
        <p>
          {" "}
          An English Major with a passion in programming, especially in Web
          Development. I am also a musician.{" "}
        </p>
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill mySkill={skill} />
      ))}
    </div>
  );
}

function Skill({ mySkill }) {
  return (
    <div className="skill" style={{ backgroundColor: mySkill.color }}>
      <span>{mySkill.skill}</span>
      <span>
        {mySkill.level === "Beginner" && "👶"}
        {mySkill.level === "Intermediate" && "👍"}
        {mySkill.level === "Advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
