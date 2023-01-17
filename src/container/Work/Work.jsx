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
    imgUrl: images.about01,
    name: "Modern React JS Website",
    projectLink: "",
    codeLink: "",
    title: "Modern React JS Website",
    description: "A modern React JS portfolio website",
    tags: ["Web App", "All"],
  },
  {
    imgUrl: images.about02,
    name: "Modern React JS Website",
    projectLink: "",
    codeLink: "",
    title: "Modern React JS Website",
    description: "A modern React JS portfolio website",
    tags: ["Web App", "All"],
  },
  {
    imgUrl: images.about03,
    name: "Modern React JS Website",
    projectLink: "",
    codeLink: "",
    title: "Modern React JS Website",
    description: "A modern React JS portfolio website",
    tags: ["Mobile App", "All"],
  },
  {
    imgUrl: images.about04,
    name: "Modern React JS Website",
    projectLink: "",
    codeLink: "",
    title: "Modern React JS Website",
    description: "A modern React JS portfolio website",
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
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BiLinkExternal />
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BiDetail />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
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
