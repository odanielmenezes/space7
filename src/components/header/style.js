import styled from "styled-components";

const style_header = styled.div`
  .Header {
    height: 80px;
    color: #FFF;
    display: flex;

    .Header__Content {
      position: relative;
      justify-content: space-between;
      align-items: flex-end;
      width: 1250px;
      display: flex;
      margin: 0 auto;
      .Header__Logo {
        position: absolute;
        right: 0%;
        bottom: 0;
        small {
          font-weight: bold;
          font-size: 1em;
          margin-left: -7px;
        }
        img {
          width: 40px;
        }
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: baseline;
        gap: 30px;
        .lis {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1em;
          cursor: pointer;
          transition-duration: 0.3s;
          padding: 10px 15px;

          &:nth-child(6) {
            background-color: #c750f1;
            color: rgba(255, 255, 255, 1);
            padding: 10px 15px;
            border-radius: 22px;
            :hover {
              color: #fff;
              transition-duration: 0.3s;
            }
          }

          :hover {
            color: rgba(255, 255, 255, 1);
            transition-duration: 0.3s;
          }
        }
      }
    }
  }
`;

export default style_header;
