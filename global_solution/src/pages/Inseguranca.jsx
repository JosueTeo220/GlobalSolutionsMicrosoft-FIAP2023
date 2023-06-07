import Conteudo from "../components/Conteudo";
import InsegurancaAlimentar from "../components/InsegurancaAlimentar";

function Inseguranca() {
  const backgroundDark = {
    backgroundColor: "black",
  };
  return (
    <div style={backgroundDark}>
      <Conteudo>
        <InsegurancaAlimentar />
      </Conteudo>
    </div>
  );
}
export default Inseguranca;
