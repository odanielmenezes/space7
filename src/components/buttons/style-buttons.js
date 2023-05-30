import styled from "styled-components";

const style_buttons = styled.div`
    .ButtonQueroComecar {
        button {
          border: 0;
          background-color: #CF3C32;
          color: #FFF;
          box-shadow: 2px 2px 4px rgba(0,0,0, .8);
          font-size: 1.4em;
          transition: .3s;
          width: 300px;
          height: 70px;
          border-radius: 5px;
          white-space: nowrap;
          cursor: pointer;

          :hover {
            transform: scale(1.1);
            transition: .3s;
            box-shadow: 4px 4px 7px rgba(0,0,0, .3);
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