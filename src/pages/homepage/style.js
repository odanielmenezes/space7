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
          line-height: 60px;
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
`;
export default style_footer;
