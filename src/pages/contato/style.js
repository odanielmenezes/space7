import styled from "styled-components";

const style_footer = styled.div`
  .Contato {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff !important;
    padding: 50px 0;
    .animation-geral {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: -1;
 }
    .SenderEmail__Text {
      display: block;
    }
  }
  .Local {
    display: none !important;
  }
  .Redes {
    margin-top: 35px;
  }
  @media (max-width: 900px) {
    .Contato {
      .animation-geral {
        position: fixed;
        width: 2920px;
        height: 100vh;
        top: 0;
      }
      margin-top: 70px;
    }
  }
`;
export default style_footer;
