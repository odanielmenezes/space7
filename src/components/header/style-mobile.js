import styled from "styled-components";

const style_header_mobile = styled.div`
  .HeaderMobile {
    width: 100vw;
    position: relative;
    z-index: 1;
    .Header__MenuHamburguer {
      top: 100px;
      margin: 10px;
      position: absolute;
      left: 0;
      transition: 0.3s;

      .Header__Bar {
        margin-bottom: 4px;
        width: 30px;
        height: 5px;
        background-color: red;
        transition-duration: 0.3s;

        &:nth-child(2) {
          animation: opaciter 0.3s ease-in-out;
          transition: 0.3s;
        }
        @keyframes opaciter {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }
      .HeaderMobile__Hamburguer_Bar__Click {
        transition-duration: 0.3s;
        margin-bottom: 4px;
        width: 30px;
        height: 5px;
        background-color: #111c3f;
        transform: rotate(45deg) translate(7px, 7px);
        transition: 0.3s;
        &:nth-child(2) {
          transform: rotate(-45deg) translate(-1px, -1px);
          transition: 0.3s;
        }
      }
    }
    .HeaderMobile__Hamburguer__Click {
      z-index: 3;
      margin: 10px;
      position: absolute;
      top: 100px;
      left: 0;
      .HeaderMobile__Hamburguer_Bar {
        z-index: 10;
        margin-bottom: 4px;
        width: 30px;
        height: 5px;
        background-color: #111c3f;
        transition-duration: 0.3s;

        &:nth-child(2) {
          transition: 0.3s;
          animation: opaciter 0.3s ease-in-out;
        }
        @keyframes opaciter {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }
      .HeaderMobile__Hamburguer_Bar__Click {
        z-index: 1;
        margin-bottom: 4px;
        width: 30px;
        height: 5px;
        background-color: #fff;
        transition-duration: 0.3s;
        transform: rotate(45deg) translate(7px, 7px);
        transition-duration: 0.3s;
        &:nth-child(2) {
          transform: rotate(-45deg) translate(-1px, -1px);
        }
      }
    }
    .HeaderMobile__Content {
      overflow: hidden;
      z-index: 2;
      position: absolute;
      width: 100vw;
      top: 100px;
      height: 0vh;
      transition-duration: 0.8s;
      background-color: #111c3f;
      overflow-y: hidden;
      visibility: hidden;
      ul {
        margin-top: 100px;
        margin-left: -30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          transition: 1s;
          margin-bottom: 10px;
          font-size: 1.5em;
          color: #fff;
          list-style: none;
        }
      }
    }
    .HeaderMobile__Content__Click {
      position: absolute;
      top: 100px;
      width: 100vw;
      height: 100vh;
      transition-duration: 0.8s;
      background-color: #111c3f;
      border-bottom: 5px solid #fff;
      ul {
      overflow: hidden;
        margin-top: 100px;
        margin-left: -30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          transition: 1s;
          margin-bottom: 10px;
          font-size: 1.5em;
          color: #fff;
          list-style: none;
        }
      }
    }
  }
`;

export default style_header_mobile;
