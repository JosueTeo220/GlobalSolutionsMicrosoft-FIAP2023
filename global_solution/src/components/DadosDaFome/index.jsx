import { useState } from 'react';
import './DadosDaFome.style.css'
const DadosDaFome = () => {
  const [showStatistics, setShowStatistics] = useState(false);

  const statistics = [
    { label: 'Pessoas afetadas pela fome em 2021:', value: '828 milhões' },
    { label: 'Pessoas com insegurança alimentar moderada ou grave em 2021:', value: '2,3 bilhões' }
  ];

  const handleClick = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="container-fluid justify-content-center hunger-statistics" onClick={handleClick}>
      <h2>Clique aqui e Veja os dados alarmantes da Fome</h2>
      {showStatistics && (
        <ul>
          {statistics.map((statistic, index) => (
            <li key={index}>
              <span>{statistic.label}</span>
              <span>{statistic.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DadosDaFome;
