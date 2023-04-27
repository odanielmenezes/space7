import styled from "styled-components";

const style_footer = styled.div`
  .HomePage {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    .HomePage__Main {
      animation: opaciter .8s ease-in-out;
      .HomePage__Content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h1 {
          text-align: start;
          line-height: 70px;
          font-size: 4em;
          margin: 0;
          strong {
            color: #c750f1;
          }
        }
        small {
          font-size: 1em;
        }
        p {
          text-align: center;
          width: 300px;
        }
      }
    }
    .HomePage__Animation {
      z-index: -10;
      img {
        width: 700px;
      }
    }
    @keyframes opaciter {
            from {
                opacity: 0;
                margin-bottom: -30px;
                transition: .3s;
            }
            to {
                opacity: 1;
                transition: .3s;
            }
        }
  }
  @media (max-width: 600px) {
      .HomePage {
        min-height: 100vh;
        flex-direction: column;
        .HomePage__Main {
          font-size: .5em;
          .HomePage__Content{
            h1{
              text-align: center;
              line-height: 30px;
            } 
          }
        }
        .HomePage__Animation {
          margin-top: -70px;
          width: 260px;
        }
      }
    }
`;
export default style_footer;
