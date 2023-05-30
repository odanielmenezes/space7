import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import infosCards from "./variables.json";
import Styled from "./style";
import { SenderEmail } from "../../components/form-email";
import animaEcommerce from "../../assets/eCommerce.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import RocketAnima from "../../assets/36418-cecil-portfolio-background.json";
import Balance from "react-wrap-balancer";
import { BtnQueroComecar } from "../../components/buttons/button-quero-comecar";
import migrationSvg from "../../assets/migracao-cards.svg";
import marketplaceSvg from "../../assets/marketplace-cards.svg";
import designSvg from "../../assets/design-cards.svg";
import googleAds from "../../assets/googleads.png";
import croSvg from "../../assets/cro-cards.svg";
import seoSvg from "../../assets/seo-cards.svg";
import instaSvg from "../../assets/insta-cards.png";
import mentoriaSvg from "../../assets/mentoria-cards.svg";
import supportSvg from "../../assets/support-cards.svg";

export function Home() {
  const frase = `Tenha um parceiro para sua transformação digital.`;
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

  const icons = [
    migrationSvg,
    marketplaceSvg,
    designSvg,
    croSvg,
    seoSvg,
    googleAds,
    instaSvg,
    mentoriaSvg,
    supportSvg,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const card = (props) => {
    const { title, description, id } = props;
    return (
      <div className="HomePage__Services__Icons__Icon">
        <div className="Icon"><img src={icons[id - 1]} alt="" /></div>
        <h1>{title}</h1>
        <p>
          <Balance>{description}</Balance>
        </p>
        <Link to={title.includes("Mentoria") ? `/mentoria` : `/servicos`}>
          <button>conhecer</button>
        </Link>
      </div>
    );
  };

  function animation() {
    var mostrarLetras = setInterval(() => {
      if (letras.length > 0) {
        if (cont < 9) {
          setFraseCompleta1((fraseCompleta1 += letras[0][cont]))
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
        cont++
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
                      <Balance>{fraseCompleta1}{isMobile && <br />} {fraseCompleta}</Balance>
                    </span>
                    <br />
                    <span className="frase02">
                      <Balance>{fraseCompleta2}</Balance>
                    </span>
                    <span> {ponto}</span>
                  </span>
                </div>
                <small className="HomePage__SmallText">
                  Juntos vamos levar os seus produtos da loja física ao mundo do
                  e-commerce
                </small>
                <BtnQueroComecar name="SAIBA MAIS" link="/servicos" />
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
                resultado e um modelo digital único de atendimento ao consumidor
              </p>
            </Fade>
          </div>
          <div className="HomePage__Services__Title">
            <Flip left>
              <h1>
                Nós somos a {isMobile && <br />}
                <strong>solução</strong> que integra
                <br /> o <strong>seu negócio</strong> físico
                <br /> com uma experiência única de
                {!isMobile && <br />} <strong>e-commerce</strong>
              </h1>
              <div className="HomePage__Services__Title__Button">
                <BtnQueroComecar name="FALE CONOSCO" link="/contato" />
              </div>
            </Flip>
          </div>
          <div className="HomePage__Services__Icons__Title">
            <h1>
              Conheça nossos <strong>serviços</strong>.
            </h1>
            <div className="Divider"></div>
          </div>
          {!isMobile && (
            <Fade left>
              <div className="HomePage__Services__Icons">
                {infosCards.cards.map((item) => card(item))}
              </div>
            </Fade>
          )}
          {isMobile && (
            <div className="HomePage__Services__Icons">
              <Fade left>{infosCards.cards.map((item) => card(item))}</Fade>
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
