import styled from "styled-components";

const style_header = styled.div`
  .Header {
    width: 100vw;
    height: auto;
    padding: 10px 0;
    color: #fff;
    display: flex;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row-reverse;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: 1000;
    .Header__Logo {
      margin: 30px 60px;
      display: flex;
      align-items: baseline;
      gap: 10px;
      small {
        font-weight: bold;
        font-size: 1em;
        margin-left: -7px;
      }
      img {
        width: 30px;
      }
    }
    .Header__Content {
      position: relative;
      display: flex;
      margin-right: 250px;
      ul {
        margin: 30px 0;
        padding: 0;
        list-style: none;
        display: flex;
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
        }
        .lis {
          align-self: flex-end;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 1);
          font-size: 1em;
          cursor: pointer;
          padding: 0px 15px;
          font-weight: 200;
          transition: 0.2s;

          &:nth-child(6) {
            border: 3px solid #dd4035;
            background-color: #dd4035;
            color: rgba(255, 255, 255, 1);
            padding: 10px 35px;
            border-radius: 8px;
            color: #fff;
            position: absolute;
            right: -150px;
            bottom: -10px;
            :hover {
              transform: scale(1.1);
              transition: 0.3s;
            }
          }
          :hover {
            color: #fff;
            transition-duration: 0.3s;

            svg {
              transform: scale(1.3);
              transition: 0.3s;
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
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
      transition: .3s;
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
