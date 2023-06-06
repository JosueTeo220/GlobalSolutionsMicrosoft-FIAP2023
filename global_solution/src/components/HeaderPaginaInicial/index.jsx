import { useState,useEffect } from "react";
function HeaderPaginaInicial() {
  const [text, setText] = useState("");
  const phrase = "Fome Global";

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter === phrase.length) {
        clearInterval(interval);
      }
      setText(phrase.slice(0, counter));
      counter++;
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);
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
    <div className="container-fluid text-center pt-5 mb-5">
      <h1 className="h1" style={style}>
        Desvendando a cruel realidade da{" "}
        <span style={styleSpan}>{text}</span>
      </h1>
    </div>
  );
}
export default HeaderPaginaInicial;
