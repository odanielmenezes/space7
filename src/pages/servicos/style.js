import styled from "styled-components";
import fundoItem from "../../assets/Hexagon.svg";

const style_footer = styled.div`
  .Servicos {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 200px;

    .animation-geral {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      z-index: -1;
    }

    .Servicos__Content {
      .Servicos__Content__Texts {
        text-align: center;
        margin: 0 0 100px 0;
        .Divider {
          width: 800px;
          height: 1px;
          border: 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin: -30px auto 100px;
        }
        h1 {
          letter-spacing: -2px;
          font-size: 3em;
          line-height: 120%;
          strong {
            font-size: 1.8em;
            color: #cf3c32;
          }
        }
        h2 {
          margin-top: -15px;
          margin-bottom: 100px;
          font-size: 2em;
        }
        p {
          font-size: 1.6em;
          line-height: 24px;

          strong {
            color: #cf3c32;
            font-size: 1.3em;
          }
        }
      }
      h1 {
        letter-spacing: -1px;
        text-align: center;
        font-size: 2em;
      }
      .Servicos__MainServicos {
        width: 80vw;
        margin: 50px auto;
        .Servicos__Items {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 50px 0;
          margin: 0 auto;
          .Servicos__Item_Btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .HomePage__Services__Icons__Icon {
            margin: 0 auto;
            height: 466px;
            .div_title {
              width: 100%;
              position: absolute;
              top: 60px;
              display: flex;
              justify-content: center;
              h1 {
                height: 50px;
                line-height: 120%;
                width: 90%;
                font-size: 1.5em;
                flex-wrap: nowrap;
                color: #000;
                text-align: center;
              }
            }
            .Icon {
              width: 80px;
              height: 80px;
              background-color: #fff;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
              img {
                width: 50px;
                height: 50px;
                color: #111c3f;
                font-size: 23px;
              }
            }
            .content-card {
              position: absolute;
              top: 134px;
              display: flex;
              flex-direction: column;
              justify-content: start;
              align-items: center;
              width: 90%;
              ul {
                margin: 30px 0 0 0;
                width: 90%;
                li {
                  text-align: start;
                  width: 200px;
                  color: rgba(0, 0, 0, 0.8);
                  line-height: 18px;
                  margin: 5px 0;
                }
              }
              p {
                width: 90%;
                line-height: 18px;
                text-align: start;
                font-size: 1.1em;
              }
            }
            button {
              display: none;
              position: absolute;
              bottom: 40px;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
              cursor: pointer;
              margin: 15px 0 0 0;
              padding: 8px 50px;
              border: 0;
              border-radius: 4px;
              background-color: #dd4035;
              text-transform: uppercase;
              transition: 0.3s;
            }
            :hover {
                transform: scale(1.1);
                transition: 0.3s;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
              }
          }
        }
        .ButtonQueroComecar {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 50px !important;
          margin: 0 auto;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .Servicos {
      width: 100vw;
      overflow: hidden;
      margin-top: 120px;
      .animation-geral {
        position: fixed;
        width: 2920px;
        height: 100vh;
        top: 0;
      }
      .Servicos__Content {
        display: flex;
        flex-direction: column;
        align-items: center;
        .Servicos__Content__Texts {
          width: 90vw;
          h1 {
            font-size: 1.5em;

            strong {
              font-size: 1.5em;
            }
          }
          h2 {
            font-size: 1.3em;
            letter-spacing: -1px;
          }
          .Divider {
            width: 80vw;
            border: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          p {
            margin: 0 auto;
            font-size: 1.5em;
            line-height: 28px;
          }
        }
        h1 {
          font-size: 1.5em;
        }
        .Servicos__MainServicos {
          width: 100vw;
          .Servicos__Items {
            width: 90vw;
            grid-template-columns: 1fr !important;

            .HomePage__Services__Icons__Icon {
              width: 85vw;
            }
            .Servicos__Item {
              margin: 0 auto;
              height: 350px;
              width: 85%;
              font-size: 0.8em;
              button {
                background-color: red;
              }
              h2 {
                .icon {
                  img {
                    width: 40px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default style_footer;
