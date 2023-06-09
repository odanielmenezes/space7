import { useEffect } from "react";
import Styled from "./style";
import { SenderEmail } from "../../components/form-email";
import Lottie from "lottie-react";
import fundoGeral from "../../assets/background-geral.json";
import AnimationLottie from "../../assets/trabalhe-conosco.json";
import { Fade } from "react-reveal";

export function TrabalheConosco() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  return (
    <Styled>
      <div className="TrabalheConosco">
        {!isMobile && (
          <div className="animation-geral">
            <Lottie animationData={fundoGeral} loop={false} />
          </div>
        )}
        <Fade top>
          <h1>
            Venha fazer parte do nosso <strong>time</strong>
          </h1>
        </Fade>
        <Fade right>
          <div className="Divider"></div>
        </Fade>
        <Fade bottom>
          <p className="p">
            Faça parte da <strong>transformação digital</strong> dos nossos
            clientes.
          </p>
        </Fade>
        <Fade left>
          <div className="Lottie">
            <Lottie animationData={AnimationLottie} loop />
          </div>
        </Fade>
        <Fade right>
          <SenderEmail isCurriculo={true} />
        </Fade>
      </div>
    </Styled>
  );
}
