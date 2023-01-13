import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
// import { client } from "../../client";
import "./Skills.scss";

const data = [
  {
    year: 2022,
    works: [
      {
        name: "Senior Product Designer",
        desc: "Senior Product Designer",
        company: "Amazon Inc.",
      },
    ],
  },
  {
    year: 2021,
    works: [
      {
        name: "UI/UX Web Designer",
        desc: "UI/UX Web Designer",
        company: "Google",
      },
      {
        name: "Internship Graphic Designer",
        desc: "Internship Graphic Designer",
        company: "Invision",
      },
    ],
  },
  {
    year: 2020,
    works: [
      {
        name: "Senior WP Frontend Developer",
        desc: "Senior WP Frontend Developer",
        company: "ENVATO",
      },
      {
        name: "IOS Developer",
        desc: "IOS Developer",
        company: "Zara",
      },
      {
        name: "Internship Frontend Developer",
        desc: "Internship Frontend Developer",
        company: "Apple",
      },
    ],
  },
];

const skillsData = [
  {
    name: "HTML5",
    bgColor: "",
    icon: images.html,
  },
  {
    name: "CSS3",
    bgColor: "",
    icon: images.css,
  },
  {
    name: "JavaScript",
    bgColor: "",
    icon: images.javascript,
  },
  {
    name: "React JS",
    bgColor: "",
    icon: images.react,
  },
  {
    name: "Redux",
    bgColor: "",
    icon: images.redux,
  },
  {
    name: "Node JS",
    bgColor: "",
    icon: images.node,
  },
  {
    name: "Sass",
    bgColor: "",
    icon: images.sass,
  },
  {
    name: "Figma",
    bgColor: "",
    icon: images.figma,
  },
  {
    name: "Git",
    bgColor: "",
    icon: images.git,
  },
  {
    name: "React Native",
    bgColor: "",
    icon: images.react,
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // const query = '*[_type == "experiences"]';
    // const skillsQuery = '*[_type == "skills"]';

    // client.fetch(query).then((data) => {
    setExperiences(data);
    // });

    // client.fetch(skillsQuery).then((data) => {
    setSkills(skillsData);
    // });
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
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                      id={work.name}
                      data-tooltip-content={work.desc}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      anchorId={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    />
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
