import styled from "styled-components";
import CloudImage from "../../assets/cloud.svg";
import CloudImageMobile from "../../assets/cloud-mobile.svg";
import fundoTitleServices from "../../assets/ads.jpg";
import imageMarketplace from "../../assets/marketplace.jpg";
import imageCommerce from "../../assets/ecommerce-bg.jpg";
import imageDesign from "../../assets/design.jpg";
import imageAds from "../../assets/ads.jpg";
import imageCro from "../../assets/CRO.jpg";
import imageSEO from "../../assets/SEO.jpg";
import imageMentoria from "../../assets/Mentoria.jpg";
import imageSociais from "../../assets/sociais.jpg";
import imageSuport from "../../assets/suport.jpg";

const style_footer = styled.div`
  .HomePage {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: -100px;
    z-index: -10;
    overflow-x: hidden;

    .HomePage__Main {
      animation: opaciter 0.8s ease-in-out;
    }
    .HomePage__Animation {
      background-image: url(${CloudImage});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
      height: 1080px;
      max-width: 1920px;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .Rocket {
        height: 400px;
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
              transition: all.3s;
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
          letter-spacing: 1px;
          height: 100%;
          color: #fff;
          padding: 60px;
          text-align: center;
          line-height: 25px;
          font-size: 1.5em;
          color: #111c3f;
        }
      }
      .HomePage__Services__Title {
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
            transition: all.3s;

            :hover {
              transform: scale(1.1);
              transition: all.3s;
              box-shadow: 4px 4px 4px rgba(155, 155, 155, 0.8);
            }
          }
        }
      }
      .HomePage__Services__Icons {
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;
        padding: 100px 0;
        .HomePage__Services__Icons__Icon {
          position: relative;
          width: 400px;
          height: 200px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s;
          &:nth-child(1) {
            position: relative;
            transition: background-image 0.5s linear;
            color: #fff;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imageCommerce});
            background-position: center;
            background-size: cover;
            transition: 0.3s;
            z-index: 1;
            :before {
              position: absolute;
              content: "";
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              );
              z-index: -1;
              transition: opacity 0.3s linear;
              opacity: 0;
            }
            :hover:before {
              opacity: 1;
              svg {
                text-shadow: 0px 0px 6px #000;
              }
              text-shadow: 0px 0px 6px #000;
              background: linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0),
                  rgba(0, 0, 0, 0)
                ),
                url(${imageCommerce});
              background-position: center;
              background-size: cover;
            }
          }
          &:nth-child(2) {
            color: #fff;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imageMarketplace});
            background-position: center;
            background-size: cover;
            transition: 0.3s;
            transition: 0.3s;
            z-index: 1;
            :before {
              position: absolute;
              content: "";
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              );
              z-index: -1;
              transition: opacity 0.3s linear;
              opacity: 0;
            }
            :hover:before {
              opacity: 1;
              svg {
                text-shadow: 0px 0px 6px #000;
              }
              text-shadow: 0px 0px 6px #000;
              background: linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0),
                  rgba(0, 0, 0, 0)
                ),
                url(${imageMarketplace});
              background-position: center;
              background-size: cover;
            }
          }
          &:nth-child(3) {
            color: #fff;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imageDesign});
            background-position: center;
            background-size: cover;
            transition: 0.3s;
            transition: 0.3s;
            z-index: 1;
            :before {
              position: absolute;
              content: "";
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              );
              z-index: -1;
              transition: opacity 0.3s linear;
              opacity: 0;
            }
            :hover:before {
              opacity: 1;
              svg {
                text-shadow: 0px 0px 6px #000;
              }
              text-shadow: 0px 0px 6px #000;
              background: linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0),
                  rgba(0, 0, 0, 0)
                ),
                url(${imageDesign});
              background-position: center;
              background-size: cover;
            }
          }
          &:nth-child(4) {
            color: #fff;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imageSEO});
            background-position: center;
            background-size: cover;
            transition: 0.3s;
            z-index: 1;
            :before {
              position: absolute;
              content: "";
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              );
              z-index: -1;
              transition: opacity 0.3s linear;
              opacity: 0;
            }
            :hover:before {
              opacity: 1;
              svg {
                text-shadow: 0px 0px 6px #000;
              }
              text-shadow: 0px 0px 6px #000;
              background: linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0),
                  rgba(0, 0, 0, 0)
                ),
                url(${imageSEO});
              background-position: center;
              background-size: cover;
            }
          }
          &:nth-child(5) {
            color: #fff;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imageCro});
            background-position: center;
            background-size: cover;
            transition: 0.3s;
            z-index: 1;
            :before {
              position: absolute;
              content: "";
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              );
              z-index: -1;
              transition: opacity 0.3s linear;
              opacity: 0;
            }
            :hover:before {
              opacity: 1;
              svg {
                text-shadow: 0px 0px 6px #000;
              }
              text-shadow: 0px 0px 6px #000;
              background: linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0),
                  rgba(0, 0, 0, 0)
                ),
                url(${imageCro});
              background-position: center;
              background-size: cover;
            }
          }
          &:nth-child(6) {
            color: #fff;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imageAds});
            background-position: center;
            background-size: cover;
            transition: 0.3s;
            z-index: 1;
            :before {
              position: absolute;
              content: "";
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              );
              z-index: -1;
              transition: opacity 0.3s linear;
              opacity: 0;
            }
            :hover:before {
              opacity: 1;
              svg {
                text-shadow: 0px 0px 6px #000;
              }
              text-shadow: 0px 0px 6px #000;
              background: linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0),
                  rgba(0, 0, 0, 0)
                ),
                url(${imageAds});
              background-position: center;
              background-size: cover;
            }
          }
          &:nth-child(7) {
            color: #fff;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imageSociais});
            background-position: center;
            background-size: cover;
            transition: 0.3s;
            z-index: 1;
            :before {
              position: absolute;
              content: "";
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              );
              z-index: -1;
              transition: opacity 0.3s linear;
              opacity: 0;
            }
            :hover:before {
              opacity: 1;
              svg {
                text-shadow: 0px 0px 6px #000;
              }
              text-shadow: 0px 0px 6px #000;
              background: linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0),
                  rgba(0, 0, 0, 0)
                ),
                url(${imageSociais});
              background-position: center;
              background-size: cover;
            }
          }
          &:nth-child(8) {
            color: #fff;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imageMentoria});
            background-position: center;
            background-size: cover;
            transition: 0.3s;
            z-index: 1;
            :before {
              position: absolute;
              content: "";
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              );
              z-index: -1;
              transition: opacity 0.3s linear;
              opacity: 0;
            }
            :hover:before {
              opacity: 1;
              svg {
                text-shadow: 0px 0px 6px #000;
              }
              text-shadow: 0px 0px 6px #000;
              background: linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0),
                  rgba(0, 0, 0, 0)
                ),
                url(${imageMentoria});
              background-position: center;
              background-size: cover;
            }
          }
          &:nth-child(9) {
            color: #fff;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imageSuport});
            background-position: center;
            background-size: cover;
            transition: 0.3s;
            z-index: 1;
            :before {
              position: absolute;
              content: "";
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              );
              z-index: -1;
              transition: opacity 0.3s linear;
              opacity: 0;
            }
            :hover:before {
              opacity: 1;
              svg {
                text-shadow: 0px 0px 6px #000;
              }
              text-shadow: 0px 0px 6px #000;
              background: linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0),
                  rgba(0, 0, 0, 0)
                ),
                url(${imageSuport});
              background-position: center;
              background-size: cover;
            }
          }
          :hover {
            transform: scale(1.1);
            transition: 0.3s;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
          }
          .backgroundCard {
            width: 100%;
            position: absolute;
            left: 50%;
            transition: 0.3s;
            top: 55%;
            transform: translateX(-50%) translateY(-50%);

            h1 {
              text-align: center;
              width: 100%;
              font-size: 1.4em;
            }
          }
          svg {
            margin-top: -100px;
            font-size: 3em;
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
      background-position: left;
      background-size: cover;
      background-image: url(${CloudImageMobile});
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
        margin-top: -70px;
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
              margin-top: 240px;
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
