import React from 'react';

const EvolutionChain = ({ evolution }) => {
  if (evolution.length <= 1) {
    return null
  } 

  else {
    return (
      <div>
        <h3>진화</h3>
        <ul>
          {evolution.map((evolution, index) => (
            <li key={index}>
              {evolution.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default EvolutionChain;
