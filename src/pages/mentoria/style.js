import styled from "styled-components";
import ImageCards from "../../assets/background-email.jpg";

const style_footer = styled.div`
  .Mentoria {
    padding: 100px 0;
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 100vw;
    margin-top: 50px;
    .animation-geral {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      z-index: -1;
    }
    .Mentoria__Content {
      width: 90%;
      .Mentoria__Content__Titles {
        text-align: center;
        .Menoria__Lottie {
          width: 400px;
          margin: 0 auto;
        }
        h1 {
          letter-spacing: -3px;
          font-size: 3.4em;
          line-height: 120%;
          strong {
            font-size: 1.3em;
            color: #cf3c32;
          }
          &:nth-child(1) {
            margin: 100px 0 70px 0;
          }
          &:nth-child(6) {
            margin: 200px 0 100px 0;
          }
          &:nth-child(7) {
            margin: 100px 0 130px;
          }
        }
        .Divider {
          border: 0;
          width: 800px;
          height: 1px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin: 50px auto 100px auto;

          &:nth-child(5) {
            margin: 50px auto 80px;
          }
        }
        p {
          padding: 30px 20px;
          font-size: 1.4em;
          margin: 0;
          strong {
            color: #cf3c32;
            font-size: 1.4em;
          }
          &:nth-child(1) {
            line-height: 25px;
          }
        }
      }
    }
    .Mentoria__Table {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      width: 1250px;
      justify-content: center;
      margin: 0 auto;

      .Mentoria__Table__Item {
        margin: 20px auto;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: #fff;
        background-position: center;
        background-size: cover;
        height: 300px;
        align-items: start;
        gap: 20px;
        color: #000;
        border-radius: 5px;

        h2 {
          padding: 0 0 0 30px;
          white-space: nowrap;
          line-height: 22px;
          font-size: 2em;

          strong {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            font-size: 1.5em;
            color: #cf3c32;
          }
        }
        .Divider {
          width: 100%;
          border: 0;
          height: 1px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin: 20px 0 0 0;
        }
        p {
          padding: 0 30px;
          font-size: 1.2em;
        }
        .icon {
          position: absolute;
          top: -40px;
          right: 30px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          box-shadow: 0px 0px 10px #000;

          img {
            filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 1));
            opacity: 0.8;
            color: #cf3c32;
            font-size: 3em !important;
            width: 50%;
          }
        }
      }
      .Mentoria__Table__Item__Button {
        width: 400px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .Mentoria__Table__Text {
        position: relative;
        width: 400px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        .Text {
          h1 {
            p {
              margin: 1px;
              color: #fff;
              width: 300px;
              padding: 20px 0;
              background-color: #cf3c32;
              text-align: center;
              line-height: 1px;

              &:nth-child(2) {
                background-color: #fff;
                color: #000;
              }
            }
          }
        }
      }
    }
    .ButtonQueroComecar {
      margin: 100px 0;
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 1366px) {
    .Mentoria {
      .Mentoria__Table {
        width: 90vw;
        .Mentoria__Table__Item {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .Mentoria {
      overflow: hidden;
      margin-top: -50px;
      .animation-geral {
        position: fixed;
        width: 2920px;
        height: 100vh;
        top: 0;
      }
      .Mentoria__Content {
        .Mentoria__Content__Titles {
          .Menoria__Lottie {
            width: auto;
          }
          h1 {
            display: flex;
            font-size: 1.8em;
            flex-direction: column;
            white-space: nowrap;
          }
          .Divider {
            width: 80vw;
          }

          p {
            font-size: 1.3em;
            line-height: 22px;
          }
        }
      }
      .Mentoria__Table {
        width: 100%;
        grid-template-columns: 1fr;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .Mentoria__Table__Item {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3px;
          width: 100%;
          padding: 0;
          margin: 30px 0;
          h2 {
            padding: 0;
            width: 100%;
            text-align: center;
            font-size: 1.3em;
            white-space: pre-wrap;
            strong {
            }
          }
          .Divider {
            width: 80%;
            margin: 10px auto 0 auto;
          }
          p {
            padding: 0 20px;
            font-size: 1em;
            text-align: center;
          }
          .icon {
            width: 80px;
            height: 80px;
            svg {
              width: 35px;
              font-size: 1em;
            }
          }
        }
        .Mentoria__Table__Item__Button {
          margin: 0;
          width: 90vw;
          white-space: nowrap;
        }
        .Mentoria__Table__Text {
          margin: 0;
          width: 90vw;
          position: relative;
          .Text {
            h1 {
              p {
                &:nth-child(2) {
                }
              }
            }
          }
          svg {
            left: 45%;
            top: 0;
            transform: translateX(-50%) translateY(-50%);
            transform: rotate(90deg);
          }
        }
      }
    }
  }
`;
export default style_footer;
