import { useEffect } from "react";
import Balance from "react-wrap-balancer";
import Styled from "./style";
import { Fade } from "react-reveal";
import { ImRocket } from "react-icons/im";

export function Agencia() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Styled>
      <div className="Agencia">
        <div className="Agencia__MainContent">
          <Fade top>
            <h1>
              O que nos <strong>MOVE</strong>.
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
                  <ImRocket />
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
                  Como <strong>AGIMOS</strong>.
                </h1>
              </Fade>
            </div>
            <div className="ComoAgimos__Items">
              <Fade bottom>
                <div className="ComoAgimos__Item">
                  <h3>Somos humanos</h3>
                  <p>
                    Ambiente e relações de trabalho humanas e conscientes,
                    ouvimos e valorizamos a sua opinião, dos nossos
                    colaboradores e dos seus consumidores, tratando cada pessoa
                    com total atenção e compreensão.
                  </p>
                </div>
              </Fade>
              <Fade top>
                <div className="ComoAgimos__Item">
                  <h3>
                    Buscamos inovar
                    <br /> em tudo
                  </h3>
                  <p>
                    Não nos contentamos com o convencional, temos curiosidade e
                    visão, sempre experimentamos novas ideias e soluções!
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="ComoAgimos__Item">
                  <h3>
                    Temos tolerância zero para <br />
                    papo-furado
                  </h3>
                  <p>
                    Transparência e trabalho aberto proporcionam confiança e
                    maximizam o potencial de cada colaborador.
                  </p>
                </div>
              </Fade>
              <Fade top>
                <div className="ComoAgimos__Item">
                  <h3>Queremos simplificar</h3>
                  <p>
                    Sem complexidades e, sim, com agilidade, eficiência,
                    organização e objetividade para simplificar sua presença no
                    e-commerce!
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
