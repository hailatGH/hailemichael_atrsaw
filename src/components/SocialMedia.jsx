import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF, FaCloudDownloadAlt } from "react-icons/fa";

import { files } from "../constants";

const SocialMedia = () => (
  <div className="app__social">
    <div
      onClick={() =>
        window.open(
          "https://www.linkedin.com/in/hailatgh/",
          "_blank",
          "noreferrer"
        )
      }
    >
      <BsLinkedin />
    </div>
    <div
      onClick={() =>
        window.open("https://github.com/hailatGH", "_blank", "noreferrer")
      }
    >
      <BsGithub />
    </div>
    <div
      onClick={() =>
        window.open("https://twitter.com/nerdProg", "_blank", "noreferrer")
      }
    >
      <BsTwitter />
    </div>
    <div className="app__social-cv">
      <a href={files.cv} download>
        <FaCloudDownloadAlt />
      </a>
    </div>
  </div>
);

export default SocialMedia;
