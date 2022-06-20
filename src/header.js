import React from "react";
// get our fontawesome imports
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { faXbox, faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <a href="header">
        <FontAwesomeIcon className="up" icon={faCircleUp} />
      </a>
      <header id="header" className="app-header p-4 bg-danger text-white">
        <div className="icon">
          <i className="fontawe">
            <FontAwesomeIcon icon={faGamepad} />
          </i>
          <i className="fontawe">
            <FontAwesomeIcon icon={faPlaystation} />
          </i>
        </div>
        <h1 className=" p-4 bg-danger text-white text-center border rounded">
          SCORE TABLE
        </h1>
        <div className="icon">
          <i className="fontawe">
            <FontAwesomeIcon icon={faXbox} />
          </i>
          <i className="fontawe">
            <FontAwesomeIcon icon={faGamepad} />
          </i>
        </div>
      </header>
    </>
  );
}
export default Header;
