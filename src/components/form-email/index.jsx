import React, { useState, useCallback, useEffect } from "react";
import Styled from "./style";
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
import {
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsPinFill,
} from "react-icons/bs";

import api from "../../api/api";

export function SenderEmail(isCurriculo) {
  const [checkbox01, setCheckbox01] = useState(false);
  const [checkbox02, setCheckbox02] = useState(false);
  const [checkbox03, setCheckbox03] = useState(false);
  const [checkbox04, setCheckbox04] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [celular, setCelular] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [send, setSend] = useState(false);
  const [sendText, setSendText] = useState("ENVIAR");

  const senderEmail = () => {
    setSend(true);
    setSendText("Enviando");
    let formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("mensagem", mensagem);
    formData.append("celular", celular);
    formData.append("empresa", empresa);
    formData.append("funcionarios", funcionarios);
    formData.append("assunto", assunto);

    const dados = {
      nome,
      email,
      mensagem,
      celular,
      empresa,
      funcionarios,
      assunto,
    };

    api
      .post("/send-email", dados)
      .then((response) => {
        setSend(false);
        setSendText("Enviado!");
        setTimeout(() => {
          setSendText("Enviar");
          clearFields();
        }, 2000);
      })
      .catch((err) => {
        setSend(false);
        setSendText("Erro");
        setTimeout(() => {
          setSendText("Enviar");
        }, 5000);
      });
  };

  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

  const senderCurriculo = () => {
    setSend(true);
    setSendText("Enviando");
    let formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("mensagem", mensagem);
    formData.append("file", file);

    api
      .post("/send-curriculo", formData, {
        responseType: "arraybuffer",
        responseEncoding: "binary",
      })
      .then((response) => {
        setSend(false);
        setSendText("Enviado!");
        setTimeout(() => {
          setSendText("Enviar");
          clearFields();
        }, 2000);
      })
      .catch((err) => {
        setSend(false);
        setSendText("Erro");
        setTimeout(() => {
          setSendText("Enviar");
        }, 5000);
      });
  };

  const onLoading = () => {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  };

  const changeCheckBox = (e) => {
    if (e.target.id === "01" && !checkbox01) {
      setCheckbox01(true);
      setCheckbox02(false);
      setCheckbox03(false);
      setCheckbox04(false);
      setFuncionarios("2-10");
    } else if (e.target.id === "02" && !checkbox02) {
      setCheckbox02(true);
      setCheckbox01(false);
      setCheckbox03(false);
      setCheckbox04(false);
      setFuncionarios("11-50");
    } else if (e.target.id === "03" && !checkbox03) {
      setCheckbox03(true);
      setCheckbox02(false);
      setCheckbox01(false);
      setCheckbox04(false);
      setFuncionarios("51-200");
    } else if (e.target.id === "04" && !checkbox04) {
      setCheckbox04(true);
      setCheckbox02(false);
      setCheckbox03(false);
      setCheckbox01(false);
      setFuncionarios("+200");
    } else {
      setCheckbox04(false);
      setCheckbox02(false);
      setCheckbox03(false);
      setCheckbox01(false);
    }
  };

  const clearFields = () => {
    setNome("");
    setEmail("");
    setMensagem("");
    setAssunto("");
    setCelular("");
    setEmpresa("");
    setFuncionarios("");
    setSend(false);
    setSendText(
      location.pathname === "/trabalhe-conosco" ? "Enviar currículi" : "Enviar"
    );
    setFile(null);
    document.getElementById("file").value = "";
    setCheckbox04(false);
    setCheckbox02(false);
    setCheckbox03(false);
    setCheckbox01(false);
  };

  return (
    <Styled>
      <div className="SenderEmail">
        <div className="test">
          <div className="SenderEmail__Text">
            <Fade top>
              <h2>
                {location.pathname.includes("space7") ||
                location.pathname.includes("contato")
                  ? "COMO PODEMOS AJUDAR?"
                  : "ENVIE SEU CURRÍCULO E PORTFÓLIO!"}
              </h2>
            </Fade>
            <Fade bottom>
              <p>
                {location.pathname.includes("space7") ||
                location.pathname.includes("contato")
                  ? "uma equipe especializada fará contato o mais rápido posssivel assim que receber seu contato!"
                  : "Venha fazer parte do nosso time."}
              </p>
            </Fade>
            <Fade left>
              <div className="Divider"></div>
            </Fade>
          </div>
          <Fade left>
            <div className="SenderEmail__Divider"></div>
          </Fade>
          <Fade bottom>
            <div className="SenderEmail__Content">
              <div className="SenderEmail__MainForm">
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome"
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                />
                {location.pathname !== "/trabalhe-conosco" && (
                  <>
                    <TelefoneBrasileiroInput
                      value={celular}
                      onChange={(e) => setCelular(e.target.value)}
                      temDDD
                      separaDDD
                      placeholder="Telefone/Celular"
                    />
                    <input
                      type="text"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Empresa"
                    />
                    <div className="inputsFuncionários">
                      <div>
                        <small>
                          Selecione o número de funcionários da empresa.
                        </small>
                        <br />
                      </div>
                      <div className="checkboxItem">
                        <div className="inputsCheckbox">
                          <input
                            type="checkbox"
                            value={funcionarios}
                            placeholder="Teste"
                            checked={checkbox01}
                            id="01"
                            onClick={(e) => changeCheckBox(e)}
                          />
                          <label>2-10</label>
                        </div>
                        <div className="inputsCheckbox">
                          <input
                            type="checkbox"
                            value={funcionarios}
                            checked={checkbox02}
                            id="02"
                            onClick={(e) => changeCheckBox(e)}
                          />
                          <label>11-50</label>
                        </div>
                        <div className="inputsCheckbox">
                          <input
                            type="checkbox"
                            value={funcionarios}
                            checked={checkbox03}
                            id="03"
                            onClick={(e) => changeCheckBox(e)}
                          />
                          <label>51-200</label>
                        </div>
                        <div className="inputsCheckbox">
                          <input
                            type="checkbox"
                            value={funcionarios}
                            checked={checkbox04}
                            id="04"
                            onClick={(e) => changeCheckBox(e)}
                          />
                          <label>+200</label>
                        </div>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                      placeholder="Assunto"
                    />
                  </>
                )}
                {location.pathname === "/trabalhe-conosco" && (
                  <div className="InputFile">
                    <label htmlFor="file">
                      {file !== null && file !== undefined
                        ? file.name
                        : "Anexar (*pdf)"}{" "}
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                )}
              </div>
              <div className="SenderEmail__TextField">
                <textarea
                  type="text"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Deixe seu recado"
                />
              </div>
              <div className="SenderEmail__ButonsForm">
                <button
                  class="g-recaptcha"
                  data-sitekey="reCAPTCHA_site_key"
                  data-callback={onSubmit}
                  data-action="submit"
                  type="submit"
                  onClick={() =>
                    location.pathname !== "/trabalhe-conosco"
                      ? senderEmail()
                      : senderCurriculo()
                  }
                >
                  {!send ? sendText : onLoading()}
                </button>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="RedesSociais">
              <div className="line01">
                <Link
                  onClick={(e) => {
                    window.location.href = "mailto:omercial@space7.com.br";
                    e.preventDefault();
                  }}
                >
                  <small>omercial@space7.com.br</small>
                </Link>
                <div className="Divider"></div>
                <small>
                  <Link
                    onClick={(e) => {
                      window.location.href =
                        "https://wa.me/5551992797210?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+da+SPACE7.";
                      e.preventDefault();
                    }}
                  >
                    <BsWhatsapp /> +55 51 99279-7210
                  </Link>
                </small>
              </div>
              <div className="Local">
                <BsPinFill /> POA/RS
              </div>
              <div className="Redes">
                <BsInstagram />
                <BsFacebook />
                <BsLinkedin />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Styled>
  );
}
