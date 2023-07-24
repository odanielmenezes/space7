import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import infosCards from "./variables.json";
import Styled from "./style";
import { SenderEmail } from "../../components/form-email";
import animaEcommerce from "../../assets/eCommerce.json";
import Lottie from "lottie-react";
import { Cards } from "../../components/cards/cards";
import RocketAnima from "../../assets/36418-cecil-portfolio-background.json";
import Balance from "react-wrap-balancer";
import { BtnQueroComecar } from "../../components/buttons/button-quero-comecar";

export function Home() {
  const frase = `Tenha um parceiro para sua transformação digital `;
  const [letras, setLetras] = useState([frase.split("")]);
  let [fraseCompleta1, setFraseCompleta1] = useState("");
  let [fraseCompleta, setFraseCompleta] = useState("");
  let [fraseCompleta2, setFraseCompleta2] = useState("");
  let [ponto, setPonto] = useState("");
  const [cursor, setCursor] = useState(false);
  let cont = 0;
  let decCont = frase.split("").length - 1;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function animation() {
    var mostrarLetras = setInterval(() => {
      if (letras.length > 0) {
        if (cont < 9) {
          setFraseCompleta1((fraseCompleta1 += letras[0][cont]));
        } else if (cont > 8 && cont < 27) {
          setFraseCompleta((fraseCompleta += letras[0][cont]));
        } else {
          setFraseCompleta2((fraseCompleta2 += letras[0][cont]));
          if (cont === letras.length - 1) {
            setPonto(letras[letras.length - 1]);
          }
        }
        if (cont === decCont) {
          clearInterval(mostrarLetras);
        }
        cont++;
      }
    }, 90);
  }
  useState(() => {
    animation();
  }, [letras]);

  return (
    <Styled>
      <div className="HomePage">
        <div className="HomePage__Animation">
          <div className="AnimationLottie">
            <Lottie animationData={RocketAnima} loop={false} />
          </div>
          <div className="Rocket">
            <Fade left>
              <div className="HomePage__Content">
                <div className="letreiro">
                  <span>
                    <span className="frase01">
                      SOLUÇÕES DE E-COMMERCE E MARKETING DIGITAL <br /> PARA SUA
                      EMPRESA
                    </span>
                    <br />
                  </span>
                </div>
                <small className="HomePage__SmallText">
                  Venda seus produtos 24 horas por dia, 7 dias por semana, com
                  sua LOJA VIRTUAL
                </small>
                <a
                  href="https://wa.me/5551989515775?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+da+SPACE7."
                  target="_blank"
                >
                  <BtnQueroComecar
                    name="QUER VENDER MAIS"
                    link={null}
                    href="https://wa.me/5551989515775?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+da+SPACE7."
                  />
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="HomePage__Services">
          <div className="HomePage__Services__Text">
            <Fade right>
              <h1>
                Garantimos a <strong>relevância</strong> <br />
                da sua empresa e criamos uma
                <br /> <strong>conexão inseparável</strong>
                <br /> com o seu consumidor.{" "}
              </h1>
              <br />
            </Fade>
            <Fade left>
              <div>
                <Lottie animationData={animaEcommerce} loop={true} />
              </div>
            </Fade>
            <Fade right>
              <p>
                O produto você tem, mas a experiência do seu consumidor nós
                criamos junto com você. Você entra com o produto e nós entramos
                com mais de 10 anos de experiência em e-commerce, gestão de
                resultados e um modelo digital único de atendimento ao
                consumidor.
              </p>
            </Fade>
          </div>
          <div className="HomePage__Services__Icons__Title">
            <h1>
              Conheça nossos <strong>serviços</strong>.
            </h1>
            <p>
              Juntos vamos levar os seus produtos da loja física ao mundo do
              e-commerce
            </p>
            <div className="Divider"></div>
          </div>
          {!isMobile && (
            <Fade left>
              <div className="HomePage__Services__Icons">
                {infosCards.cards.map((item) => (
                  <Cards {...item} isAgency={infosCards.cards.length} />
                ))}
              </div>
            </Fade>
          )}
          {isMobile && (
            <div className="HomePage__Services__Icons">
              <Fade left>
                {infosCards.cards.map((item) => (
                  <Cards {...item} isAgency={infosCards.cards.length} />
                ))}
              </Fade>
            </div>
          )}
        </div>
        <div className="HomePage__Email">
          <Fade right>
            <div className="HomePage__Email__Title">
              <h1>
                Como podemos <strong>ajudar</strong>?
              </h1>
              <p>
                Envie uma mensagem preenchendo os campos abaixo e em breve
                entraremos em contato.
              </p>
            </div>
            <div className="Divider"></div>
          </Fade>
          <Fade left>
            <div className="HomePage__Email__Form">
              <SenderEmail />
            </div>
          </Fade>
        </div>
      </div>
    </Styled>
  );
}
