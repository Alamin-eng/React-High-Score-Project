import React from "react";

const ScoreTable = (props) => {
  
    return (
      <div>
        {props.scores.map((e) => {
          return (
            <table class="table table-bordered table-info table-sm table-hover">
              <tbody>
                <tr className="div-table">
                  <td className="p-2">{e.n}</td>
                  <td className="p-2">{e.s}</td>
                </tr>
              </tbody>
            </table>
          );})}
      </div>
    );
}
export default ScoreTable;