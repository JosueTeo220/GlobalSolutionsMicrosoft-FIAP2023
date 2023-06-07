import React from "react";
import "./AgriculturaSustentavel.style.css";
import { useSpring, animated } from "react-spring";

const ODS2Component = () => {
  const fadeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideAnimation = useSpring({
    transform: "translateX(0)",
    from: { transform: "translateX(-200px)" },
    config: { duration: 1500 },
  });

  return (
    <div className="container-fluid text-md-center ods-container">
      <animated.div
        className="ods2-container"
        style={{ ...fadeAnimation, backgroundColor: "black", color: "white" }}
      >
        <h2>
          <span>Objetivo de Desenvolvimento Sustentável 2</span>: Fome zero e
          agricultura
        </h2>
        <div className="ods2-goals">
          <h3>1° Meta</h3>
          <animated.div className="goal" style={slideAnimation}>
            <p>
              Até 2030, acabar com a fome e garantir o acesso de todas as
              pessoas, em particular os pobres e pessoas em situações
              vulneráveis, incluindo crianças, a alimentos seguros, nutritivos e
              suficientes durante todo o ano.
            </p>
          </animated.div>
          <h3>2° Meta</h3>
          <animated.div className="goal" style={slideAnimation}>
            <p>
              Até 2030, acabar com todas as formas de má-nutrição, incluindo
              atingir, até 2025, as metas acordadas internacionalmente sobre
              nanismo e caquexia em crianças menores de cinco anos de idade, e
              atender às necessidades nutricionais dos adolescentes, mulheres
              grávidas e lactantes, e pessoas idosas.
            </p>
          </animated.div>
          <h3>3° Meta</h3>
          <animated.div className="goal" style={slideAnimation}>
            <p>
              Até 2030, dobrar a produtividade agrícola e a renda dos pequenos
              produtores de alimentos, particularmente das mulheres, povos
              indígenas, agricultores familiares, pastores e pescadores,
              inclusive por meio de acesso seguro e igual à terra, outros
              recursos produtivos e insumos, conhecimento, serviços financeiros,
              mercados e oportunidades de agregação de valor e emprego não
              agrícola.
            </p>
          </animated.div>
          <h3>4° Meta</h3>
          <animated.div className="goal" style={slideAnimation}>
            <p>
              Até 2030, garantir sistemas sustentáveis de produção de alimentos
              e implementar práticas agrícolas resilientes, que aumentem a
              produtividade e a produção, que ajudem a manter os ecossistemas,
              que fortaleçam a capacidade de adaptação às mudanças climáticas,
              às condições meteorológicas extremas, secas, inundações e outros
              desastres, e que melhorem progressivamente a qualidade da terra e
              do solo.
            </p>
          </animated.div>
          <h3>5° Meta</h3>
          <animated.div className="goal" style={slideAnimation}>
            <p>
              Até 2030, manter a diversidade genética de sementes, plantas
              cultivadas, animais de criação e domesticados e suas respectivas
              espécies selvagens, inclusive por meio de bancos de sementes e
              plantas diversificados e bem geridos em nível nacional, regional e
              internacional, e garantir o acesso e a repartição justa e
              equitativa dos benefícios decorrentes da utilização dos recursos
              genéticos e conhecimentos tradicionais associados, como acordado
              internacionalmente.
            </p>
          </animated.div>
        </div>
        <p className="container-md" style={{paddingTop: "100px"}}>
        A fome é uma das questões mais urgentes que enfrentamos hoje. Milhões de
        pessoas em todo o mundo sofrem de desnutrição crônica, enquanto
        toneladas de alimentos são desperdiçadas todos os dias. O ODS 2 tem como
        objetivo mudar essa realidade, garantindo que todas as pessoas tenham
        acesso a uma alimentação adequada, nutritiva e suficiente para levar uma
        vida saudável e produtiva. A agricultura desempenha um papel fundamental
        na erradicação da fome. No entanto, a agricultura atual enfrenta muitos
        desafios, incluindo mudanças climáticas, degradação ambiental, falta de
        acesso a recursos e tecnologias adequadas, e desigualdades no sistema
        alimentar. Para atingir o ODS 2, é necessário adotar abordagens
        sustentáveis na agricultura, que levem em consideração não apenas a
        produção de alimentos, mas também a proteção do meio ambiente e o
        respeito pelos direitos dos agricultores.
      </p>
      </animated.div>
      
    </div>
  );
};

export default ODS2Component;
