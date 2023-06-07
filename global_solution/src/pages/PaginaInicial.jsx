import Conteudo from "../components/Conteudo";
import HeaderHome from "../components/HeaderHome";
import ConteudoFatosHome from "../components/ConteudoFatosHome";
import HeaderInsegurancaHome from "../components/HeaderInsegurancaHome";
import ConteudoInsegurancaAlimentarHome from "../components/ConteudoInsegurancaAlimentarHome";
import HeaderAgriculturaSustentavelHome from "../components/HeaderAgriculturaSustentavelHome";
import ConteudoAgriculturaSustentavelHome from "../components/ConteudoAgriculturaSustentavelHome";
import ConteudoIaHome from "../components/ConteudoIaHome";
import HeaderIaHome from "../components/HeaderIaHome";
import '../style/PaginaInicial.style.css';

function Home() {
  const backgroundDark = {
    backgroundColor: "black",
  };

  return (
    <div style={backgroundDark}>
      <Conteudo>
        <header>
          <HeaderHome/>
        </header>
        <section>
          <ConteudoFatosHome/>
          <HeaderInsegurancaHome/>
          <ConteudoInsegurancaAlimentarHome/>
          <HeaderAgriculturaSustentavelHome/>
          <ConteudoAgriculturaSustentavelHome/>
          <HeaderIaHome/>
          <ConteudoIaHome/>
        </section>
      </Conteudo>
    </div>
  );
}

export default Home;
