import { useEffect } from "react";
import Styled from "./style";
import { BsPersonCheck, BsBoxes, BsBoxSeam, BsArrowLeft } from "react-icons/bs";
import Fade from "react-reveal";
import Lottie from "lottie-react";
import AnimationMentor from "../../assets/81450-team.json";
import { BtnQueroComecar } from "../../components/buttons/button-quero-comecar";
import Balance from "react-wrap-balancer";
import { MdImportantDevices, MdSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router-dom";

export function Mentoria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Styled>
      <div className="Mentoria">
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
                  total <strong>confiança e transparência</strong>.
                </p>
              </Balance>
            </Fade>
            <Fade right>
              <div className="Divider"></div>
            </Fade>
            <Fade top>
              <h1>
                Nossa <strong>mentoria</strong> tem como base:
              </h1>
            </Fade>
          </div>
          <div className="Mentoria__Table">
            <Fade right>
              <div className="Mentoria__Table__Item">
                <h2>
                  Equipe com foco no consumidor
                  <div className="Divider"></div>
                </h2>
                <BsPersonCheck />
              </div>
              <div className="Mentoria__Table__Item">
                <h2>
                  Tecnologia de e-commerce
                  <div className="Divider"></div>
                </h2>
                <MdImportantDevices />
              </div>
              <div className="Mentoria__Table__Item">
                <h2>
                  Gestão de vendas e inventário
                  <div className="Divider"></div>
                </h2>
                <BsBoxes />
              </div>
            </Fade>
            <Fade left>
              <div className="Mentoria__Table__Item">
                <h2>
                  Gestão da logística de entrega
                  <div className="Divider"></div>
                </h2>
                <TbTruckDelivery />
              </div>
              <div className="Mentoria__Table__Item">
                <h2>
                  Gestão financeira do seu e-commerce
                  <div className="Divider"></div>
                </h2>
                <GoGraph />
              </div>
              <div className="Mentoria__Table__Item">
                <h2>
                  Atendimento ao consumidor
                  <div className="Divider"></div>
                </h2>
                <MdSupportAgent />
              </div>
            </Fade>
            <Fade right>
              <div className="Mentoria__Table__Item">
                <h2>
                  Marketing digital com foco no produto
                  <div className="Divider"></div>
                </h2>
                <BsBoxSeam />
              </div>
              <div className="Mentoria__Table__Item__Button">
                <BtnQueroComecar />
              </div>
              <div className="Mentoria__Table__Text">
                <BsArrowLeft />
                <div className="Text">
                  <h1>
                    <p>COMEÇAR A</p>
                    <p>JORNADA DIGITAL</p>
                    <p>DA MINHA EMPRESA</p>
                  </h1>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Styled>
  );
}
