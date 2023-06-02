import { useEffect } from "react";
import Styled from "./style";
import InfosJson from "./variables.json";
import Balance from "react-wrap-balancer";
import { BtnQueroComecar } from "../../components/buttons/button-quero-comecar";
import { Fade } from "react-reveal";
import Lottie from "lottie-react";
import fundoGeral from "../../assets/background-geral.json";
import { Cards } from "../../components/cards/cards";

export function Servicos() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Styled>
      <div className="Servicos">
        {!isMobile && (
          <div className="animation-geral">
            <Lottie animationData={fundoGeral} loop={false} />
          </div>
        )}
        <div className="Servicos__Content">
          <div className="Servicos__Content__Texts">
            <Fade top>
              <h1>
                Jornada da <br />
                <strong>Transformação Digital</strong>
              </h1>
            </Fade>
            <Fade bottom>
              <h2>
                Da <strong>estratégia</strong> à <strong>execução</strong>.
              </h2>
            </Fade>
            <Fade left>
              <div className="Divider"></div>
            </Fade>
            <Balance>
              <Fade right>
                <p>
                  um novo <strong>canal de vendas</strong> para o seu produto
                  <br />
                  um <strong>e-commerce</strong> que vai construir o
                  relacionamento real <strong>empresa/consumidor</strong>
                  <br />Nossos <strong>seviços</strong> conssistem em:
                </p>
              </Fade>
            </Balance>
          </div>
          <div className="Servicos__MainServicos">
            {!isMobile && (
              <Fade left>
                <div className="Servicos__Items">
                  {InfosJson.cards.map((card) => <Cards {...card} isAgency={InfosJson.cards.length }/>)}
                </div>
              </Fade>
            )}
            {isMobile && (
              <div className="Servicos__Items">
                <Fade left>{InfosJson.cards.map((card) => <Cards {...card} isAgency={InfosJson.cards.length } />)}</Fade>
              </div>
            )}
                <div className="Servicos__Item_Btn">
                  <BtnQueroComecar />
                </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
