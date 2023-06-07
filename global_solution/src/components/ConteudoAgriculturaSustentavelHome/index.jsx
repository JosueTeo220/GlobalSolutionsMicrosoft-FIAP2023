import { Link } from "react-router-dom";
import imagemAgricultura from "../../assets/img/imagem_agriculturasustentavel.jpeg";
import './ConteudoAgriculturaSustentavelHome.style.css'

function ConteudoAgriculturaSustentavelHome() {
  const style = {
    color: 'green'
  }
  return (
    <div className="container-fluid text-center pb-4 main_container">
      <div className="row">
        <div className="col-md-6 container-text-style mb-2">
          <span style={style}>Agricultura Sustentável</span> é um termo que descreve um conjunto de
          práticas agrícolas voltadas para a preservação dos recursos naturais,
          a minimização dos impactos ambientais e a promoção da segurança
          alimentar a longo prazo. Essa abordagem busca <span style={style}>equilibrar</span> a produção
          agrícola com a conservação do meio ambiente, levando em consideração
          os aspectos econômicos e sociais envolvidos. A palavra-chave na
          Agricultura Sustentável é "<span style={style}>sustentabilidade</span>". Ela envolve o uso
          responsável dos recursos naturais, como solo, água e ar, de forma a
          não esgotá-los ou degradá-los. A preservação desses recursos é
          essencial para garantir a viabilidade das atividades agrícolas no
          presente e no futuro. Agricultores engajados na agricultura
          sustentável utilizam uma série de técnicas e práticas que promovem a
          conservação do solo e a proteção da biodiversidade
        </div>
        <div className="col-md-6">
          <div className="image-container">
            <img
              src={imagemAgricultura}
              alt="imagem fatos da fome"
              className="img-fluid border-2"
            />
            <Link to="/agricultura-sustentavel" className="button-style">
              Veja mais sobre a agricultura sustentável
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConteudoAgriculturaSustentavelHome;
