import React from "react";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div>
      <div className="absolute w-full bg-gradient-to-b from-black z-10">
        <img className="w-36" src={APP_LOGO} alt="Netflix Logo" />
      </div>
    </div>
  );
};

export default Header;
