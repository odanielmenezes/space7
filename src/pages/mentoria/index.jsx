import { useEffect } from "react";
import Styled from "./style";
import Fade from "react-reveal";
import AnimationMentor from "../../assets/81450-team.json";
import { BtnQueroComecar } from "../../components/buttons/button-quero-comecar";
import Balance from "react-wrap-balancer";
import Lottie from "lottie-react";
import Consumer from "../../assets/mentoria-consumer.svg";
import Devices from "../../assets/mentoria-devices.svg";
import Metrics from "../../assets/metrics2.svg";
import Support from "../../assets/mentoria-sup.svg";
import Products from "../../assets/mentoria-products.svg";
import Inventary from "../../assets/mentoria-inventary.svg";
import Delivery from "../../assets/mentoria-delivery.svg";
import fundoGeral from "../../assets/background-geral.json";

export function Mentoria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  return (
    <Styled>
      <div className="Mentoria">
        {!isMobile && (
          <div className="animation-geral">
            <Lottie animationData={fundoGeral} loop={false} />
          </div>
        )}
        <div className="Mentoria__Content">
          <div className="Mentoria__Content__Titles">
            <Fade top>
              <h1>
                Serviços de mentoria em <br />
                <strong>e-commerce</strong>
              </h1>
            </Fade>
            <Fade right>
              <div className="Divider"></div>
            </Fade>
            <Fade left>
              <p>
                Realize a transformação <strong>digital</strong> da sua empresa.
              </p>
            </Fade>
            <Fade bottom>
              <div className="Menoria__Lottie">
                <Lottie animationData={AnimationMentor} loop={true} />
              </div>
            </Fade>
            <Fade right>
              <Balance>
                <p>
                  Nós acreditamos que para a criação de um{" "}
                  <strong>e-commerce</strong> de sucesso, precisamos trabalhar
                  de maneira <strong>colaborativa</strong>, numa relação de
                  total <strong>confiança e transparência</strong>.<br />
                  Nossa <strong>mentoria</strong> tem como base:
                </p>
              </Balance>
            </Fade>
            <Fade right>
              <div className="Divider"></div>
            </Fade>
          </div>
          <div className="Mentoria__Table">
            <Fade left>
              <div className="Mentoria__Table__Item line01">
                <div className="icon">
                  <img src={Consumer} alt="" />
                </div>
                <h2>
                  Equipe com foco no consumidor
                  <div className="Divider"></div>
                </h2>
                <p>
                  A equipe com foco no consumidor oferece experiências
                  excepcionais e fortalece a fidelidade dos clientes.
                </p>
              </div>
            </Fade>
            <Fade left>
              <div className="Mentoria__Table__Item line02">
                <div className="icon">
                  <img src={Devices} alt="" />
                </div>
                <h2>
                  Tecnologia de e-commerce
                  <div className="Divider"></div>
                </h2>
                <p>
                  A tecnologia de e-commerce impulsiona o crescimento e a
                  eficiência das vendas online.
                </p>
              </div>
            </Fade>
            <Fade left>
              <div className="Mentoria__Table__Item line03">
                <div className="icon">
                  <img src={Inventary} alt="" />
                </div>
                <h2>
                  Gestão de vendas e inventário
                  <div className="Divider"></div>
                </h2>
                <p>
                  A eficiente gestão de vendas e inventário otimiza o fluxo de
                  produtos, impulsionando o sucesso do negócio.
                </p>
              </div>
            </Fade>
            <Fade left>
              <div className="Mentoria__Table__Item line04">
                <div className="icon">
                  <img src={Delivery} alt="" />
                </div>
                <h2>
                  Gestão da logística de entrega
                  <div className="Divider"></div>
                </h2>
                <p>
                  A eficaz gestão da logística de entrega garante a satisfação
                  do cliente e a agilidade nas operações comerciais.
                </p>
              </div>
            </Fade>
            <Fade left>
              <div className="Mentoria__Table__Item line05">
                <div className="icon">
                  <img src={Metrics} alt="" />
                </div>
                <h2>
                  Gestão financeira do seu e-commerce
                  <div className="Divider"></div>
                </h2>
                <p>
                  Uma sólida gestão financeira do seu e-commerce é fundamental
                  para o crescimento sustentável e a saúde financeira do
                  negócio.
                </p>
              </div>
            </Fade>
            <Fade left>
              <div className="Mentoria__Table__Item line06">
                <div className="icon">
                  <img src={Support} alt="" />
                </div>
                <h2>
                  Atendimento ao consumidor
                  <div className="Divider"></div>
                </h2>
                <p>
                  Um excelente atendimento ao consumidor é a base para construir
                  relacionamentos duradouros e impulsionar o sucesso do seu
                  negócio.
                </p>
              </div>
            </Fade>
            <Fade left>
              <div className="Mentoria__Table__Item line07">
                <div className="icon">
                  <img src={Products} alt="" />
                </div>
                <h2>
                  Marketing digital com foco no produto
                  <div className="Divider"></div>
                </h2>
                <p>
                  O marketing digital com foco no produto potencializa a
                  visibilidade, atrai o público-alvo e impulsiona as vendas.
                </p>
              </div>
            </Fade>
          </div>
          <div className="Mentoria__Table__Item__Button Mentoria__Table__Item line08">
            <BtnQueroComecar />
          </div>
        </div>
      </div>
    </Styled>
  );
}
