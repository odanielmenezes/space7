import styled from "styled-components";

const style_footer = styled.div`
  .Mentoria {
    padding: 100px 0;
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    width: 100vw;
    margin-top: 50px;

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
            color: #CF3C32;
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
          border-bottom: 1px solid rgba(255,255,255, .1);
          margin: 0 auto;
          margin-bottom: 50px;

          &:nth-child(5) {
            margin: 50px auto 80px;
          }
        }
        p {
          padding: 30px 20px;
          font-size: 1.4em;
          margin: 0;
          strong {
            color: #CF3C32;
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
      grid-template-columns: 1fr 1fr 1fr;
      .Mentoria__Table__Item {
        position: relative;
        display: flex;
        justify-content: start;
        width: 400px;
        height: 250px;
        margin: 0 0 40px 0;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0,0,0, .3);

        h2 {
          white-space: nowrap;
          line-height: 22px;
          margin: 20px;
          font-size: 1.1em;

          strong {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            font-size: 1.5em;
            color: #CF3C32;
          }
        }
        .Divider {
          width: 100%;
          border: 0;
          height: 1px;
          border-bottom: 1px solid rgba(0,0,0, .1);
          margin-top: 10px;
        }
        svg {
          filter: drop-shadow(4px 4px 2px rgba(0,0,0, .5));
          opacity: .8;
          position: absolute;
          bottom: 20px;
          right: 30px;
          font-size: 8em;
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
              color: #FFF;
              width: 300px;
              padding: 20px 0;
              background-color: #CF3C32;
              text-align: center;
              line-height: 1px;

              &:nth-child(2) {
                background-color: #FFF;
                color: #000;
              } 
            }
          }
        }
        svg {
          position: absolute;
          left: 0;
          font-size: 4em;
          filter: drop-shadow(2px 2px 2px rgba(0,0,0, .7));
        }
      }
    }
  }
  @media (max-width: 1366px) {
    .Mentoria {
      .Mentoria__Table {
        gap: 0 30px;
        width: 90vw;
        .Mentoria__Table__Item {
        }
      }
    }
  }
  @media (max-width: 600px) {
    .Mentoria {
      overflow: hidden;
      margin-top: -50px;
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
        width: 100vw;
        grid-template-columns: 1fr;
      .Mentoria__Table__Item {
        width: 90vw;
        h2 {
          white-space: pre-wrap;
          strong {

          }
        }
        svg {

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
