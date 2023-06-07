function HeaderIaHome() {
  const text = "Inteligência Artificial Generativa";
  const style = {
    color: "white",
    fontFamily: "'Roboto Mono', monospace",
  };
  const styleSpan = {
    fontFamily: "'Source Code Pro', sans-serif",
    color: "#2382C2",
    borderBottom: "1px solid white",
    fontWeight: "bold",
  };
  return (
    <div className="container-fluid text-center pt-5 mb-5 mt-5">
      <h1 className="h1" style={style}>
        <span style={styleSpan}>{text}</span> ajudando o planeta
      </h1>
    </div>
  );
}
export default HeaderIaHome;
