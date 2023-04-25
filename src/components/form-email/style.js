import styled from "styled-components";
import ImageBackground from "../../assets/background-email.jpg"

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
        animation: opaciter .5s ease-in-out;

        .test {
            width: 100%;
            padding: 70px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            gap: 100px;
        }
        .SenderEmail__Text {
            width: 400px;
            text-align: center;
            h2 {
                color: #FFF;
                background-color: #EF342B;
                padding: 10px 0;
            }
        }
        .SenderEmail__Divider {
            height: 300px;
            border: 1px solid rgba(0, 0, 0, .2);
        }
        .SenderEmail__Content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1px;
            .SenderEmail__MainForm {
                width: 400px;
                input {
                    background-color: #FFF;
                    width: 98%;
                    height: 22px;
                    border: 1px solid rgba(100, 100, 100, .3);
                    margin: 0 0 10px 0;
                    outline: none;
                    padding: 5px;
                    font-size: 1em;
                    box-shadow: 2px 2px 2px rgba(100, 100, 100, .3);
                    transition: .3s;
                    color: #000;

                    :focus {
                        box-shadow: 2px 2px 4px rgba(0, 117, 218, 1);
                        transition: .5s;
                    }
                }
            }
            .SenderEmail__TextField {
                width: 100%;
                textarea {
                    color: #000;
                    background: #FFF;
                    font-family: 'poppins', sans-serif;
                    min-width: 98%;
                    max-width: 98%;
                    min-height: 150px;
                    max-height: 200px;
                    font-size: 1em;
                    border: 1px solid rgba(100, 100, 100, .3);
                    margin: 0 0 5px 0;
                    outline: none;
                    padding: 5px;
                    box-shadow: 2px 2px 2px rgba(100, 100, 100, .4);
                    transition: .3s;

                    :focus {
                        box-shadow: 2px 2px 4px rgba(0, 117, 218, 1);
                        transition: .5s;
                    }
                }
            }
            .SenderEmail__ButonsForm {
                width: 100%;
                display: flex;
                gap: 8px;
                justify-content: flex-end;
                button {
                    width: 100px;
                    border: 0;
                    padding: 8px;
                    margin: 0 0 5px 0;
                    color: #FFF;
                    cursor: pointer;
                    transition: .3s;
                    box-shadow: 2px 2px 2px rgba(100, 100, 100, .4);
                    background-color: #EF342B;


                    :hover {
                        transform: scale(1.03);
                        transition: .3s;
                    }
                    &:nth-child(2) {
                        border: 1px solid #EF342B;
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
                        border: 2px solid #FFF;
                        border-bottom-color: transparent;
                        border-radius: 50%;
                        display: inline-block;
                        box-sizing: border-box;
                        animation: rotateSpinner infinite 1s linear;
                    }
                    @keyframes rotateSpinner {
                        from {transform: rotate(0deg);}
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
                transition: .3s;
            }
        }
        
    }
    @media (max-width: 500px) {
        .SenderEmail{
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
                    color: #FFF;
                    background-color: #EF342B;
                    padding: 10px 0;
                }
                p {
                    font-size: .8em;
                }
            }
            .SenderEmail__Content {
                width: 90vw;
                margin: 0;
                .SenderEmail__MainForm {
                    width: 90%;
                    input {
                        background-color: #FFF;
                        width: 98%;
                        height: 22px;
                        border: 1px solid rgba(100, 100, 100, .3);
                        margin: 0 0 10px 0;
                        outline: none;
                        padding: 5px;
                        font-size: 1em;
                        box-shadow: 2px 2px 2px rgba(100, 100, 100, .3);
                        transition: .3s;
                        color: #000;

                        :focus {
                            box-shadow: 2px 2px 4px rgba(0, 117, 218, 1);
                            transition: .5s;
                        }
                    }
                }
                .SenderEmail__TextField {
                    width: 90%;
                    textarea {
                        color: #000;
                        background: #FFF;
                        font-family: 'poppins', sans-serif;
                        min-width: 98%;
                        max-width: 98%;
                        min-height: 150px;
                        max-height: 200px;
                        font-size: 1em;
                        border: 1px solid rgba(100, 100, 100, .3);
                        outline: none;
                        padding: 5px;
                        box-shadow: 2px 2px 2px rgba(100, 100, 100, .4);
                        transition: .3s;

                        :focus {
                            box-shadow: 2px 2px 4px rgba(0, 117, 218, 1);
                            transition: .5s;
                        }
                    }
                }
                .SenderEmail__ButonsForm {
                    width: 100vw;
                    display: flex;
                    gap: 8px;
                    justify-content: center;
                    button {
                        width: 100px;
                        border: 0;
                        padding: 8px;
                        margin: 0 0 5px 0;
                        color: #FFF;
                        cursor: pointer;
                        transition: .3s;
                        box-shadow: 2px 2px 2px rgba(100, 100, 100, .4);
                        background-color: #EF342B;


                        :hover {
                            transform: scale(1.03);
                            transition: .3s;
                        }
                        &:nth-child(2) {
                            border: 1px solid #EF342B;
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
                            border: 2px solid #FFF;
                            border-bottom-color: transparent;
                            border-radius: 50%;
                            display: inline-block;
                            box-sizing: border-box;
                            animation: rotateSpinner infinite 1s linear;
                        }
                        @keyframes rotateSpinner {
                            from {transform: rotate(0deg);}
                            to {
                                transform: rotate(360deg);
                            }
                        }
                    }
                }
            }
        }
    }
`

export default styleHome;