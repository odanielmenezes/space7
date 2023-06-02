import styled from "styled-components";

const style_footer = styled.div`
  .TrabalheConosco {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #FFF;
    margin-top: 200px;
    .animation-geral {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: -1;
 }
    .Local { 
      display: none;
    }
    h1 {
      font-size: 3.4em;
      letter-spacing: -2px;
      line-height: 120%;

      strong {
        font-size: 1.3em;
        color: #cf3c32;
      }
    }
    .Lottie {
      margin: 100px 0;
    }
    .Divider {
      width: 800px;
      height: 1px;
      border: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin: 30px 0 50px 0;
    }
    .p {
      font-size: 1.4em;
      strong {
        color: #cf3c32;
        font-size: 1.3em;
        letter-spacing: -1px;
      }
    }
    h2 {
      margin: 0;
      font-size: 2em;
    }
  }
  .Local {
    display: none !important;
  }
  .Redes {
    margin-top: 35px;
  }
  @media (max-width: 900px) {
    .TrabalheConosco {
      overflow: hidden;
      width: 100vw;
      margin-top: 100px;
      .animation-geral {
        position: fixed;
        width: 2920px;
        height: 100vh;
        top: 0;
      }
      h1 {
        width: 300px;
        font-size: 2em;
        text-align: center;
      }
      .Divider {
        width: 80vw;
      }
      .p {
        font-size: 1.2em;
        text-align: center;
        width: 300px;
        line-height: 22px;
      }
      .Lottie {
        width: 90vw;
      }
      h2 {
        font-size: 1.3em;
        margin: 40px 0 0 0;
      }
    }
  }
`;
export default style_footer;
