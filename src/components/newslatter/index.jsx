import { useEffect } from "react";

export function Newslatter() {

  useEffect(() => {
    // Criação do formulário RD Station
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src =
      "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.innerHTML = `new RDStationForms('formulario-newsletter-dccf7c347309d4071086', 'null').createForm();`;
      document.body.appendChild(script2);
    };

    return () => {
      // Remover os scripts quando o componente for desmontado
      document.body.removeChild(script1);
      // Não é necessário remover script2, pois ele é criado e executado apenas uma vez
    };
  }, []);

  return (
    <div role="main" id="formulario-newsletter-dccf7c347309d4071086"></div>
  );
};
