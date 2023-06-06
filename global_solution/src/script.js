import { useEffect, useState } from "react";

export function useResizeHandler () {
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 765) {
        setShowComponent(false);
      } else {
        setShowComponent(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar a largura da tela ao carregar a página

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return showComponent;
};

export function  useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileQuery = window.matchMedia("(max-width: 765px)");
      setIsMobile(isMobileQuery.matches);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar a largura da tela ao carregar a página

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
