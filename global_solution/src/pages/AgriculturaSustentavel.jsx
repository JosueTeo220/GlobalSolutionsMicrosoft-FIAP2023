import ODS2Component from "../components/AgriculturaSustentavelComponent";
import Conteudo from "../components/Conteudo";

function AgriculturaSustentavel() {
  const backgroundDark = {
    paddingTop: '60px',
    paddingBottom: '60px',
    backgroundColor: "black",
  };
  return (
    <div style={backgroundDark}>
      <Conteudo>
        <ODS2Component />
      </Conteudo>
    </div>
  );
}
export default AgriculturaSustentavel;
