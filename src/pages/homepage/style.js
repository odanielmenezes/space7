import styled from "styled-components";

const style_footer = styled.div`
  .HomePage {
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;
    margin-top: -100px;
    z-index: -10;
    overflow-x: hidden;

    .HomePage__Main {
      animation: opaciter 0.8s ease-in-out;
    }
    .HomePage__Animation {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      overflow: hidden;

      .Rocket {
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .HomePage__Content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
          h2 {
            text-transform: uppercase;
            font-family: "Audiowide", cursive;
            text-align: center;
            line-height: 120%;
            font-size: 4em;
            letter-spacing: 10;
            font-weight: 400;
            margin: 30px 0 0 0;
            animation: slider 1s ease-in-out;
            strong {
              color: #dd4035;
            }

            @keyframes slider {
              from {
                opacity: 0;
                margin-left: -100px;
              }
              to {
                opacity: 1;
              }
            }
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
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            width: auto;
            letter-spacing: -3px;
            text-transform: uppercase;
            font-family: "Audiowide", cursive;
            text-align: center;
            line-height: 35px;
            font-size: 4em;
            font-weight: 400;
            margin-top: 170px;
            animation: slider 1s ease-in-out;
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
        position: absolute;
        top: 200px;
        img {
          width: 150px;
          animation: flutua 6s ease-in;
          margin-left: -2500px;
          position: absolute;
          transform: rotate(90deg);
          margin-top: 130px;

          /* @keyframes flutua {
            100% {
              margin-left: 3000px;
            }
            50% {
            }
          } */
          @keyframes flutua {
            100% {
              margin-top: -600px;
              margin-left: 3000px;
              transform: rotate(100deg);
            }
            50% {
              transform: rotate(60deg);
              margin-top: 200px;
            }
          }
        }
      }
    }
    .HomePage__Services {
      height: 100vh;
      width: 100vw;
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
            h2 {
              strong {
              }
            }
            button {
            }
            small {
            }
            p {
            }
            .letreiro {
              height: 20vh;
              font-size: 2em;
              line-height: 40px;
              margin-top: 100px;
              letter-spacing: -2px;
              span {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .frase01{
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
            small{
              text-align: center;
              margin: -20px 0 0 0;
            }
          }
          img {
            margin-top: 230px;
            transform: rotate(90deg) !important;
            width: 120px;
            animation: flutua 8s ease-in-out;
          }
          @keyframes flutua {
            100% {
              margin-left: 1000px;
            }
            50% {

            }
          }
        }
      }
    }
  }
`;
export default style_footer;
