import React, { useState } from "react";
import ScoreTable from "./scoreTable.js";
import AscendingTable from "./AscendingTable";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let NamesAndScores = (props) => {
  let [boolean, setBoolean] = useState(false);
  let [change, setChange] = useState("Click for Ascending scores");

  let handleClick = () => {
    if (boolean === false) {
      setBoolean(true);
      setChange("Click for Descending scores");
    } else {
      setBoolean(false);
      setChange("Click for Ascending scores");
    }
  };

  return (
    <div>
      {props.allCountry.map((e) => {
        return (
          <section className="country m-4 bg-dark">
            <button className="btn-warning rounded" onClick={handleClick}>
              {change}
            </button>
            <h3 className="mt-4">HIGH SCORES - {e.name}</h3>

            {!boolean ? (
              <ScoreTable
                scores={e.scores.sort((a, b) => {
                  return b.s - a.s;
                })}
              />
            ) : null}

            {/* sort by Ascending order */}
            {boolean && (
              <AscendingTable
                scores={e.scores.sort((a, b) => {
                  return a.s - b.s;
                })}
              />
            )}
          </section>
        );
      })}
      <footer className="footer bg-dark text-white text-center">
        <div className="footer-icon">
          <a
            href="mailto:mohammedalaminruben@gmail.com?subject = Feedback&body = Message"
            target={"blank"}
          >
            <FontAwesomeIcon
              className="fontawe text-danger"
              icon={faInstagram}
            />
          </a>
          <a href="https://github.com/Alamin-eng" target={"blank"}>
            <FontAwesomeIcon className="fontawe text-white" icon={faGithub} />
          </a>
          <a
            href="mailto:mohammedalaminruben@gmail.com?subject = Feedback&body = Message"
            target={"blank"}
          >
            <FontAwesomeIcon
              className="fontawe text-warning"
              icon={faEnvelope}
            />
          </a>
          <a
            href="mailto:mohammedalaminruben@gmail.com?subject = Feedback&body = Message"
            target={"blank"}
          >
            <FontAwesomeIcon className="fontawe text-info" icon={faFacebook} />
          </a>
        </div>
        <p>&copy;2022 Made With Love Mohammad Alamin</p>
      </footer>
    </div>
  );
};
export default NamesAndScores;
