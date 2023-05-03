import { useEffect, useCallback, useState } from "react";
import Styled from "./style";
import { Header } from "../../components/header";
import Lottie from "lottie-react";
import AnimationLottie from "../../assets/rocket.json";
import RocketAnima from "../../assets/rocket-image.png";
import Balance from "react-wrap-balancer";

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
          // setTimeout(() => {
          //   var escondeLetras = setInterval(() => {
          //     setFraseCompleta(fraseCompleta.pop());
          //     decCont--;

          //     if (decCont === 0) {
          //       clearInterval(escondeLetras);
          //       decCont = frase.split("").length - 1;
          //       cont = 0;
          //       animation();
          //     }
          //   }, 100);
          // }, 2000);
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
      <Header />
      <div className="HomePage">
        <main className="HomePage__Main"></main>
        <div className="HomePage__Animation">
          <div className="AnimationLottie">
            <Lottie animationData={AnimationLottie} loop={false} />
          </div>
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
                <small>
                  <Balance>
                  Juntos vamos levar os seus produtos da loja física ao mundo do
                  e-commerce
                  </Balance>
                </small>
              <button>SAIBA MAIS</button>
            </div>
          </div>
          <div className="HomePage__Text"></div>
        </div>
        <div className="HomePage__Services"></div>
      </div>
    </Styled>
  );
}
