import styled from "styled-components";
import CloudImage from "../../assets/cloud.svg";

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

    .HomePage__Animation {
      margin-top: 70px;
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


        .HomePage__Content {
          height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 80px;
          .HomePage__SmallText {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 20px;
            font-size: 1.3em;
            z-index: 10;
            animation: opaciter 1s ease-in-out;
            line-height: 20px !important;
            margin: -20px 0;

            strong {
              color: #dd4035;
            }
          }
          .letreiro {
            text-transform: uppercase;
            font-family: "Audiowide", cursive;
            line-height: 35px;
            span {
              .frase01 {
                margin-bottom: -60px;
                display: flex;
                line-height: 120%;
                letter-spacing: 1px;
                font-size: 3em;
                text-align: center !important;
                text-shadow: 0px 0px 8px #000;

                strong {
                  color: #dd4035;
                  margin: 0 14px !important;
                }
              }
            }
          }
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

    .HomePage__Email {

      .HomePage__Email__Form {
        margin-bottom: 100px;
      }
    }
  }
  @media (max-width: 1366px) {
    .letreiro {
      margin-top: 15px !important;
      .frase01 {
        font-size: 2.5em !important;
      }
    }
  }
  @media (max-width: 960px) {
    .HomePage {
      min-height: 100vh;
      flex-direction: column;
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
                  font-size: 3.4em !important;
                  line-height: 36px;
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90vw;
          p {
            text-align: center;
          }
          h1 {
            font-size: 1.5em;

            strong {
              color: #dd4035;
            }
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
