import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
          window.open("https://twitter.com/nerdProg", "_blank", "noreferrer")
        }
      >
        <BsTwitter />
      </div>

      <div id="cvDownload" data-tooltip-content="Download Resume!">
        <a href={files.cv} download>
          <FaCloudDownloadAlt />
        </a>
      </div>
    </div>
    <ReactTooltip
      anchorId="cvDownload"
      style={toolTipStyle}
      className="tooltip"
    />
  </>
);

export default SocialMedia;
