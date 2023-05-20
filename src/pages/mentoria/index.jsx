import Styled from "./style";
import { BsPersonCheck, BsBoxes, BsBoxSeam, BsArrowLeft } from "react-icons/bs";
import Fade from "react-reveal";
import Lottie from "lottie-react";
import AnimationMentor from "../../assets/81450-team.json";
import Balance from "react-wrap-balancer";
import { MdImportantDevices, MdSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router-dom";

export function Mentoria() {
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
            <div className="Menoria__Lottie">
              <Lottie animationData={AnimationMentor} loop={true} />
            </div>
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
                  <strong>01</strong> Equipe com foco no consumidor
                  <div className="Divider"></div>
                </h2>
                <BsPersonCheck />
              </div>
              <div className="Mentoria__Table__Item">
                <h2>
                  <strong>02</strong> Tecnologia de e-commerce
                  <div className="Divider"></div>
                </h2>
                <MdImportantDevices />
              </div>
              <div className="Mentoria__Table__Item">
                <h2>
                  <strong>03</strong> Gestão de vendas e inventário
                  <div className="Divider"></div>
                </h2>
                <BsBoxes />
              </div>
            </Fade>
            <Fade left>
              <div className="Mentoria__Table__Item">
                <h2>
                  <strong>04</strong> Gestão da logística de entrega
                  <div className="Divider"></div>
                </h2>
                <TbTruckDelivery />
              </div>
              <div className="Mentoria__Table__Item">
                <h2>
                  <strong>05</strong> Gestão financeira do seu e-commerce
                  <div className="Divider"></div>
                </h2>
                <GoGraph />
              </div>
              <div className="Mentoria__Table__Item">
                <h2>
                  <strong>06</strong> Atendimento ao consumidor
                  <div className="Divider"></div>
                </h2>
                <MdSupportAgent />
              </div>
            </Fade>
            <Fade right>
              <div className="Mentoria__Table__Item">
                <h2>
                  <strong>07</strong> Marketing digital com foco no produto
                  <div className="Divider"></div>
                </h2>
                <BsBoxSeam />
              </div>
              <div className="Mentoria__Table__Item__Button">
                <Link to="/contato">
                  <button>Quero começar</button>
                </Link>
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
