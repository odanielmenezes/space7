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
          grid-template-columns: 1fr 1fr;
          gap: 50px 0;
          .Servicos__Item_Btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .Servicos__Item {
            background-image: linear-gradient(
                45deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0.2)
              ),
              url(${fundoItem});
            background-position: center;
            background-size: cover;
            margin: 0 auto;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            width: 80%;
            height: auto;
            padding: 20px;
            text-align: start;
            border-top: 5px solid #cf3c32;
            position: relative;
            .icon {
              img {
                filter: drop-shadow(0px 0px 6px rgba(155, 155, 155, 0.3));
                width: 60px;
              }
            }
            h2 {
              display: flex;
              gap: 10px;
              align-items: center;
              font-size: 1.3em;
              line-height: 120%;
              strong {
                margin-right: 10px;
                font-size: 2em;
              }
            }
            .Divider {
              width: 90%;
              border: 0;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              height: 1px;
            }
            p {
              line-height: 18px;
              font-size: 1.1em;
              color: #fff;
            }
            ul {
              margin: 50px 0;
              li {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .Servicos {
      width: 100vw;
      overflow: hidden;
      margin-top: 120px;
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
          .Servicos__Items {
            grid-template-columns: 1fr !important;
            .Servicos__Item {
              height: 350px;
              width: 85%;
              font-size: .8em;
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
