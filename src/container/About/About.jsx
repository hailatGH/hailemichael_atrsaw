import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";
// import { urlFor, client } from "../../client";

const data = [
  {
    imgUrl: images.frontend,
    title: "Front-End Developer",
    description:
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages ",
  },
  {
    imgUrl: images.restapi,
    title: "Back-End Developer",
    description:
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages ",
  },
  {
    imgUrl: images.mobileappdev,
    title: "Mobile App Developer",
    description:
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages ",
  },
  {
    imgUrl: images.devops,
    title: "Junior DevOps Engineer",
    description:
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages ",
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
        Optimistic, <span>Visionary,</span> Disciplined <br />
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
