import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
// import { client } from "../../client";
import "./Testimonial.scss";

const data = [
  {
    imgUrl: images.css,
    name: "CSS",
    company: "CSS Company",
    feedback:
      "A passionate, energetic and detail-oriented developer and IT Specialist with the ability to build scalable and performant backend products as well as exceptional, responsive and creative digital experiences within tight deadlines. Currently working to expand into the cybersecurity industry.",
  },
  {
    imgUrl: images.sass,
    name: "Some One",
    company: "Some Company",
    feedback: "Some description about me!",
  },
  {
    imgUrl: images.flutter,
    name: "Some One",
    company: "Some Company",
    feedback: "Some description about me!",
  },
  {
    imgUrl: images.react,
    name: "Some One",
    company: "Some Company",
    feedback: "Some description about me!",
  },
];

const brandsData = [
  {
    id: 1,
    imgUrl: images.orange,
    name: "Orange Digital Center",
  },
  {
    id: 2,
    imgUrl: images.nbe,
    name: "National Bank of Ethiopia",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // const query = '*[_type == "testimonials"]';
    // const brandsQuery = '*[_type == "brands"]';

    // client.fetch(query).then((data) => {
    setTestimonials(data);
    // });

    // client.fetch(brandsQuery).then((data) => {
    setBrands(brandsData);
    // });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgUrl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand.id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
