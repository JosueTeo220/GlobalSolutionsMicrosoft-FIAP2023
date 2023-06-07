import React from "react";
import Conteudo from "../components/Conteudo";
import HeaderPaginaInicial from "../components/HeaderPaginaInicial";
import ConteudoFatosPaginaInicial from "../components/ConteudoFatosPaginaInicial";
import HeaderInsegurancaHome from "../components/HeaderInsegurancaHome";
import ConteudoInsegurancaAlimentarPaginaInicial from "../components/ConteudoInsegurancaAlimentarPaginaInicial";

function Home() {
  const backgroundDark = {
    backgroundColor: "black",
  };
  return (
    <div style={backgroundDark}>
      <Conteudo>
        <header>
          <HeaderPaginaInicial />
        </header>
        <section>
          <ConteudoFatosPaginaInicial />
          <HeaderInsegurancaHome/>
          <ConteudoInsegurancaAlimentarPaginaInicial/>
        </section>
      </Conteudo>
    </div>
  );
}

export default Home;
