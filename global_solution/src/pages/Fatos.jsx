import Conteudo from "../components/Conteudo";
import DadosDaFome from "../components/DadosDaFome";

function Fatos() {
  const backgroundDark = {
    backgroundColor: "black",
  };
  return (
    <div style={backgroundDark}>
      <Conteudo>
        <DadosDaFome/>
      </Conteudo>
    </div>
  );
}
export default Fatos;
