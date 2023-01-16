import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter
        onClick={() =>
          window.open("https://twitter.com/nerdProg", "_blank", "noreferrer")
        }
      />
    </div>
    <div>
      <FaFacebookF
        onClick={() =>
          window.open(
            "https://www.facebook.com/hailemichael.atrsaw/",
            "_blank",
            "noreferrer"
          )
        }
      />
    </div>
    <div>
      <BsInstagram
        onClick={() =>
          window.open(
            "https://www.instagram.com/hailat_insta/",
            "_blank",
            "noreferrer"
          )
        }
      />
    </div>
  </div>
);

export default SocialMedia;
