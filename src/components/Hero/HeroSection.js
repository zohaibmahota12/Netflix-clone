import React from "react";
import "./herosection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-image">
          <img
            alt=""
            aria-hidden="true"
            data-uia="nmhp-card-hero+background+image"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/e8a81955-6c75-4cd2-add0-5492eb26cc1f/PK-en-20230814-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            srcset="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/e8a81955-6c75-4cd2-add0-5492eb26cc1f/PK-en-20230814-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/e8a81955-6c75-4cd2-add0-5492eb26cc1f/PK-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/e8a81955-6c75-4cd2-add0-5492eb26cc1f/PK-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
            class="default-ltr-cache-ve3cf8 eae08lb0"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
