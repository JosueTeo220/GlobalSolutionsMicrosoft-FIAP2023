// script.js
import { useEffect, useState } from "react";

export function getStatisticData() {
  return {
    africa: { blue: 57.9, red: 23.4 },
    latinAmerica: { blue: 40.6, red: 14.2 },
    world: { blue: 29.3, red: 9.8 },
    asia: { blue: 24.6, red: 10.5 },
    oceania: { blue: 13, red: 4.5 },
    northAmericaEurope: { blue: 8, red: 1.5 },
  };
}

export function useResizeHandler() {
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 780) {
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
}

export function useMobileDetection() {
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

export function prepareCounter(phrase, setText) {
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
}

export function animateStatistics(showStatistics, animate) {
  if (showStatistics) {
    animate();
  }
}
