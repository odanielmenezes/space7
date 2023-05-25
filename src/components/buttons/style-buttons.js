import styled from "styled-components";

const style_buttons = styled.div`
    .ButtonQueroComecar {
        margin: 30px 0;
        button {
          border: 0;
          background-color: #CF3C32;
          color: #FFF;
          box-shadow: 4px 4px 4px rgba(0,0,0, 1);
          padding: 20px 80px;
          font-size: 2em;
          transition: .3s;
          border-radius: 5px;
          white-space: nowrap;
          cursor: pointer;

          :hover {
            transform: scale(1.1);
            transition: .3s;
            box-shadow: 9px 9px 5px rgba(0,0,0, .8);
          }
        }
    }
    @media (max-width: 600px) {
        .ButtonQueroComecar {
            display: flex;
            justify-content: center;
            button {
                white-space: nowrap;
                font-size: 1.2em;
                padding: 20px 50px;
                margin: 0 auto;
            }
        }
    }
`

export default style_buttons;