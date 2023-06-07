import { Link } from "react-router-dom";
import imagemFatos from "../../assets/img/imagem_conteudo_001.jpeg";
import './ConteudoInsegurancaAlimentar.style.css'

function ConteudoInsegurancaAlimentarPaginaInicial() {
  return (
    <div className="container-fluid text-center pb-4">
      <div className="row">
        <div className="col-md-6">
          <div className="image-container">
            <img
              src={imagemFatos}
              alt="imagem fatos da fome"
              className="img-fluid"
            />
            <Link to="/inseguranca" className="button-style">
              Veja mais sobre a insegurança alimentar
            </Link>
          </div>
        </div>
        <div className="col-md-6 container-text-style mb-2">
          A <span>insegurança alimentar</span> é um problema global que afeta
          milhões de pessoas devido à falta de acesso regular a alimentos
          nutritivos. Isso pode causar má nutrição, problemas de saúde física e
          emocional. Para combatê-la, é necessário investir em programas de
          combate à pobreza, promover a agricultura sustentável e fornecer
          educação sobre nutrição e práticas agrícolas. Ações conjuntas são
          essenciais para garantir que todas as pessoas tenham acesso adequado a
          alimentos e promover um mundo mais justo.
        </div>
      </div>
    </div>
  );
}

export default ConteudoInsegurancaAlimentarPaginaInicial;
