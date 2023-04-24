import Styled from "./style";
import { SenderEmail } from "../../components/form-email";
import { Header } from "../../components/header";
import { useLottie } from "lottie-react";
import AnimationLottie from "../../assets/9704-ecommerce.json";

export function Home() {
  const options = {
    animationData: AnimationLottie,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <Styled>
      <Header />
      <div className="HomePage">
        <main className="HomePage__Main">
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
        </main>
        <div className="HomePage__Animation">{View}</div>
      </div>
    </Styled>
  );
}
