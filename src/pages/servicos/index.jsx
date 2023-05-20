import Styled from "./style";
import InfosJson from "./variables.json";
import Balance from "react-wrap-balancer";
import { Fade } from "react-reveal";

export function Servicos() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const Card = (props) => {
    const { id, title, text, text02, list } = props;

    return (
      <div className="Servicos__Item">
        <h2>
          <strong>{id}</strong>
          {title}
        </h2>
        <div className="Divider"></div>
        <p>{text}</p>
        {list.length > 0 && (
          <ul>
            {list.map((item) => (
              <li>{item.li}</li>
            ))}
          </ul>
        )}
        {text02 !== "" && <p>{text02}</p>}
      </div>
    );
  };
  console.log(InfosJson);
  return (
    <Styled>
      <div className="Servicos">
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
                </p>
              </Fade>
            </Balance>
          </div>
          <Fade left>
            <div className="Servicos__Title">
              <h1>Nossos seviços conssistem em:</h1>
            </div>
          </Fade>
          <div className="Servicos__MainServicos">
            {!isMobile && (
              <Fade left>
                <div className="Servicos__Items">
                  {InfosJson.cards.map((card) => Card(card))}
                </div>
              </Fade>
            )}
            {isMobile && (
              <div className="Servicos__Items">
                <Fade left>{InfosJson.cards.map((card) => Card(card))}</Fade>
              </div>
            )}
          </div>
        </div>
      </div>
    </Styled>
  );
}
