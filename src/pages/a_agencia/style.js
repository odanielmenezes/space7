import styled from "styled-components";

const style_footer = styled.div`
  .Agencia {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;

    .Agencia__MainContent {
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .Agencia__MainContent__Info {
        margin: 50px 0 150px 0;
        width: 1250px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 100px;

        .Agencia__CardMain {
          position: relative;
          svg {
            top: -20px;
            right: 10px;
            position: absolute;
            font-size: 60px;
            color: red;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8));
          }
        }
        .Divider {
          width: 1px;
          height: 400px;
          border: 0;
          border-right: 1px solid rgba(0, 0, 0, 0.2);
        }
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 50px;
          margin: 0 0 0 60px;
          width: 600px;
          text-align: justify;
          letter-spacing: 1px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

          strong {
            font-size: 1.3em;
          }
          &:nth-child(1) {
            box-shadow: none;
            color: #000;
            margin: 0 30px;
            display: block;
            height: 100%;
            width: 100%;
            background: none;
            letter-spacing: 2px;
            text-align: start;
            line-height: 60px;
            font-size: 4em;
            width: 300px;
          }
        }
      }
      h1 {
        &:nth-child(1) {
          letter-spacing: -2px;
          font-size: 3em;
          margin-top: 120px;

          strong {
            color: #dd4035;
          }
        }
      }
      p {
        font-size: 1.5em;
        strong {
          color: #dd4035;
        }
      }
      .Agencia__MainContent__ComoAgimos {
        height: auto;
        padding: 0 0 100px 0;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 65px;
        .ComoAgimos__Items {
          display: flex;
          justify-content: center;
          gap: 65px;
          .ComoAgimos__Item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            width: 250px;
            height: auto;
            background-color: #000;
            color: #fff;
            padding: 50px 20px 160px 20px;
            text-align: end;
            h3 {
              line-height: 120%;
              color: #f0ff00;
              text-align: end;
              width: 100%;
              font-size: 2em;
            }
            p {
              font-size: 1.2em;
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .Agencia {
      overflow: hidden;
      width: 100vw !important;
      .Agencia__MainContent {
        margin: 0;
        width: 100vw;
        .Agencia__MainContent__Info {
          width: 100vw;
          flex-direction: column !important;
          .Agencia__CardMain {
            width: 75vw !important;
            padding: 0;
            margin: 0;
            letter-spacing: -1px;
            line-height: 25px;
          }
          p {
            margin: 0 !important;
            font-size: 1.3em !important;
            padding: 140px 30px !important;

            &:nth-child(1) {
              text-align: center;
              font-size: 3em !important;
              line-height: 50px;
            }
            &:nth-child(2) {
            }
          }
          .Divider {
            width: 90vw !important;
            height: 1px !important;
            border: 0 !important;
            border-bottom: 1px solid rgba(0, 0, 0, .2) !important;
          }
        }
      }
      .Agencia__MainContent__ComoAgimos {
        .ComoAgimos__Items {
          display: grid !important;
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;
export default style_footer;
