import styled from "styled-components";

const style_footer = styled.div`
  .Contato {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff !important;
    padding: 50px 0;

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
  @media (max-width:600px) {
    .Contato {
      margin-top: 70px;
    }
  }
`;
export default style_footer;
