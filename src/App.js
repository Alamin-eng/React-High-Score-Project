import React from 'react';
import NamesAndScores from "./NamesAndScores";
import "./App.css";
import allCountryScores from './allCountryData';
import Header from './header';
import WorldWideScores from "./worldScores";


function App() {
    let countriesInOrder = () => {
      return allCountryScores.sort((a, b) => {
        console.log(a.name);
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      });
    };

  return (
    <div>
      <WorldWideScores scores={allCountryScores} />
      <Header />
      <NamesAndScores allCountry={countriesInOrder()} />
    </div>
  );
}

export default App;
