import Styled from "./style";
import { SenderEmail } from "../../components/form-email";
import { Header } from "../../components/header";
import Lottie from "lottie-react";
import ImagePerson from "../../assets/homem-bonito-apontando-para-o-lateral.png";
import AnimationLottie from "../../assets/rocket.json";
import RocketAnima from "../../assets/new-rocket.json";

export function Home() {
  return (
    <Styled>
      <Header />
      <div className="HomePage">
        <main className="HomePage__Main">
        </main>
        <div className="HomePage__Animation">
          <Lottie animationData={AnimationLottie} />
          <div className="Rocket">
            <Lottie animationData={RocketAnima} />
          </div>
          <div className="HomePage__Content">
            <h1>
              TENHA UM
              <br /> PARCEIRO
              <br /> PARA SUA
              <br /> TRANSFORMAÇÃO
              <br />
              <strong>DIGITAL</strong>.
            </h1>
            {/* '            <p>
              Juntos vamos levar os seus produtos da loja física ao mundo do
              <strong> e-commerce</strong> (novo canal de vendas)
            </p>' */}
          </div>
          <div className="HomePage__Text"></div>
        </div>
        <div className="HomePage__Services"></div>
      </div>
    </Styled>
  );
}
