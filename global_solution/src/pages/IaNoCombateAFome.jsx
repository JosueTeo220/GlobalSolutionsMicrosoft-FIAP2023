import Conteudo from "../components/Conteudo";
import IAComponent from "../components/IaNoCombateAFomeComponent";

function IaNoCombateAFome() {
  const backgroundDark = {
    backgroundColor: "black",
  };
  return (
    <div style={backgroundDark}>
      <Conteudo>
        <IAComponent />
      </Conteudo>
    </div>
  );
}
export default IaNoCombateAFome;
