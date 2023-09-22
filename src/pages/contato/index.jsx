import Styled from "./style";
import { useEffect } from "react";
import { SenderEmail } from "../../components/form-email";
import Lottie from "lottie-react";
import fundoGeral from "../../assets/background-geral.json";

export function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

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
      script2.innerHTML = `new RDStationForms('formulario-site-space7digital-7684c85028c061efe7b7', '').createForm();;`;
      document.body.appendChild(script2);
    };

    return () => {
      // Remover os scripts quando o componente for desmontado
      document.body.removeChild(script1);
      // Não é necessário remover script2, pois ele é criado e executado apenas uma vez
    };
  }, []);

  return (
    <Styled>
      <div className="Contato">
        {!isMobile && (
          <div className="animation-geral">
            <Lottie animationData={fundoGeral} loop={false} />
          </div>
        )}
        <div
          role="main"
          id="formulario-site-space7digital-7684c85028c061efe7b7"
        ></div>
      </div>
    </Styled>
  );
}
