import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal, BiDetail } from "react-icons/bi";
// import { FcViewDetails } from "react-icons/fc";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Work.scss";

const data = [
  {
    imgUrl: "",
    name: "TIN Checker Web App",
    projectLink: "",
    codeLink: "",
    title: "TIN Checker Web App",
    description:
      "Modern web app built using React, Flask and Fast API. It helps users (organizations) identify fake TIN Numbers.",
    tags: ["Web App", "All"],
  },
  {
    imgUrl: "",
    name: "TIN Checker Mobile App",
    projectLink: "",
    codeLink: "",
    title: "TIN Checker Mobile App",
    description:
      'The mobile app version of the "TIN Checker Web App". It is built by the same tech stack with React Native added.',
    tags: ["Mobile App", "All"],
  },
  {
    imgUrl: "",
    name: "ZEMA Multimedia",
    projectLink: "",
    codeLink: "",
    title: "ZEMA Multimedia",
    description:
      "Online music, podcast and radio streaming platform, built by ZEMA Multimedia PLC. It makes listening to music convenient.",
    tags: ["Mobile App", "All"],
  },
  {
    imgUrl: "",
    name: "Admin Portal Template",
    projectLink: "",
    codeLink: "",
    title: "Admin Portal Template",
    description:
      "An adminstration portal template that can be customized to fit any project. It is built using React and Redux.",
    tags: ["Web App", "All"],
  },
  {
    imgUrl: "",
    name: "Amharic Speech to Text",
    projectLink: "",
    codeLink: "",
    title: "Amharic Speech to Text",
    description:
      "AI powered mobile app, built using Reat Native that helps users to live convert their speech into written text.",
    tags: ["Mobile App", "All"],
  },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(data);
    setFilterWork(data);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolios</span>
      </h2>

      <div className="app__work-filter">
        {["Web App", "Mobile App", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl || images.commingsoon} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {/* <a href={work.projectLink} target="_blank" rel="noreferrer"> */}
                <a href="#work">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BiLinkExternal />
                  </motion.div>
                </a>
                {/* <a href={work.codeLink} target="_blank" rel="noreferrer"> */}
                <a href="#work">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
