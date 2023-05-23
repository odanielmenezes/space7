import styled from "styled-components";

const style_header_mobile = styled.div`
  .HeaderMobile {
    z-index: 2;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0px;
    right: 0;
    bottom: 0;
    background-color: #000;
    transition: .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    .OpenBurguer {
      z-index: 10;
      margin: 0px 4px;
      .Bar {
        transition: 0.5s;
        &:nth-child(1) {
          transform: rotate(410deg) translateY(29px) translateY(-10px);
        }
        &:nth-child(2) {
          margin-left: -100px;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translateY(-5px) translateY(-16px);
        }
      }
    }
    .Header__Hamburguer {
      position: fixed;
      left: 15px;
      top: 15px;
      z-index: 10;
      .Bar {
        transition: 0.5s;
        margin-bottom: 5px;
        width: 40px;
        border: 1px solid #000;
        height: 6px;
        background-color: #fff;
      }
    }
    .Header__Content {
      display: flex;
      ul {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        gap: 30px;
        li {
          text-transform: uppercase;
          color: #fff;
          font-size: 2.4em;
          text-align: center;
          list-style: none;
        }
      }
    }
  }
  .HeaderMobile.Open {
      left: -1000px;
      transition: .8s;
    }
`;

export default style_header_mobile;
