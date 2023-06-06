import React from "react";
import Conteudo from "../components/Conteudo";
import HeaderPaginaInicial from "../components/HeaderPaginaInicial";
import ConteudoFatosPaginaInicial from "../components/ConteudoFatosPaginaInicial";
import HeaderInsegurancaHome from "../components/HeaderInsegurancaHome";
import ConteudoInsegurancaAlimentar from "../components/ConteudoInsegurancaAlimentar";

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
        </section>
        <HeaderInsegurancaHome/>
        <section>
          <ConteudoInsegurancaAlimentar/>
        </section>
      </Conteudo>
    </div>
  );
}

export default Home;
