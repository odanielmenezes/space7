import { useEffect } from "react";
import Styled from "./style";
import { SenderEmail } from "../../components/form-email";
import Lottie from "lottie-react";
import AnimationLottie from "../../assets/trabalhe-conosco.json";
import { Fade } from "react-reveal";

export function TrabalheConosco() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Styled>
      <div className="TrabalheConosco">
        <Fade left>
          <h1>
            Venha fazer parte do nosso <strong>time</strong>.
          </h1>
        </Fade>
        <Fade right>
          <div className="Divider"></div>
        </Fade>
        <Fade left>
          <p className="p">
            Faça parte da <strong>transformação digital</strong> dos nossos
            clientes.
          </p>
        </Fade>
        <Fade bottom>
          <div className="Lottie">
            <Lottie animationData={AnimationLottie} loop />
          </div>
        </Fade>
        <Fade right>
          <h2>Envie seu curriculo e protfólio:</h2>
        </Fade>
        <Fade left>
          <SenderEmail />
        </Fade>
      </div>
    </Styled>
  );
}
