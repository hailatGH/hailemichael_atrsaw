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
      "Strong understanding of software development principles, well-versed in Agile methodologies and have experience working with cross-functional teams.",
  },
  {
    imgUrl: images.frontend,
    title: "Front-End Developer",
    description:
      "Well-versed in responsive design, have a solid understanding of web accessibility standards and experienced in frontend technologies.",
  },
  {
    imgUrl: images.mobileappdev,
    title: "Mobile App Developer",
    description:
      "A proven track record of delivering high-quality, stable, and well-performing mobile apps on time and within budget.",
  },
  {
    imgUrl: images.devops,
    title: "Cloud DevOps Engineer",
    description:
      "Comfortable working with CI/CD tools and have gained knowledge and experience of working with GCP, Azure, Linux and scripting.",
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
        Optimistic <span>- Visionary -</span> Disciplined
        {/* Engineered for <span>excellence</span> */}
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
