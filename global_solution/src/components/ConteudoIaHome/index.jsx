import { Link } from "react-router-dom";
import imagemIa from "../../assets/img/imagem_ia_generativa.jpeg";

function ConteudoIaHome() {
  return (
    <div className="container-fluid text-center pb-4">
      <div className="row">
        <div className="col-md-6">
          <div className="image-container">
            <img
              src={imagemIa}
              alt="imagem ia"
              className="img-fluid"
            />
            <Link to="/ia" className="button-style">
              Veja mais sobre as inteligências artificiais generativas
            </Link>
          </div>
        </div>
        <div className="col-md-6 container-text-style mb-2">
          As inteligências artificiais generativas (IAs) podem ajudar no combate
          à fome, gerando alimentos alternativos e nutricionalmente
          equilibrados. Elas também podem otimizar a produção e distribuição de
          alimentos, além de educar comunidades vulneráveis sobre segurança
          alimentar. No entanto, as IAs não são a única solução e devem ser
          combinadas com esforços sociais e políticos para enfrentar as causas
          subjacentes da fome.
        </div>
      </div>
    </div>
  );
}

export default ConteudoIaHome;
