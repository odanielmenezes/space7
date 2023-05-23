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

    h1 {
      font-size: 3.4em;
      letter-spacing: -2px;
      line-height: 120%;

      strong {
        font-size: 1.3em;
        color: #cf3c32;
      }
    }
    .Divider {
      width: 600px;
      height: 1px;
      border: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
      font-size: 2em;
    }
  }
  @media (max-width: 600px) {
    .TrabalheConosco {
      overflow: hidden;
      width: 100vw;
      margin-top: 100px;
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
