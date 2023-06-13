import styled from "styled-components";

const style_cards = styled.div`
  .HomePage__Services__Icons__Icon {
    z-index: 1;
    position: relative;
    width: 350px;
    height: 310px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    border: 1px solid #111c3f;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    transition: 0.5s;
    background-position: center;
    background-size: cover;
    box-shadow: 0px 0px 10px rgba(155, 155, 155, 0.7);
    position: relative;
    background-color: #fff;
    .div_title {
      position: absolute;
      top: 60px;
      width: 90%;
      display: flex;
      justify-content: center;
      h1 {
        line-height: 120%;
        width: 80%;
        font-size: 1.5em;
        flex-wrap: nowrap;
        text-align: center;
        color: #000;
      }
    }
    .Icon {
      width: 80px;
      height: 80px;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
      img {
        width: 50px;
        height: 50px;
        color: #111c3f;
        font-size: 23px;
      }
    }
    .content-card {
      display: flex;
      width: 90%;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 130px;
      p {
        line-height: 15px;
        text-align: center;
        font-size: 0.9em;
        color: rgba(0, 0, 0, 0.7);
      }
    }
    button {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      cursor: pointer;
      margin: 15px 0 0 0;
      padding: 8px 50px;
      border: 0;
      border-radius: 4px;
      background-color: #dd4035;
      color: #fff;
      text-transform: uppercase;
      transition: 0.3s;
    }
    :hover {
      transform: scale(1.1);
      transition: 0.3s;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    }
  }
  @media (max-width: 900px) {
    .HomePage__Services__Icons__Icon {
      width: 90vw;
    }
  }
`;

export default style_cards;
