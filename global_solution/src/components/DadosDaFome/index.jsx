import { useState, useEffect } from 'react';
import './DadosDaFome.style.css';
import '../../script'
import { animateStatistics } from '../../script';

const DadosDaFome = () => {

  const [showStatistics, setShowStatistics] = useState(false);

  const statistics = [
    { label: 'Pessoas afetadas pela fome em 2021:', value: '828 milhões' },
    { label: 'Pessoas com insegurança alimentar moderada ou grave em 2021:', value: '2,3 bilhões' },
    { label: 'Pessoas em países de baixa renda que sofrem de desnutrição crônica:', value: '149,2 milhões' },
    { label: 'Número de crianças menores de 5 anos com desnutrição crônica:', value: '144 milhões' },
    { label: 'Porcentagem de pessoas desnutridas em relação à população mundial:', value: '9,9%' },
    { label: 'Região com o maior número de pessoas desnutridas:', value: 'Ásia' },
    { label: 'País com o maior número de pessoas desnutridas:', value: 'Índia' },
  ];

  const spanStyle = {
    color: 'brown',
  };

  const handleClick = () => {
    setShowStatistics(!showStatistics);
  };

  useEffect(() => animateStatistics(showStatistics, animate), [showStatistics]);

  const animate = () => {
    const element = document.getElementById('dados-fome');
    if (element) {
      element.classList.add('fade-in');
    }
  };

  return (
    <div className="container-fluid text-center estatistica-fome" onClick={handleClick}>
      <h2><span style={spanStyle}>Clique aqui</span> e veja os dados alarmantes da Fome</h2>
      {showStatistics && (
        <ul id="dados-fome">
          {statistics.map((statistic, index) => (
            <li key={index}>
              <span>{statistic.label}</span>
              <span>{statistic.value}</span>
            </li>
          ))}
        </ul>
      )}
      <div className='texto-fatos'>
        <p>A fome é uma realidade que assombra nosso mundo. Atualmente, mais de 828 milhões de pessoas estão sofrendo as terríveis consequências da fome em todo o globo. Esses números são alarmantes e exigem ação imediata.</p>
        <p>Além disso, cerca de 2,3 bilhões de pessoas enfrentam algum grau de insegurança alimentar moderada ou grave. Elas lutam diariamente para obter acesso a alimentos suficientes e nutritivos para sobreviver. É uma batalha desesperadora contra a fome e suas consequências devastadoras.</p>
        <p>Nos países de baixa renda, 149,2 milhões de pessoas vivem com desnutrição crônica. Entre elas, 144 milhões são crianças menores de 5 anos. Essas crianças, em sua fase mais crucial de desenvolvimento, estão sendo privadas dos nutrientes essenciais para crescerem saudáveis e fortes.</p>
        <p>A fome não escolhe fronteiras. Ela afeta todas as regiões do mundo, mas a Ásia é a região mais impactada, com o maior número de pessoas desnutridas. E o país mais afetado por essa crise é a Índia, onde milhões lutam diariamente para saciar sua fome e a de suas famílias.</p>
        <p>Esses dados são apenas uma pequena amostra da magnitude desse problema global. A fome é uma violação dos direitos humanos mais básicos, e cada pessoa que sofre com ela merece nossa atenção e ação.</p>
        <p>Chegou a hora de agirmos juntos para erradicar a fome. Cada um de nós pode fazer a diferença, apoiando iniciativas, doando alimentos, promovendo a conscientização e exigindo ações efetivas dos governos e organizações internacionais.</p>
        <p>Unidos, podemos construir um mundo onde a fome seja apenas uma lembrança triste do passado. Clique nos dados acima e junte-se à luta contra a fome!</p>
      </div>
    </div>
  );
};

export default DadosDaFome;
