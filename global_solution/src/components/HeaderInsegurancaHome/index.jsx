function HeaderInsegurancaHome() {
  const text = "Insegurança Alimentar ";
  const style = {
    color: 'white',
    fontFamily: "'Roboto Mono', monospace",
  };
  const styleSpan = {
    fontFamily: "'Source Code Pro', sans-serif",
    color: "#a52a2a",
    borderBottom: "1px solid white",
    fontWeight: "bold",
  };
  return (
    <div className="container-fluid text-center pt-5 mb-5 mt-5">
      <h1 className="h1" style={style}>
      A Triste realidade da{" "}
        <span style={styleSpan}>{text}</span>
        nos dias de hoje
      </h1>
    </div>
  );
}
export default HeaderInsegurancaHome;
