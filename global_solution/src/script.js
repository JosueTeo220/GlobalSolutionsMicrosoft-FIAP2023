// script.js
import { useEffect, useState } from "react";

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

export function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
export function addClassOnScroll(element, className) {
  function handleScroll() {
    if (isElementInViewport(element)) {
      element.classList.add(className);
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

export function animateOnFocus(element) {
  function handleFocus() {
    element.classList.add('animate');
    element.removeEventListener('focus', handleFocus);
  }

  element.addEventListener('focus', handleFocus);
}

export function animateOnClick(element) {
  function handleClick() {
    element.classList.add('animate');
    element.removeEventListener('click', handleClick);
  }

  element.addEventListener('click', handleClick);
}
