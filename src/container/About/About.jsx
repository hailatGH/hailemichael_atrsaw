import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";
// import { urlFor, client } from "../../client";

const data = [
  {
    imgUrl: images.restapi,
    title: "Back-End Developer",
    description:
      "Expert on building and maintaining the mechanisms that process data and perform actions on websites and mobile apps using different tools.",
  },
  {
    imgUrl: images.frontend,
    title: "Front-End Developer",
    description:
      "1+ year of experiance on the profession with one specific goal - ensure that website visitors can easily interact with the page.",
  },
  {
    imgUrl: images.mobileappdev,
    title: "Mobile App Developer",
    description:
      "Experianced with tasks to create, test and develop user friendly applications. I Often take into account UI/UX principles when creating applications.",
  },
  {
    imgUrl: images.devops,
    title: "Cloud DevOps Engineer",
    description:
      "I have some experiance in containerizing my works so that they fit to any platfrom they are deployed. In addition I have good exposure on GCP and Azure public cloud vendors.",
  },
];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    // const query = '*[_type == "abouts"]';

    // client.fetch(query).then((data) => {
    setAbouts(data);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Optimistic <span>- Visionary -</span> Disciplined <br />
        Engineered for <span>excellence</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
