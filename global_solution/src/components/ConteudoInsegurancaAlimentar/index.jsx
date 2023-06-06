import { Link } from "react-router-dom";
import "./ConteudoInsegurancaAlimentar.style.css";
import imagemFatos from "../../assets/img/imagem_conteudo_003.jpeg";
import IconDown from "../../assets/icons/expand_more_FILL1_wght400_GRAD0_opsz48.png";

function ConteudoInsegurancaAlimentar() {
  return (
    <div className="container-fluid text-center pb-4 main_container">
      <div className="row">
        <div className="col-md-6">
          <div className="image-container">
            <img
              src={imagemFatos}
              alt="imagem fatos da fome"
              className="img-fluid"
            />
            <Link to="/fatos" className="button-style">
              Veja mais sobre os dados e fatos da fome
            </Link>
          </div>
        </div>
        <div className="col-md-6 container-text-style mb-2">
          A <span>fome</span> é um problema que transcende fronteiras e atinge
          um grande número de pessoas em todo o mundo. É uma situação
          preocupante, pois a falta de acesso a alimentos básicos e nutritivos
          compromete a saúde, o desenvolvimento físico e cognitivo, e até mesmo
          a sobrevivência de milhões de indivíduos. Apesar dos avanços
          tecnológicos e da capacidade de produção alimentar em larga escala, a
          fome persiste em diversas regiões e comunidades. Existem várias razões
          para isso. Em alguns casos, a <span>pobreza extrema</span> impede que
          as pessoas tenham recursos financeiros para comprar alimentos
          suficientes para si mesmas e para suas famílias. Em outras situações,
          a <span>instabilidade política</span>, os{" "}
          <span>conflitos armados</span> e as <span>crises humanitárias</span>{" "}
          impedem a produção e distribuição adequadas de alimentos. Além disso,
          fatores como a <span>desigualdade social</span>, a falta de acesso a
          serviços básicos, como água potável e saneamento, e a{" "}
          <span>degradação ambiental</span> também contribuem para a
          persistência da fome. Muitas vezes, as comunidades mais afetadas são
          aquelas que estão em áreas rurais e dependentes da agricultura para
          sua subsistência, enfrentando condições climáticas adversas, falta de
          infraestrutura e acesso limitado a recursos.
        </div>
      </div>
      <div className="icon-container">
        <img src={IconDown} alt="" />
      </div>
    </div>
  );
}

export default ConteudoInsegurancaAlimentar;
