import styled from "styled-components";

const style_header = styled.div`
  .Header {
    min-width: 100vw;
    height: 75px;
    color: #fff;
    display: flex;
    z-index: 1;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: row-reverse;
    z-index: 10;
    .Header__Logo {
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
      width: auto;
      position: relative;
      display: flex;
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        position: relative;
        li {
          font-weight: bold;
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
          color: rgba(255, 255, 255, 0.6);
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
    .Header {
      width: 100vw !important;
      overflow: hidden;
      position: fixed;
      top: 0;
      height: 100vh;
      .OpenBurguer {
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
        position: absolute;
        left: 15px;
        top: 15px;
        z-index: 100;
        .Bar {
          transition: 0.5s;
          margin-bottom: 5px;
          width: 40px;
          border: 1px solid #000;
          height: 6px;
          background-color: #fff;
        }
      }
      .Open {
        height: 100vh;
        margin-left: -1000px;
        transition: .5s;
        overflow: hidden;
      }
      .Header__Content {
        overflow: hidden;
        width: 100%;
        height: 100%;
        align-items: center;
        transition: .5s;
        justify-content: center;
        background-color: #111c3f;
        ul {
          display: flex;
          flex-direction: column;
          gap: 0;
          li {
            color: #fff;
            display: flex;
            font-size: 3em;
            svg {
              font-size: 20px;
              display: none;
            }
          }
          .lis {
            margin: 20px 0;
            display: flex;
            align-self: center;
            font-size: 0.7em;
            &:nth-child(6) {
              display: none;
            }
            :hover {
            }
          }
        }
      }
      .Header__Logo {
        display: none;
        small {
        }
        img {
          position: block;
        }
      }
    }
  }
`;

export default style_header;
