import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaCloudDownloadAlt, FaTelegramPlane } from "react-icons/fa";
import { Tooltip } from "antd";

import { files } from "../constants";

const toolTipStyle = {};

const SocialMedia = () => (
  <>
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
          window.open("https://t.me/hailatGH", "_blank", "noreferrer")
        }
      >
        <FaTelegramPlane style={{ width: "17px", height: "17px" }} />
      </div>
      <div
        onClick={() =>
          window.open("https://twitter.com/nerdProg", "_blank", "noreferrer")
        }
      >
        <BsTwitter />
      </div>

      <Tooltip
        placement="topLeft"
        title="Download Resume!"
        arrowPointAtCenter
        color="#313bac"
      >
        <a href={files.cv} download>
          <FaCloudDownloadAlt />
        </a>
      </Tooltip>
    </div>
  </>
);

export default SocialMedia;
