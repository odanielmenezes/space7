import styled from "styled-components";

const style_header = styled.div`
  .Header {
    height: 75px;
    color: #fff;
    display: flex;
    z-index: 1;
    position: relative;

    .Header__Content {
      position: relative;
      justify-content: space-between;
      align-items: end;
      flex-direction: row-reverse;
      width: 1250px;
      display: flex;
      margin: 0 auto;
      .Header__Logo {
        position: absolute;
        left: 0%;
        bottom: 0;
        small {
          font-weight: bold;
          font-size: 1em;
          margin-left: -7px;
        }
        img {
          width: 30px;
        }
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: end;
        gap: 30px;
        position: relative;
        li {
          display: flex;
          align-items: end;
          transition: 0.2s;
          gap: 10px;
          svg {
            font-size: 22px;
            color: #fff;
            transition: 0.3s;
          }
        }
        .lis {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1em;
          cursor: pointer;
          align-self: flex-end;
          padding: 0px 15px;
          font-weight: 200;
          transition: all.2s;

          &:nth-child(6) {
            border: 3px solid #dd4035;
            background-color: #dd4035;
            color: rgba(255, 255, 255, 1);
            padding: 10px 35px;
            border-radius: 8px;
            color: #fff;
            margin-top: 10px;
            position: absolute;
            right: -150px;
            top: -23px;
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
      height: 100px;
      .Header__Content {
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        .Header__Logo {
          display: none;
          small {
          }
          img {
            position: block;
          }
        }
        ul {
          gap: 0;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            svg {
              font-size: 20px;
            }
          }
          .lis {
            white-space: nowrap;
            font-size: 0.7em;
            &:nth-child(6) {
              display: none;
            }
            :hover {
            }
          }
        }
      }
    }
  }
`;

export default style_header;
