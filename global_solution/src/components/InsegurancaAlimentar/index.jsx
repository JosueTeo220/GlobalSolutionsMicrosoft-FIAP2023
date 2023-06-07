import React, { useState } from 'react';
import './InteractiveFoodInsecurity.css';

const InsegurancaAlimentar = () => {
  const [regiao, setRegiao] = useState('africa');
  const [gravidade] = useState('Moderada');

  const data = {
    africa: { blue: 57.9, red: 23.4 },
    latinAmerica: { blue: 40.6, red: 14.2 },
    world: { blue: 29.3, red: 9.8 },
    asia: { blue: 24.6, red: 10.5 },
    oceania: { blue: 13, red: 4.5 },
    northAmericaEurope: { blue: 8, red: 1.5 },
  };

  const handleRegiaoChange = (event) => {
    setRegiao(event.target.value);
  };


  const getPercentage = (color) => {
    return data[regiao][color];
  };

  return (
    <div className="container-fluid container-interatividade-inseguranca">
      <h2>Estatística da Insegurança Alimentar no Mundo</h2>
      <div className="filters">
        <label htmlFor="regiao" className="label-select">
          Região:
        </label>
        <select id="regiao" value={regiao} onChange={handleRegiaoChange}>
          <option value="africa">Africa</option>
          <option value="world">Mundo</option>
          <option value="latinAmerica">América latina e Caribe</option>
          <option value="asia">Ásia</option>
          <option value="oceania">Oceania</option>
          <option value="northAmericaEurope">América do Norte e Europa</option>
        </select>
      </div>

      <div className="chart">
        <div
          className={`bar ${gravidade === 'Moderada' ? 'blue' : 'red'}`}
          style={{ height: `${getPercentage('blue')}%` }}
        >
          {getPercentage('blue')}%
        </div>
        <div
          className={`bar ${gravidade === 'Moderada' ? 'red' : 'blue'}`}
          style={{ height: `${getPercentage('red')}%` }}
        >
          {getPercentage('red')}%
        </div>
      </div>

      <div className="legend">
        <div className="blue-legend">
          <span className="color-box blue"></span>
          <span className='label-select'>Insegurança Alimentar {gravidade === 'Moderada' ? 'Moderada' : 'Grave'}</span>
        </div>
        <div className="red-legend">
          <span className="color-box red"></span>
          <span className='label-select'>Insegurança Alimentar Grave</span>
        </div>
      </div>
    </div>
  );
};

export default InsegurancaAlimentar;
