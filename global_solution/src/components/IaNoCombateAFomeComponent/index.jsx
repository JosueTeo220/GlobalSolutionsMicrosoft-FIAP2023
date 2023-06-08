import React from "react";
import { useSpring, animated } from "react-spring";
import IaGenerativa from "../../assets/img/imagem_ia_002.jpeg";
import FaleConosco from "../FaleConosco";

function IAComponent() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: "translateX(-100px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="container-fluid text-center justify-content-center mainIa-container">
      <animated.div className="row" style={fadeIn}>
        <h1 className="h1 text-light">
          Vamos falar de como as{" "}
          <span className="text-primary">IAs Generativas</span> ajudam no
          combate à fome
        </h1>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6">
            <animated.h2 className="question text-primary" style={slideIn}>
              Você sabia?
            </animated.h2>
            <animated.p className="description text-light" style={slideIn}>
              As Inteligências Artificiais Generativas podem ajudar na previsão
              e análise de dados para identificar áreas propensas à fome. Isso
              possibilita que governos e organizações implementem medidas
              preventivas e estratégias para combater a fome de forma mais
              eficiente.
            </animated.p>
            <animated.p className="description text-light" style={slideIn}>
              Além disso, as IAs Generativas também podem ser utilizadas para
              criar soluções inovadoras no âmbito da produção de alimentos. Por
              exemplo, elas podem ajudar a otimizar o uso de recursos agrícolas,
              criar novas receitas nutritivas e até mesmo desenvolver métodos
              mais eficientes de distribuição de alimentos em áreas carentes.
            </animated.p>
            <animated.p className="description text-light" style={slideIn}>
              Acredita-se que o potencial das IAs Generativas no combate à fome
              é enorme. Através da análise de grandes volumes de dados e da
              aplicação de algoritmos avançados, essas tecnologias podem
              contribuir para a criação de estratégias eficazes de segurança
              alimentar e redução da fome no mundo.
            </animated.p>
            <animated.p className="description text-light" style={slideIn}>
              Qual é a sua opinião sobre o uso das IAs Generativas no combate à
              fome? Você acredita que elas podem desempenhar um papel
              significativo na resolução desse problema global?
            </animated.p>
          </div>
          <div className="col-md-6">
            <animated.img
              src={IaGenerativa}
              alt="Ia Generativa"
              className="img-fluid w-75 shadow"
              height={"20px"}
              style={slideIn}
            />
          </div>
        </div>
      </animated.div>
      <h1 className="mt-5 text-primary border-bottom-5">
        Qual nossa solução para esta problemática
      </h1>
      <div
        style={{
          marginTop: "50px",
          color: "white",
          fontFamily: "'Source Code Pro'",
        }}
      >
        Uma plataforma inovadora que utiliza a tecnologia de Inteligência
        Artificial Generativa para auxiliar na administração dos estoques de
        alimentos. Nosso diferencial em relação a outras plataformas é a
        capacidade de prever as vendas dos produtos que estão próximos ao
        término da validade e sugerir porcentagens de desconto de acordo com os
        prazos, visando um melhor aproveitamento das vendas. Nossa solução é
        composta por um sistema de gerenciamento de estoque que utiliza
        algoritmos avançados de aprendizado de máquina para analisar dados
        históricos de vendas, informações sobre datas de validade e outros
        fatores relevantes. Com base nessa análise, a inteligência artificial
        generativa é capaz de fazer previsões precisas sobre a demanda futura de
        produtos específicos. Quando um produto está próximo do vencimento,
        nosso sistema identifica essa situação e sugere porcentagens de desconto
        de acordo com o prazo restante antes da expiração. Essas sugestões são
        baseadas em dados estatísticos e tendências de vendas anteriores,
        garantindo uma abordagem personalizada e eficiente para cada item em
        estoque. Além disso, nossa plataforma permite a integração com sistemas
        de vendas online e pontos de venda físicos, facilitando a comunicação
        entre o gerenciamento de estoque e as equipes de vendas. Isso
        possibilita a aplicação automática dos descontos sugeridos pela
        inteligência artificial, garantindo que os produtos próximos ao
        vencimento sejam comercializados de forma ágil e eficaz. Nossa solução
        inteligência artificial de combate à fome não apenas ajuda a reduzir o
        desperdício de alimentos, mas também aumenta a lucratividade dos
        estabelecimentos comerciais. Ao aproveitar ao máximo as vendas de
        produtos próximos ao vencimento, os estabelecimentos podem reduzir suas
        perdas e, ao mesmo tempo, fornecer alimentos acessíveis àqueles que mais
        precisam. Além disso, nossa plataforma pode ser adaptada para atender a
        diferentes setores, desde supermercados e mercearias até restaurantes e
        instituições de caridade. Com a inteligência artificial generativa a
        serviço da administração dos estoques, podemos fazer uma diferença real
        no combate à fome, promovendo um uso mais eficiente dos alimentos
        disponíveis e contribuindo para uma sociedade mais sustentável.
      </div>
      <FaleConosco />
    </div>
  );
}

export default IAComponent;
