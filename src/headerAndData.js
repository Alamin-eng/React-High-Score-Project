import React from "react";

let HeaderAndNames = (props) => {
  
  return (
    
    <div className="main-div">
        <h1>High scores per country</h1>
      {props.allCountry.map((e,index) => {
        
        return (
          <div className="summary" key={index}>

            <h2 className="country">{`High Scores : ${e.name}`}</h2>
            <hr></hr>
            
              {e.scores.map((score,index) => (
              
                <div className="listItem" key={index}>  
                  <p>
                 {score.n}
                  </p>
                  <p className="redNumbers">
                      {score.s} 
                    
                  </p>
                </div>
              ))}
          </div>
        );
      })}
      
    </div>
  );
};

export default HeaderAndNames;

