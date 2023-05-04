import { useEffect, useCallback, useState } from "react";
import Styled from "./style";
import animaEcommerce from "../../assets/eCommerce.json";
import Lottie from "lottie-react";
import AnimationLottie from "../../assets/rocket.json";
import RocketAnima from "../../assets/rocket-image.png";
import Balance from "react-wrap-balancer";
import { BsShopWindow, BsCartCheck, BsLayoutThreeColumns, Bs1Circle, BsAndroid, BsGoogle, BsInstagram, BsChatSquareDots, BsHeadset} from "react-icons/bs"

export function Home() {
  const frase = "Tenha um parceiro para sua transformação digital.";
  const [letras, setLetras] = useState([frase.split("")]);
  let [fraseCompleta, setFraseCompleta] = useState("");
  let [fraseCompleta2, setFraseCompleta2] = useState("");
  let [ponto, setPonto] = useState("");
  const [cursor, setCursor] = useState(false);
  let cont = 0;
  let decCont = frase.split("").length - 1;

  const renderCursor = useCallback(() => {
    setInterval(() => {
      setCursor(true);
    }, 400);
    setInterval(() => {
      setCursor(false);
    }, 800);
  }, []);
  function animation() {
    var mostrarLetras = setInterval(() => {
      if (letras.length > 0) {
        if (cont < 27) {
          setFraseCompleta((fraseCompleta += letras[0][cont]));
        } else {
          setFraseCompleta2((fraseCompleta2 += letras[0][cont]));
          if (cont === letras.length - 1) {
            console.log("asdasd");
            setPonto(letras[letras.length - 1]);
          }
        }
        cont++;
        if (cont === decCont) {
          clearInterval(mostrarLetras);
        }
      }
    }, 90);
  }
  useState(() => {
    renderCursor();
    animation();
  }, [letras]);

  return (
    <Styled>
      <div className="HomePage">
        <div className="HomePage__Animation">
          <div className="Rocket">
            {/* <Lottie animationData={RocketAnima} /> */}
            <img src={RocketAnima} alt="" />
            <div className="HomePage__Content">
              <div className="letreiro">
                <span>
                  <span className="frase01">
                    <Balance>
                      {fraseCompleta}{" "}
                      <div
                        style={{
                          display:
                            fraseCompleta.length < fraseCompleta.length
                              ? "block"
                              : "none",
                        }}
                        id="cursor"
                        className={`cursor${cursor ? "cursor-none" : ""}`}
                      ></div>
                    </Balance>
                  </span>
                  <br />
                  <span className="frase02">
                    <div
                      style={{
                        display:
                          fraseCompleta2.length !== fraseCompleta2.length &&
                          fraseCompleta2.length === 27
                            ? "block"
                            : "none",
                        backgroundColor: "blue",
                      }}
                      id="cursor"
                      className={`cursor${cursor ? "cursor-none" : ""}`}
                    ></div>
                    <Balance>{fraseCompleta2}</Balance>
                  </span>
                  <span> {ponto}</span>
                </span>
              </div>
              <small className="HomePage__SmallText">
                Juntos vamos levar os seus produtos da loja física ao mundo do
                e-commerce
              </small>
              <button>SAIBA MAIS</button>
            </div>
          </div>
        </div>
        <div className="HomePage__Services">
          <div className="HomePage__Services__Text">
            <h1>
              Garantimos a <strong>relevância</strong> <br />
              da sua empresa e criamos uma
              <br /> <strong>conexão inseparável</strong>
              <br /> com o seu consumidor.{" "}
            </h1>
            <br />
            <div>
              <Lottie animationData={animaEcommerce} loop={true} />
            </div>
            <p>
              O produto você tem, mas a experiência do seu consumidor nós
              criamos junto com você. Você entra com o produto e nós entramos
              com mais de 10 anos de experiência em e-commerce, gestão de
              resultado e um modelo digital único de atendimento ao consumidor
            </p>
          </div>
          <div className="HomePage__Services__Title">
            <h1>
              Nós somos a <strong>solução</strong> que integra
              <br /> o <strong>seu negócio</strong> físico
              <br /> com uma experiência única de
              <br /> <strong>e-commerce</strong>
            </h1>
            <div className="HomePage__Services__Title__Button">
              <button>FALE CONOSCO</button>
            </div>
          </div>
          <div className="HomePage__Services__Icons">
            <div className="HomePage__Services__Icons__Icon">
                <BsShopWindow />
              <div className="backgroundCard">
                <h1>Criação / Migração do <br />E-commerce</h1>
              </div>
            </div>
            <div className="HomePage__Services__Icons__Icon">
                <BsCartCheck />
              <div className="backgroundCard">
                <h1>Merketplaces</h1>
              </div>
            </div>
            <div className="HomePage__Services__Icons__Icon">
              <BsLayoutThreeColumns />
              <div className="backgroundCard">
                <h1>Design/Layout</h1>
              </div>
            </div>
            <div className="HomePage__Services__Icons__Icon">
              <Bs1Circle />
              <div className="backgroundCard">
                <h1>SEO</h1>
              </div>
            </div>
            <div className="HomePage__Services__Icons__Icon">
              <BsAndroid />
              <div className="backgroundCard">
                <h1>CRO</h1>
              </div>
            </div>
            <div className="HomePage__Services__Icons__Icon">
              <BsGoogle />
              <div className="backgroundCard">
                <h1> ADS</h1>
              </div>
            </div>
            <div className="HomePage__Services__Icons__Icon">
              <BsInstagram />
              <div className="backgroundCard">
                <h1>Mídias Sociais</h1>
              </div>
            </div>
            <div className="HomePage__Services__Icons__Icon">
              <BsChatSquareDots />
              <div className="backgroundCard">
                <h1>Mentoria</h1>
              </div>
            </div>
            <div className="HomePage__Services__Icons__Icon">
              <BsHeadset />
              <div className="backgroundCard">
                <h1>Suporte Técnico</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
