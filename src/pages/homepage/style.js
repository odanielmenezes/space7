import styled from "styled-components";
import CloudImage from "../../assets/cloud.svg";
import CloudImageMobile from "../../assets/cloud-mobile.svg";
import fundoTitleServices from "../../assets/adss.jpg"

const style_footer = styled.div`
  .HomePage {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: -100px;
    overflow-x: hidden;

    .HomePage__Main {
      animation: opaciter 0.8s ease-in-out;
    }
    .HomePage__Animation {
      background-image: url(${CloudImage});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 1;
      height: 1080px;
      max-width: 1920px;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .Rocket {
        height: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        .HomePage__Content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
          .HomePage__SmallText {
            border-radius: 8px;
            box-shadow: 0px 0px 4px 4px rgba(155, 155, 155, 0.2);
            padding: 20px 50px;
            font-size: 1.3em;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: 10;
            animation: opaciter 1s ease-in-out;
            line-height: 20px;
          }
          button {
            padding: 15px 100px;
            font-size: 1.2em;
            color: #fff;
            background-color: #dd4035;
            border-radius: 10px;
            transition: 0.3s;
            border: 0;
            cursor: pointer;
            animation: opaciter 1s ease-in-out;

            :hover {
              transform: scale(1.1);
              transition: .3s;
            }
          }
          small {
            font-size: 1em;
          }
          p {
            text-align: center;
            width: 300px;
          }
          .letreiro {
            text-shadow: 0px 0px 10px rgba(155, 155, 155, 0.8);
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            letter-spacing: -3px;
            text-transform: uppercase;
            font-family: "Audiowide", cursive;
            text-align: center;
            line-height: 35px;
            font-size: 4em;
            font-weight: 400;
            animation: opaciter 1s ease-in-out;
            span {
              .frase01 {
                display: flex;
                justify-content: center;
                margin: 0 auto;
              }
              .frase02 {
                display: flex;
                justify-content: center;
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
      padding: 200px 0;
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
          line-height: 25px;
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
          button {
            cursor: pointer;
            border-radius: 8px;
            background: transparent;
            border: 2px solid #dd4035;
            padding: 20px 100px;
            color: #fff;
            font-size: 1.1em;
            transition: .3s;

            :hover {
              transform: scale(1.1);
              transition: .3s;
              box-shadow: 4px 4px 4px rgba(155, 155, 155, 0.8);
            }
          }
        }
      }
      .HomePage__Services__Icons {
        margin: 100px 0 50px 0;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;

        .HomePage__Services__Icons__Icon {
          position: relative;
          width: 400px;
          height: 200px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: 0.5s;
          background-position: center;
          background-size: cover;
          box-shadow: 0px 0px 10px rgba(155, 155, 155, 0.7);
          h1 {
            width: 100%;
            font-size: 1em;
            white-space: nowrap;
            flex-wrap: nowrap;
            text-align: center;
          }
          :hover {
            transform: scale(1.1);
            transition: 0.3s;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
          }
          svg {
            color: #111c3f;
            font-size: 2.5em;
          }
          p {
            text-align: center;
          }
        }
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
  @media (max-width: 600px) {
    .HomePage {
      width: 100vw;
      margin-top: -200px;
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
          width: 1620px;
          margin-top: 80px;
        }
        .Rocket {
          width: 100vw;
          .HomePage__Content {
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
              animation: opacitor 1s ease-in-out;
            }
            small {
            }
            p {
            }
            .letreiro {
              height: 20vh;
              font-size: 2em;
              line-height: 40px;
              margin-bottom: -20px;
              letter-spacing: -2px;
              span {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .frase01 {
                  margin-bottom: -40px;
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
          height: 80vh;
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

          .HomePage__Services__Icons__Icon {
            width: 90vw;
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
          background-color: #2C954A;
          box-shadow: 0px 0px 10px #111c3f;
          svg {
            color: #FFF;
            font-size: 2em;
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
