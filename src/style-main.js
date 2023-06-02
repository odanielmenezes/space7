import styled from "styled-components";

const style_lgpd = styled.div`
.lgpd {
    width: 100vw;
    height: auto;
    padding: 20px;
    position: fixed;
    bottom: 0;
    z-index: 100000;
    background-color: rgba(0,0,0, .9);
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        border: 0;
        background-color: #dd4035;
        padding: 10px 30px;
        color: #FFF;
        border-radius: 3px;
        transition: .3s;
        cursor: pointer;

        :hover {
            transform: scale(1.1);
            transition: .3s;
        }
    }
}
@media (max-width: 1366px) {
    .lgpd {
        p {
            width: 80vw;
            text-align: center;
        }
    }
}
@media (max-width: 600px) {
    .lgpd {
        width: 100vw;
        text-align: center;
        padding: 20px 0;
        line-height: 16px;

        p {
            width: 80vw;
        }
    }
}
`

export default style_lgpd;