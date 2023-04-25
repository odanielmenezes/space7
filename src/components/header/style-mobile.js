import styled from "styled-components";

const style_header_mobile = styled.div`
    .HeaderMobile {
        width: 100vw;
        position: relative;
        .HeaderMobile__Hamburguer {
            margin: 8px;
            position: absolute;
            left: 0;
            transition: .3s;
            .HeaderMobile__Hamburguer_Bar {
                margin-bottom: 4px;
                width: 30px;
                height: 5px;
                background-color: #c750f1;
                transition-duration: .3s;

                &:nth-child(2) {
                    animation: opaciter .3s ease-in-out;
                    transition: .3s;
                }
                @keyframes opaciter {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
            .HeaderMobile__Hamburguer_Bar__Click {
                transition-duration: .3s;
                margin-bottom: 4px;
                width: 30px;
                height: 5px;
                background-color: #c750f1;
                transform: rotate(45deg) translate(7px, 7px);
                transition: .3s;
                &:nth-child(2) {
                    transform: rotate(-45deg) translate(-1px, -1px);
                    transition: .3s;
                }
            }
        }
        .HeaderMobile__Hamburguer__Click {
            z-index: 3;
            margin: 8px 8px;
            position: absolute;
            left: 0;
            .HeaderMobile__Hamburguer_Bar {
                z-index: 10;
                margin-bottom: 4px;
                width: 30px;
                height: 5px;
                background-color: #c750f1;
                transition-duration: .3s;

                &:nth-child(2) {
                    transition: .3s;
                    animation: opaciter .3s ease-in-out;
                }
                @keyframes opaciter {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
            .HeaderMobile__Hamburguer_Bar__Click {
                z-index: 1;
                margin-bottom: 4px;
                width: 30px;
                height: 5px;
                background-color: #FFF;
                transition-duration: .3s;
                transform: rotate(45deg) translate(7px, 7px);
                transition-duration: .3s;
                &:nth-child(2) {
                    transform: rotate(-45deg) translate(-1px, -1px);
                }
            }
        }
        .HeaderMobile__Content {
            z-index: 2;
            position: absolute;
            width: 100vw;
            height: 0vh;
            transition-duration: .8s;
            background-color: #c750f1;
            overflow-y: hidden;
            visibility: hidden;
            ul {
                margin-top: 100px;
                margin-left: -30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                li {
                    transition: 1s;
                    margin-bottom: 10px;
                    font-size: 1.5em;
                    color: #FFF;
                    list-style: none;
                }
            }
        }
        .HeaderMobile__Content__Click {
            z-index: 2;
            overflow: auto;
            position: absolute;
            width: 100vw;
            height: 100vh;
            transition-duration: .8s;
            background-color: #c750f1;
            ul {
                margin-top: 100px;
                margin-left: -30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                li {
                    transition: 1s;
                    margin-bottom: 10px;
                    font-size: 1.5em;
                    color: #FFF;
                    list-style: none;
                }
            }
        }
    }
`

export default style_header_mobile;