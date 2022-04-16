import React, {useState} from "react";
import allCountryScores from "./allCountryData.js";
import ScoreTable from "./scoreTable.js";
import AscendingTable from "./AscendingTable";

let NamesAndScores = (props) => {
  let [boolean, setBoolean] = useState(false)
  let [change, setChange] = useState("Click for Ascending scores");

  let handleClick = () => {
    if(boolean === false){
      setBoolean(true)
      setChange("Click for Descending scores");
    } else {
      setBoolean(false)
      setChange("Click for Ascending scores");
    }
  }
 
  return (
    <div>
      {props.allCountry.map((e) => {
        return (
          <section className="country m-4 bg-dark">
            <button className="btn-warning rounded" onClick={handleClick}>
              {change}
            </button>
            <h2 className="text-danger rows">HIGH SCORES: {e.name}</h2>

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
      <footer className="d-flex justify-content-end m-4">
        &copy; Mohammad Alamin
      </footer>
    </div>
  );
};
export default NamesAndScores;

