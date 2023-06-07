import React from 'react';
import { useSpring, animated } from 'react-spring';
import IaGenerativa from '../../assets/img/imagem_ia_002.jpeg';
import FaleConosco from '../FaleConosco';

function IAComponent() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateX(-100px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="container-fluid text-center justify-content-center mainIa-container">
      <animated.div className="row" style={fadeIn}>
        <h1 className="h1 text-light">
          Vamos falar de como as{' '}
          <span className="text-primary">IAs Generativas</span> ajudam no combate
          à fome
        </h1>
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-md-6">
            <animated.h2 className="question text-primary" style={slideIn}>
              Você sabia?
            </animated.h2>
            <animated.p className="description text-light" style={slideIn}>
              As Inteligências Artificiais Generativas podem ajudar na previsão e
              análise de dados para identificar áreas propensas à fome. Isso
              possibilita que governos e organizações implementem medidas
              preventivas e estratégias para combater a fome de forma mais
              eficiente.
            </animated.p>
            <animated.p className="description text-light" style={slideIn}>
              Você acredita que as IAGs podem ser uma ferramenta poderosa no
              combate à fome? O que você acha que pode ser feito para maximizar
              o seu impacto?
            </animated.p>
          </div>
          <div className="col-md-6">
            <animated.img
              src={IaGenerativa}
              alt=""
              className="img-fluid w-75 shadow"
              height={'20px'}
              style={slideIn}
            />
          </div>
        </div>
      </animated.div>
      <FaleConosco />
    </div>
  );
}

export default IAComponent;
