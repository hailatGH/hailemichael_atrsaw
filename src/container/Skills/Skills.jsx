import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "antd";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";
import { icons } from "antd/es/image/PreviewGroup";

const data = [
  {
    key: 1,
    year: 2022,
    works: [
      {
        key: 11,
        name: "Senior Product Designer",
        desc: "Senior Product Designer",
        company: "Amazon Inc.",
      },
    ],
  },
  {
    key: 2,
    year: 2021,
    works: [
      {
        key: 21,
        name: "UI/UX Web Designer",
        desc: "UI/UX Web Designer",
        company: "Google",
      },
      {
        key: 22,
        name: "Internship Graphic Designer",
        desc: "Internship Graphic Designer",
        company: "Invision",
      },
    ],
  },
  {
    key: 3,
    year: 2020,
    works: [
      {
        key: 31,
        name: "Senior WP Frontend Developer",
        desc: "Senior WP Frontend Developer",
        company: "ENVATO",
      },
      {
        key: 32,
        name: "IOS Developer",
        desc: "IOS Developer",
        company: "Zara",
      },
      {
        key: 33,
        name: "Internship Frontend Developer",
        desc: "Internship Frontend Developer",
        company: "Apple",
      },
    ],
  },
];

const skillsData = [
  {
    key: 1,
    name: "HTML5",
    bgColor: "#ed53221a",
    icon: images.html,
  },
  {
    key: 2,
    name: "CSS3",
    bgColor: "#0298d91a",
    icon: images.css,
  },
  {
    key: 3,
    name: "JavaScript",
    bgColor: "#ffd54b33",
    icon: images.javascript,
  },
  // {
  //   key: 4,
  //   name: "Node JS",
  //   bgColor: "",
  //   icon: images.node,
  // },
  {
    key: 5,
    name: "Python",
    bgColor: "#027bb81a",
    icon: images.python,
  },
  // {
  //   key: 14,
  //   name: "TypeScript",
  //   bgColor: "",
  //   icon: images.typescript,
  // },
  // {
  //   key: 6,
  //   name: "Sass",
  //   bgColor: "",
  //   icon: images.sass,
  // },
  // {
  //   key: 7,
  //   name: "Tailwind",
  //   bgColor: "",
  //   icon: images.tailwind,
  // },
  {
    key: 8,
    name: "React JS",
    bgColor: "#5cddf81a",
    icon: images.react,
  },
  {
    key: 9,
    name: "Redux",
    bgColor: "#805cbc1a",
    icon: images.redux,
  },
  {
    key: 10,
    name: "Express JS",
    bgColor: "#8282821a",
    icon: images.express,
  },
  {
    key: 11,
    name: "Django",
    bgColor: "#02402f26",
    icon: images.django,
  },
  {
    key: 12,
    name: "Git",
    bgColor: "#f9503026",
    icon: images.git,
  },
  {
    key: 13,
    name: "Docker",
    bgColor: "#0271a126",
    icon: images.docker,
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences(data);
    setSkills(skillsData);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.key}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.key}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <Tooltip
                      placement="topLeft"
                      title={work.desc}
                      arrowPointAtCenter
                      color="#313bac"
                    >
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.key}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
