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

  return (
    <Styled>
      <div className="Contato">
        {!isMobile && (
          <div className="animation-geral">
            <Lottie animationData={fundoGeral} loop={false} />
          </div>
        )}
        <SenderEmail isCurriculo={false} />
      </div>
    </Styled>
  );
}
