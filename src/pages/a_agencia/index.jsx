import { useEffect } from "react";
import Balance from "react-wrap-balancer";
import Styled from "./style";
import infosJson from "./variables.json";
import { Fade } from "react-reveal";
import rocketSvg from "../../assets/rocket-svgrepo-com.svg";
import Lottie from "lottie-react";
import fundoGeral from "../../assets/background-geral.json";
import { Cards } from "../../components/cards/cards";
import { BtnQueroComecar } from "../../components/buttons/button-quero-comecar";

export function Agencia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return (
    <Styled>
      <div className="Agencia">
        {!isMobile && (
          <div className="animation-geral">
            <Lottie animationData={fundoGeral} loop={false} />
          </div>
        )}
        <div className="Agencia__MainContent">
          <Fade top>
            <h1>
              O que nos <strong>MOVE</strong>
            </h1>
          </Fade>
          <div className="Agencia__MainContent__Info">
            <Fade left>
              <p>
                Se você tem uma <strong>empresa</strong>, ela pode ser{" "}
                <strong>DIGITAL</strong>.
              </p>
            </Fade>
            <Fade bottom>
              <div className="Divider"></div>
            </Fade>
            <Fade right>
              <p className="Agencia__CardMain">
                <Fade bottom left>
                  <img src={rocketSvg} alt="rocket" />
                </Fade>
                <Balance>
                  A <strong>Space7 Digital</strong> nasceu da vontade de uma
                  experiência digital completa, personalizada e com autonomia,
                  que criasse um relacionamento inseparável com o seu
                  consumidor. Não vemos sua empresa apenas como seu produto e o
                  seu consumidor apenas como um número. Queremos moldar uma nova
                  cultura e isso significa ficar bem pertinho do consumidor e
                  dar toda experiência, atenção e um ombro amigo para ele!
                </Balance>
              </p>
            </Fade>
          </div>
          <div className="Agencia__MainContent__ComoAgimos">
            <div className="Agencia__MainContent__ComoAgimos__Title">
              <Fade left>
                <h1>
                  Como <strong>AGIMOS</strong>:
                </h1>
              </Fade>
            </div>
            <Fade left>
              <div className="ComoAgimos__Items">
                {infosJson.cards.map((card) => (
                  <Cards {...card} isAgency={infosJson.cards.length} />
                ))}
              </div>
            </Fade>
          </div>
        </div>
        <BtnQueroComecar />
      </div>
    </Styled>
  );
}
