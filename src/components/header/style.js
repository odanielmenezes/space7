import styled from "styled-components";

const style_header = styled.div`
  .Header {
    width: 100vw;
    height: 80px;
    color: #fff;
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    z-index: 1000;
    .Header__Logo {
      margin-top: 10px;
      margin-left: 50px;
      display: flex;
      align-items: baseline;
      gap: 10px;
      small {
        font-weight: bold;
        font-size: 1em;
        margin-left: -7px;
      }
      img {
        cursor: pointer;
        width: 140px;
      }
    }
    a {
    }
    .Header__Content {
      position: relative;
      display: flex;
      align-items: end;
      margin-right: 150px;
      ul {
        margin: 30px 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: end;
        position: relative;
        li {
          display: flex;
          transition: 0.2s;
          gap: 10px;
          svg {
            font-size: 22px;
            color: #fff;
            transition: 0.3s;
          }
          :hover {
            transition: 0.3s;
            transform: scale(1.1);
          }
        }
        .contato {
          font-size: 1.2em;
          color: #dd4035;
          font-weight: bold;
          li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            span {
              &:nth-child(2) {
                font-size: .6em;
                margin-top: -14px;
                margin-bottom: -10px;
              }
            }
          }
        }
        ._focus {
          color: #dd4035 !important;
          transition: 0.1s;
          font-weight: bold !important;
        }
        .lis {
          align-self: flex-end;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 1);
          font-size: 1.2em;
          cursor: pointer;
          padding: 0px 15px;
          font-weight: bold;
          transition: 0.2s;
          :hover {
            transition-duration: 0.2s;
            transform: scale(1.1);
            transition: 0.2s;
            color: #fff;
            svg {
              transform: scale(1.3);
              transition: 0.3s;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1366px) {
    .Header {
      font-size: 0.9em;
      .Header__Content {
        margin-right: 210px;
      }
    }
  }
  @media (max-width: 960px) {
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
    .HeaderMobile {
      margin-left: -1000px;
      transition: 0.3s;
      .Header__Content {
        ul {
          li {
            svg {
            }
          }
          .lis {
            &:nth-child(6) {
            }
            :hover {
            }
          }
        }
      }
    }
    .HeaderMobile__Open {
      background-color: red;
      transition: 3;
    }
    .Header__Logo {
      display: none;
      small {
      }
    }
  }
`;

export default style_header;
