import React from "react";
import { css } from "emotion";

import ABCBestLogo from "./logo-abcbest.jpg";

const Header = () => {
  return (
    <div className="p-2">
      <div className="container">
        <img
          src={ABCBestLogo}
          alt="ABC Best"
          className={css({ maxWidth: "275px" })}
        />
      </div>
    </div>
  );
};

export default Header;
