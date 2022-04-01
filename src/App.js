import React from 'react';
import HeaderAndNames from './headerAndData';

import "./App.css";
let allCountryScores = [
  {
    name: "Ethiopia",
    scores: [
      { n: "Sub", s: 9990 },
      { n: "lucy", s: "4134234" },
      { n: "DWH", s: 9999 },
      { n: "Hanif", s: 999999999 },
    ],
  },
  {
    name: "Scotland",
    scores: [
      { n: "groundkeeper willie", s: 4000 },
      { n: "Neill", s: 999999 },
      { n: "braveheart", s: -200 },
    ],
  },
  {
    name: "England",
    scores: [
      { n: "Jonny", s: 202020 },
      { n: "Chris", s: 202021 },
    ],
  },
  {
    name: "Brazil",
    scores: [{ n: "Mozart", s: 999 }],
  },
  {
    name: "Colombia",
    scores: [
      { n: "Maria", s: 6000 },
      { n: "Melanie", s: "99999999" },
      { n: "Ali", s: 5000 },
    ],
  },
  {
    name: "Turkey",
    scores: [
      { n: "selim", s: 900 },
      { n: "mahmut", s: 1000 },
      { n: "morat", s: 999 },
    ],
  },
  {
    name: "Iran",
    scores: [
      { n: "arosha", s: 5550 },
      { n: "zahra", s: 3000 },
      { n: "nader", s: 2000 },
      { n: "Bani", s: 1999 },
    ],
  },
  {
    name: "Bangladesh",
    scores: [
      { n: "rahman", s: 700200 },
      { n: "rayhan", s: 18238123 },
      { n: "ali", s: 5400000 },
    ],
  },
];
let countriesInOrder = () =>{
  return allCountryScores.sort((a, b) => {
    console.log(a.name);
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  })
}
// let scoresInOrder = () => {
//     for (let { scores } of allCountryScores)
//       return scores.sort((a, b) => {
//         if (a.s.toString() > b.s.toString()) {
//           return -1;
//         } else if (a.s.toString() < b.s.toString()) {
//           return 1;
//         } else {
//           return 0;
//         }
//       });
//   };
  // console.log(scoresInOrder())
function App() {
  return (
    <div>
      <HeaderAndNames allCountry={countriesInOrder()}/>
      
    </div>
  );
}

export default App;
