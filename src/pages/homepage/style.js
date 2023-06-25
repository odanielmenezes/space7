import styled from "styled-components";
import CloudImage from "../../assets/cloud.svg";
import BackgroundCards from "../../assets/background-cards.png";
import fundoTitleServices from "../../assets/adss.jpg";

const style_footer = styled.div`
  .HomePage {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: -100px;
    overflow-x: hidden;
    background-color: #fff;
    .SenderEmail__Text {
      display: none;
      p {
        color: #000;
      }
    }
    .RedesSociais {
      font-size: 1.5em;
      color: rgba(0, 0, 0, 0.8) !important;
      margin: 50px 0 30px 0 !important;
      .line01 {
        a {
          color: rgba(0, 0, 0, 0.8) !important;
          text-decoration: none;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        small {
          text-decoration: underline;
          display: flex;
          align-items: center;
          gap: 5px;

          svg {
            font-size: 18px;
          }
        }
      }
      .Divider {
        width: 1px !important;
        height: 20px !important;
        border: 0 !important;
        margin: 0 5px 0 5px !important;
        border-right: 1px solid rgba(0, 0, 0, 0.19) !important;
      }
      .Local {
        display: none !important;
        margin: 30px 0 30px 0;
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
      }
      .Redes {
        margin: 40px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        a {
          display: flex;
          align-items: center;
          padding: 0;
          margin: 0;
          text-decoration: none;
          color: rgba(0, 0, 0, 0.8);
        }
        svg {
          cursor: pointer;
          font-size: 28px;

          :hover {
            color: #ef342b;
          }
        }
      }
    }
    .alert {
    color: #000 !important;
  }
    .SenderEmail__MainForm {
          .inputsFuncionários {
            div {
              small {
                color: #000 !important;
              }
            }
            .checkboxItem {
              .inputsCheckbox {
                label {
                  color: #000;
              }
            }
          }
        }
    }
    .HomePage__Main {
      animation: opaciter 0.8s ease-in-out;
    }
    .HomePage__Animation {
      margin-top: 100px;
      background-image: url(${CloudImage});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 0;
      max-width: 1920px;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .Rocket {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: auto;

        .AnimationLottie {
          top: 0;
          position: absolute;
          div {
            svg {
              opacity: 0 !important;
            }
          }
        }
        .HomePage__Content {
          height: 80vh;
          padding: 0 0 0 200px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 80px;
          .HomePage__SmallText {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 20px;
            font-size: 1.3em;
            z-index: 10;
            animation: opaciter 1s ease-in-out;
            line-height: 20px;
            margin: -20px 0;
          }
          small {
            font-size: 1em;
          }
          p {
            text-align: center;
            width: 300px;
          }
          .letreiro {
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: start;
            width: 100vw;
            letter-spacing: -3px;
            text-transform: uppercase;
            font-family: "Audiowide", cursive;
            text-align: center;
            line-height: 35px;
            font-weight: 400;
            margin-top: -100px;
            animation: opaciter 1s ease-in-out;
            span {
              .frase01 {
                letter-spacing: 0px;
                font-size: 2em;
                display: flex;
                justify-content: start;
                margin: -20px auto;
              }
              .frase02 {
                font-size: 4em;
                display: flex;
                justify-content: start;
                margin: 0 auto;
                color: #dd4035;
              }
            }
            .space {
              margin: 0 5px;
            }
            .cursor {
              width: 2px;
              height: 40px;
              margin: 0 5px;
              background-color: #dd4035;
            }
            .cursorcursor-none {
              opacity: 0;
              margin: 0 5px;

              width: 2px;
              height: 30px;
              background-color: #fff;
            }
          }
        }
        img {
          position: absolute;
          top: 70px;
          width: 150px;
          animation: flutua 6s ease-in;
          margin-left: -2500px;
          position: absolute;
          transform: rotate(90deg);
          opacity: 0;

          @keyframes flutua {
            100% {
              opacity: 0;
              margin-left: 3000px;
            }
            50% {
              opacity: 1;
            }
          }
          /* @keyframes flutua {
            100% {
              margin-top: -600px;
              margin-left: 3000px;
              transform: rotate(100deg);
            }
            50% {
              transform: rotate(60deg);
              margin-top: 200px;
            }
          } */
        }
      }
    }
    .HomePage__Services {
      color: #000;
      width: 100vw;
      height: auto;
      padding: 80px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .HomePage__Services__Text {
        margin: 0 auto;
        width: 1250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        word-spacing: 5px;
        h1 {
          text-align: center;
          line-height: 40px;
          font-size: 3em;
          margin: 0;
        }
        strong {
          font-size: 1.2em;
          color: #dd4035;

          &:nth-child(1) {
          }
        }
        p {
          margin: 10px 0;
          height: 100%;
          color: #fff;
          padding: 60px;
          text-align: center;
          line-height: 33px;
          font-size: 1.8em;
          color: #111c3f;
        }
      }
      .HomePage__Services__Title {
        margin: 100px 0;
        background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.9)
          ),
          url(${fundoTitleServices});
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 800px;
        width: 100vw;

        h1 {
          text-align: center;
          width: 800px;
          text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.8);
          color: #fff;
          font-size: 3em;
          line-height: 80px;
          strong {
            text-shadow: 0px 0px 6px #dd4035;
            font-size: 1.5em;
            color: #dd4035;
          }
        }
        .HomePage__Services__Title__Button {
        }
      }
      .HomePage__Services__Icons {
        margin: 100px 0 50px 0;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;
      }
    }
    .HomePage__Services__Icons__Title {
      h1 {
        font-size: 3em;

        strong {
          color: #dd4035;
        }
      }
      .Divider {
        width: 100%;
        height: auto;
        border: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
    .HomePage__Email {
      display: flex;
      flex-direction: column;
      align-items: center;
      .HomePage__Email__Title {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #000;
        h1 {
          font-size: 3em;

          strong {
            color: #dd4035;
          }
        }
        p {
          font-size: 1.2em;
        }
      }
      .Divider {
        width: 100%;
        height: 1px;
        border: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 50px;
      }
    }
    @keyframes opaciter {
      from {
        opacity: 0;
        margin-bottom: -30px;
        transition: 0.3s;
      }
      to {
        opacity: 1;
        transition: 0.3s;
      }
    }
  }
  @media (max-width: 1366px) {
    .letreiro {
      margin-top: 15px !important;
    }
  }
  @media (max-width: 960px) {
    .HomePage {
      min-height: 100vh;
      flex-direction: column;
      .animation-geral {
        position: fixed;
        width: 2920px;
        height: 100vh;
        top: 0;
      }
      .HomePage__Main {
        font-size: 0.5em;
        .HomePage__Content {
          h1 {
            text-align: center;
            line-height: 30px;
          }
        }
      }
      .HomePage__Animation {
        width: 100vw;
        margin: 0;
        .AnimationLottie {
          width: 1920px;
          height: 100%;
          margin-top: 80px;
        }
        .Rocket {
          margin-top: -280px;

          width: 100vw;
          .HomePage__Content {
            justify-content: center;
            align-items: center;
            padding: 0;
            width: 100vw;
            .HomePage__SmallText {
              background-color: rgba(0, 0, 0, 0.3);
              max-width: 90vw !important;
              border-radius: 8px;
              box-shadow: none;
              padding: 20px 50px;
              font-size: 1em;
              width: 100vw !important;
              transition: 1s;
              line-height: 16px;
              animation: opacitor 1s ease-in-out;
            }
            h2 {
              strong {
              }
            }
            button {
              width: 300px;
            }
            small {
            }
            p {
            }
            .letreiro {
              height: 20vh;
              font-size: 0.62em;
              line-height: 40px;
              margin-bottom: -20px;
              letter-spacing: -2px;
              span {
                width: 100vw;
                margin: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .frase01 {
                  line-height: 23px;
                  margin: 0 0 -30px 0;
                }
                .frase02 {
                  display: contents !important;
                }
              }
              .space {
              }
              .cursor {
              }
              .cursorcursor-none {
              }
            }
            small {
              text-align: center;
              margin: -20px 0 0 0;
            }
          }
          img {
            margin-top: 10px;
            transform: rotate(90deg) !important;
            width: 120px;
            animation: flutua 8s ease-in-out;
          }
        }
      }
      .HomePage__Services {
        .HomePage__Services__Text {
          margin: 0;
          width: 100vw !important;
          h1 {
            width: 85%;
            font-size: 2em;
          }
          strong {
            font-size: 1.8em;
          }
          p {
            width: 95vw;
            font-size: 1.5em;
            text-align: center;
          }
        }
        .HomePage__Services__Title {
          width: 100vw;
          height: auto;
          padding: 200px;
          gap: 100px;
          h1 {
            width: 90vw;
            font-size: 1.8em;
            line-height: 50px;
          }
        }
        .HomePage__Services__Icons__Title {
          h1 {
            font-size: 1.5em;
          }
        }
        .HomePage__Services__Icons {
          grid-template-columns: 1fr;
          .Icon {
            top: 10px !important;
            left: 50% !important;
            transform: translateX(-50%) translateY(-50%);
          }
        }
      }
      .HomePage__ButtonContact {
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2c954a;
        box-shadow: 0px 0px 10px #111c3f;
        svg {
          color: #fff;
          font-size: 2em;
        }
      }
      .HomePage__Email {
        .Divider {
          display: none;
        }
        .HomePage__Email__Title {
          h1 {
            font-size: 1.5em;
            strong {
              color: #dd4035;
            }
          }
          p {
            font-size: 1em;
            text-align: center;
            width: 90vw;
          }
        }
        .Divider {
          width: 80%;
          height: 1px;
          border: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          margin: 50px 0 -50px 0;
        }
      }
    }
    @keyframes flutua {
      100% {
        margin-left: 1000px;
      }
      50% {
      }
    }
    @keyframes opacitor {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
export default style_footer;
