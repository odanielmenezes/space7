import styled from "styled-components";
import ImageBackground from "../../assets/background-email.jpg";

const styleHome = styled.div`
  .SenderEmail {
    width: 1250px;
    height: 100%;
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    gap: 100px;
    animation: opaciter 0.5s ease-in-out;
    color: #fff !important;

    .test {
      width: 100%;
      padding: 70px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 14px;
    }
    .SenderEmail__Text {
      width: 900px;
      text-align: center;
      color: #fff;
      h2 {
        color: #fff;
        background-color: #ef342b;
        padding: 10px 0;
      }
      .Divider {
        width: 100%;
        height: 1px;
        border: 0;
        margin: 50px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      .RedesSociais {
        margin: 30px 0;
        font-size: 1.3em;
        color: rgba(255, 255, 255, 0.5);
        margin: 30px 0 100px 0;
        .line01 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          small {
            display: flex;
            align-items: center;
            gap: 5px;

            svg {
              font-size: 18px;
            }
          }
        }
        .Divider {
          width: 1px;
          height: 20px;
          border: 0;
          margin: 0 5px 0 5px;
          border-right: 1px solid rgba(255, 255, 255, 0.19);
        }
        .Local {
          margin: 10px 0 20px 0;
          display: flex;
          align-items: center;
          gap: 5px;
          justify-content: center;
        }
        .Redes {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;

          svg {
            cursor: pointer;
            font-size: 28px;

            :hover {
              color: #ef342b;
            }
          }
        }
      }
    }
    .SenderEmail__Divider {
      display: none;
      height: 1px;
      width: 90%;
      border: 0;
      margin: 50px 0 100px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .SenderEmail__Content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
      .SenderEmail__MainForm {
        width: 900px;

        .inputsFuncionários {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 25px;
          .checkboxItem {
            display: flex;
            gap: 30px;
          }
          .inputsCheckbox {
            align-items: center;
            display: flex;
          }
          small {
            color: #fff;
            font-size: 14px;
          }
          input {
            margin: 0;
            margin-right: 5px;
            border: 0;
            box-shadow: none;

            :focus {
              box-shadow: none;
            }
          }
          input[type="checkbox"] {
            width: 20px;
            border: 0;
            background: none;
          }
          label {
            white-space: nowrap;
            color: #fff;
          }
        }
        .InputFile {
          #file {
            display: none;
            input {
            }
          }
          label {
            border-radius: 5px;
            margin: 0 auto 20px auto;
            background-color: #ef342b;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px;
            width: 97%;
            height: 40px;
            color: #fff;
            font-size: 0.9em;
            box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
            transition: .3s;

            :hover {
              transform: scale(1.03);
              transition: 0.3s;
            }
          }
        }
        input {
          border-radius: 5px;
          background-color: #fff;
          width: 98%;
          height: 32px;
          border: 1px solid rgba(100, 100, 100, 0.3);
          margin: 0 0 20px 0;
          outline: none;
          padding: 5px;
          font-size: 1em;
          box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.3);
          transition: 0.3s;
          color: #000;

          :focus {
            border: 1px solid #ef342b;
            transition: 0.5s;
          }
        }
      }
      .SenderEmail__TextField {
        width: 100%;
        textarea {
          border-radius: 5px;
          color: #000;
          background: #fff;
          font-family: "poppins", sans-serif;
          min-width: 98%;
          max-width: 98%;
          min-height: 150px;
          max-height: 200px;
          font-size: 1em;
          border: 1px solid rgba(100, 100, 100, 0.3);
          margin: 0 0 5px 0;
          outline: none;
          padding: 5px;
          box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.4);
          transition: 0.3s;

          :focus {
            border: 1px solid #ef342b;
            transition: 0.5s;
          }
        }
      }
      .SenderEmail__ButonsForm {
        width: 100%;
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        button {
          border-radius: 5px;
          width: 99%;
          height: 40px;
          border: 0;
          padding: 8px;
          margin: 0 auto 5px auto;
          color: #fff;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.4);
          background-color: #ef342b;

          :hover {
            transform: scale(1.03);
            transition: 0.3s;
          }
          &:nth-child(2) {
            border: 1px solid #ef342b;
          }
        }
        .loading {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
          .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid #fff;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotateSpinner infinite 1s linear;
          }
          @keyframes rotateSpinner {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        }
      }
    }
    @keyframes opaciter {
      from {
        opacity: 0;
        margin-bottom: -30px;
      }
      to {
        opacity: 1;
        transition: 0.3s;
      }
    }
  }
  @media (max-width: 500px) {
    .SenderEmail {
      margin-top: -70px !important;
      width: 100vw;
      .test {
        display: flex !important;
        flex-direction: column !important;
        gap: 50px;
      }
      .SenderEmail__Divider {
        display: none;
      }
      .SenderEmail__Text {
        width: 100vw;
        width: 90%;
        text-align: center;
        h2 {
          font-size: 1em;
          color: #fff;
          background-color: #ef342b;
          padding: 10px 0;
        }
        p {
          font-size: 0.8em;
        }
        .RedesSociais {
          margin: 0 0 30px 0;
          .line01 {
          display: flex;
          flex-direction: column;
            .Divider {
              display: none;
              width: 80vw;
              border: 0;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              height: 1px;
              margin: 20px 0;
            }
        }
        }
      }
      .SenderEmail__Content {
        width: 90vw;
        margin: 0;
        .SenderEmail__MainForm {
          width: 90%;
          input {
            background-color: #fff;
            width: 98%;
            height: 22px;
            border: 1px solid rgba(100, 100, 100, 0.3);
            margin: 0 0 20px 0;
            outline: none;
            padding: 5px;
            font-size: 1em;
            box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.3);
            transition: 0.3s;
            color: #000;

            :focus {
              box-shadow: 2px 2px 4px rgba(0, 117, 218, 1);
              transition: 0.5s;
            }
          }

          .inputsFuncionários {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            .checkboxItem {
              display: flex;
              gap: 15px;
            }
            input[type="checkbox"] {
              width: 20px;
            }
            small {
              font-size: .9em;
            }
          }
        }
        .SenderEmail__TextField {
          width: 90%;
          textarea {
            color: #000;
            background: #fff;
            font-family: "poppins", sans-serif;
            min-width: 98%;
            max-width: 98%;
            min-height: 150px;
            max-height: 200px;
            font-size: 1em;
            border: 1px solid rgba(100, 100, 100, 0.3);
            outline: none;
            padding: 5px;
            box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.4);
            transition: 0.3s;

            :focus {
              box-shadow: 2px 2px 4px rgba(0, 117, 218, 1);
              transition: 0.5s;
            }
          }
        }
        .SenderEmail__ButonsForm {
          width: 85vw;
          display: flex;
          gap: 8px;
          justify-content: center;
          button {
            width: 100%;
            border: 0;
            padding: 8px;
            margin: 10px 0 5px 0;
            color: #fff;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.4);
            background-color: #ef342b;

            :hover {
              transform: scale(1.03);
              transition: 0.3s;
            }
            &:nth-child(2) {
              border: 1px solid #ef342b;
            }
          }
          .loading {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            gap: 10px;
            align-items: center;
            .spinner {
              width: 20px;
              height: 20px;
              border: 2px solid #fff;
              border-bottom-color: transparent;
              border-radius: 50%;
              display: inline-block;
              box-sizing: border-box;
              animation: rotateSpinner infinite 1s linear;
            }
            @keyframes rotateSpinner {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          }
        }
      }
    }
  }
`;

export default styleHome;
