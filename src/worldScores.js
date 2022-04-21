import React from "react";

function WorldWideScores(props) {
  let allScores = [];

  props.scores
    .map((country) => country.scores)
    .forEach((score) => (allScores = allScores.concat(score)));

  let allSortedScores = allScores.sort(
    (a,z) => z.s - a.s
  );

  return (
    <div className="world-div p-2 m-4">
      <h1 className="App-header">World Wide High Scores</h1>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Player Score</th>
          </tr>
        </thead>
        {allSortedScores.map((score, index) => (
          <tbody key={index}>
            <tr>
              <td className="player-name">{score.n}</td>
              <td className="text-primary">{score.s}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default WorldWideScores;
