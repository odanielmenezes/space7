import { useEffect, useCallback, useState } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Styled from "./style";
import { Link } from "react-router-dom";
import animaEcommerce from "../../assets/eCommerce.json";
import Lottie from "lottie-react";
import RocketAnima from "../../assets/rocket-image.png";
import Balance from "react-wrap-balancer";
import {
  BsShopWindow,
  BsCartCheck,
  BsLayoutThreeColumns,
  Bs1Circle,
  BsAndroid,
  BsGoogle,
  BsInstagram,
  BsChatSquareDots,
  BsHeadset,
  BsChatDots
} from "react-icons/bs";

export function Home() {
  const frase = "Tenha um parceiro para sua transformação digital.";
  const [letras, setLetras] = useState([frase.split("")]);
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
    animation();
  }, [letras]);

  return (
    <Styled>
      <div className="HomePage">
        {isMobile && (
          <Link to="/contato">
            <div className="HomePage__ButtonContact">
              <BsChatDots />
            </div>
          </Link>
        )}
        <div className="HomePage__Animation">
          <div className="Rocket">
            {/* <Lottie animationData={RocketAnima} /> */}
            <img src={RocketAnima} alt="" />
            <Fade left>
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
                <button>FALE CONOSCO</button>
              </div>
            </Flip>
          </div>
          <div className="HomePage__Services__Icons__Title">
            <h1>CONHEÇA NOSSOS SERVIÇOS</h1>
          </div>
          {isMobile && (
            <div className="HomePage__Services__Icons">
              <Fade left>
                <div className="HomePage__Services__Icons__Icon">
                  <BsShopWindow />
                  <h1>
                    Criação / Migração do <br />
                    E-commerce
                  </h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para pree
                      nchimento do card
                    </Balance>
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="HomePage__Services__Icons__Icon">
                  <BsCartCheck />
                  <h1>Merketplaces</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="HomePage__Services__Icons__Icon">
                  <BsLayoutThreeColumns />
                  <h1>Design/Layout</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="HomePage__Services__Icons__Icon">
                  <Bs1Circle />
                  <h1>SEO</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="HomePage__Services__Icons__Icon">
                  <BsAndroid />
                  <h1>CRO</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="HomePage__Services__Icons__Icon">
                  <BsGoogle />
                  <h1> ADS</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="HomePage__Services__Icons__Icon">
                  <BsInstagram />
                  <h1>Mídias Sociais</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="HomePage__Services__Icons__Icon">
                  <BsChatSquareDots />
                  <h1>Mentoria</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="HomePage__Services__Icons__Icon">
                  <BsHeadset />
                  <h1>Suporte Técnico</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
              </Fade>
            </div>
          )}
          {!isMobile && (
            <Fade left>
              <div className="HomePage__Services__Icons">
                <div className="HomePage__Services__Icons__Icon">
                  <BsShopWindow />
                  <h1>
                    Criação / Migração do <br />
                    E-commerce
                  </h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
                <div className="HomePage__Services__Icons__Icon">
                  <BsCartCheck />
                  <h1>Merketplaces</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
                <div className="HomePage__Services__Icons__Icon">
                  <BsLayoutThreeColumns />
                  <h1>Design/Layout</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
                <div className="HomePage__Services__Icons__Icon">
                  <Bs1Circle />
                  <h1>SEO</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
                <div className="HomePage__Services__Icons__Icon">
                  <BsAndroid />
                  <h1>CRO</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
                <div className="HomePage__Services__Icons__Icon">
                  <BsGoogle />
                  <h1> ADS</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
                <div className="HomePage__Services__Icons__Icon">
                  <BsInstagram />
                  <h1>Mídias Sociais</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
                <div className="HomePage__Services__Icons__Icon">
                  <BsChatSquareDots />
                  <h1>Mentoria</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
                <div className="HomePage__Services__Icons__Icon">
                  <BsHeadset />
                  <h1>Suporte Técnico</h1>
                  <p>
                    <Balance>
                      Breve descrição do serviço. Texto de exemplo para
                      preenchimento do card
                    </Balance>
                  </p>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </div>
    </Styled>
  );
}
