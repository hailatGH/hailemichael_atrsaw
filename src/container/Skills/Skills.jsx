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
    year: 2021,
    works: [
      {
        key: 11,
        name: "Internship - Information System Management",
        desc: "Troubleshooting and repairing computer hardware and software issues, as well as performing regular maintenance tasks to ensure the smooth and efficient operation of computer systems.",
        company: "National Bank of Ethiopia",
      },
      {
        key: 12,
        name: "Internship - Junior Software Developer",
        desc: "Mostly learn professional ways of developing, testing, and maintaining web and mobile apps.",
        company: "Orange Digital Center Ethiopia",
      },
    ],
  },
  {
    key: 2,
    year: 2022,
    works: [
      {
        key: 21,
        name: "Junior Software Developer",
        desc: "Development, testing, and maintenance of software applications under the guidance of senior developers. Additionally, assisting in the design and implementation of new features and functionality.",
        company: "GAMD Solutions",
      },
    ],
  },
  {
    key: 3,
    year: 2023,
    works: [
      {
        key: 31,
        name: "Backend Developer and DevOps Engineer",
        desc: "Creation and maintenance of the server-side logic and integration of the front-end with the back-end. Additionally, implementation of CI/CD and automation techniques.",
        company: "KINIDEAS PLC.",
      },
      {
        key: 32,
        name: "Full Stack Developer and DevOps Engineer",
        desc: "Design, development, and maintenance of mobile and web apps, and often work closely with designers and other developers to ensure that the final product meets the needs of the client or end user.",
        company: "ZEMA Multimedia",
      },
    ],
  },
];

const skillsData = [
  {
    key: 10,
    name: "HTML5",
    bgColor: "#ed53221a",
    icon: images.html,
  },
  {
    key: 20,
    name: "CSS3",
    bgColor: "#0298d91a",
    icon: images.css,
  },
  {
    key: 30,
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
    key: 50,
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
    key: 80,
    name: "React JS",
    bgColor: "#5cddf81a",
    icon: images.react,
  },
  {
    key: 90,
    name: "Redux",
    bgColor: "#805cbc1a",
    icon: images.redux,
  },
  {
    key: 100,
    name: "Express JS",
    bgColor: "#8282821a",
    icon: images.express,
  },
  {
    key: 110,
    name: "Django",
    bgColor: "#02402f26",
    icon: images.django,
  },
  {
    key: 120,
    name: "Flask",
    bgColor: "#2E2E2E26",
    icon: images.flask,
  },
  {
    key: 130,
    name: "Git",
    bgColor: "#f9503026",
    icon: images.git,
  },
  {
    key: 140,
    name: "Docker",
    bgColor: "#0271a126",
    icon: images.docker,
  },
  {
    key: 150,
    name: "GCP",
    bgColor: "#F0413D26",
    icon: images.gcp,
  },
  {
    key: 160,
    name: "Azure",
    bgColor: "#16AEE426",
    icon: images.azure,
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
