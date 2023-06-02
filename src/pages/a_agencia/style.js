import styled from "styled-components";

const style_footer = styled.div`
  .Agencia {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #FFF;

    .animation-geral {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: -1;
    }

    .Agencia__MainContent {
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .Divider {
        width: 800px;
        border: 0;
        height: 1px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
      }
      .Agencia__MainContent__Info {
        margin: 50px 0 150px 0;
        width: 1250px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 100px;

        .Agencia__CardMain {
          position: relative;
          line-height: 34px;
          letter-spacing: 0px;
          img {
            transform: rotate(5deg);
            width: 110px;
            height: 110px;
            top: -70px;
            right: 10px;
            position: absolute;
            font-size: 60px;
            color: red;
            filter: drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.8));
          }
        }
        .Divider {
          width: 1px;
          height: 400px;
          border: 0;
          border-right: 1px solid rgba(255, 255, 255, .1);
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
          box-shadow: 0px 0px 10px rgba(255, 255, 255, 0);

          strong {
            font-size: 1.3em;
          }
          &:nth-child(1) {
            box-shadow: none;
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
          font-size: 5em;
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
          gap: 20px;
          width: 93vw;
          .HomePage__Services__Icons__Icon {
            gap: 0;
          h1 {
            line-height: 100%;
            width: 90%;
            font-size: 1.6em;
            letter-spacing: 1px;
            flex-wrap: nowrap;
            text-align: center;
            color: #000;
          }
          :hover {
            transform: scale(1.1);
            transition: 0.3s;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
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
          p {
            width: 90%;
            line-height: 20px;
            text-align: center;
            font-size: 1.2em;
            color: rgba(0, 0, 0, 0.7);

            &:nth-child(4) {
              display: none;
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
            color: #fff;
            text-transform: uppercase;
            transition: 0.3s;
          }
        }
        }
      }
    }
  }
  @media (max-width: 1366px) {
    .Agencia__MainContent {
      .Agencia__MainContent__ComoAgimos {
        .ComoAgimos__Items {
          background-color: red;
          display: flex;
          gap: 10px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .Agencia {
      margin-top: -70px;
      overflow: hidden;
      width: 100vw !important;
      .animation-geral {
        position: fixed;
        width: 2920px;
        height: 100vh;
        top: 0;
      }
      .Agencia__MainContent {
        width: 100vw;
        h1 {
            font-size: 3em !important;
            letter-spacing: -1px;
          }
        .Agencia__MainContent__Info {
          padding: 0;
          margin: 0;
          width: 100vw;
          flex-direction: column !important;
          .Agencia__CardMain {
            width: 85vw !important;
            padding: 0;
            margin: 0;
            letter-spacing: -1px;
            line-height: 25px;

            img {
              width: 80px;
              top: -52px;
            }
          }
          p {
            margin: 0 !important;
            font-size: 1.5em !important;
            padding: 50px 30px !important;

            &:nth-child(1) {
              text-align: center;
              font-size: 3em !important;
              line-height: 50px;
            }
            &:nth-child(2) {
            }
          }
          .Divider {
            width: 80vw !important;
            height: 1px !important;
            border: 0 !important;
            margin: 0;
            border-bottom: 1px solid rgba(255, 255, 255, .2) !important;
          }
        }
      }
      .Agencia__MainContent__ComoAgimos {
        .Agencia__MainContent__ComoAgimos__Title {

          h1 {
            gap: 7px;
            font-size: 3em;
            display: flex;
          }
        }
        .ComoAgimos__Items {
          display: grid !important;
          grid-template-columns: 1fr;
          .HomePage__Services__Icons__Icon {
            h1 {
              font-size: 1.5em !important;
            }
          }
          .ComoAgimos__Item {
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
export default style_footer;
