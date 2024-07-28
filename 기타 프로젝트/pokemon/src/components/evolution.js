import React from 'react';

const EvolutionChain = ({ evolution }) => {
  return (
    <div>
      <h3>진화 체인</h3>
      <ul>
        {evolution.map((evolution, index) => (
          <li key={index}>
            {evolution.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EvolutionChain;
