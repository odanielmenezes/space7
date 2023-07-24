import React, { useState, useEffect } from "react";
import Styled from "./style";
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
import { ReCAPTCHA } from "react-google-recaptcha";
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
  const [sendText, setSendText] = useState("");

  const senderEmail = () => {
    if (nome !== "" && email !== "" && mensagem !== "" && celular !== "") {
      setSend(true);
      setSendText("");
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
        .post("/send-email", dados, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          console.log("RES", response);
          setSend(false);
          setSendText("Mensagem enviada com sucesso!");
          setTimeout(() => {
            clearFields();
          }, 2000);
        })
        .catch((err) => {
          console.log("ERRO", err);
          setSend(false);
          setSendText("Erro ao enviar sua mensagem!");
          setTimeout(() => {}, 5000);
        });
    } else {
      setSend(true);
      setSendText("Preencha os campos obrigatórios *");
    }
  };

  const onChange = () => {};

  const senderCurriculo = () => {
    if (nome !== "" && email !== "" && file) {
      setSend(true);
      setSendText("");
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
          console.log("ERRO", response);
          setSend(false);
          setSendText("Mensagem enviada com sucesso!");
          setTimeout(() => {
            clearFields();
          }, 2000);
        })
        .catch((err) => {
          console.log("ERRO", err);
          setSendText("Erro ao enviar sua mensagem!");
          setSend(false);
          setTimeout(() => {}, 5000);
        });
    } else {
      setSend(true);
      setSendText("Preencha os campos obrigatórios *");
    }
  };

  const onLoading = () => {
    if (sendText === "Preencha os campos obrigatórios *") {
      setSend(false);
    }

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
                {location.hash === "/" || location.hash.includes("/contato")
                  ? "COMO PODEMOS AJUDAR?"
                  : "ENVIE SEU CURRÍCULO E PORTFÓLIO!"}
              </h2>
            </Fade>
            <Fade bottom>
              <p>
                {location.hash === "/" || location.hash.includes("/contato")
                  ? "nossa equipe de e-commerce fará contato em breve!"
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
                  required
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome*"
                />
                <input
                  type="text"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail*"
                />
                {!location.hash.includes("/trabalhe-conosco") && (
                  <>
                    <TelefoneBrasileiroInput
                      value={celular}
                      onChange={(e) => setCelular(e.target.value)}
                      temDDD
                      required
                      separaDDD
                      placeholder="Telefone/Celular*"
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
                {location.hash.includes("/trabalhe-conosco") && (
                  <div className="InputFile">
                    <label htmlFor="file">
                      {file !== null && file !== undefined
                        ? file.name
                        : "Anexar (*pdf)"}{" "}
                    </label>
                    <input
                      multiple
                      type="file"
                      name="file"
                      id="file"
                      accept=".pdf"
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
                  placeholder="Deixe seu recado*"
                />
              </div>
              <div className="SenderEmail__ButonsForm">
                <button
                style={{ textTransform: "uppercase"}}
                  class="g-recaptcha"
                  data-sitekey="6LflMi8mAAAAAKqdZRcyUcIBkNBoV1Ow3KV0iq1o"
                  data-callback="onSubmit"
                  data-action="submit"
                  type="submit"
                  onClick={
                    !location.hash.includes("/trabalhe-conosco")
                      ? () => senderEmail()
                      : () => senderCurriculo()
                  }
                >
                  {!send ? "Enviar" : onLoading()}
                </button>
              </div>
              {sendText !== "" && (
                <p
                  className="alert"
                  style={
                    sendText === "Preencha os campos obrigatórios *"
                      ? { color: "#FFF" }
                      : { color: !send ? "#2c954a" : "#cf3c32" }
                  }
                >
                  {sendText}
                </p>
              )}
              <div className="recaptcha">
                <ReCAPTCHA
                  sitekey="6LflMi8mAAAAAKqdZRcyUcIBkNBoV1Ow3KV0iq1o"
                  onChange={onChange}
                />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="RedesSociais">
              <div className="line01">
                <Link
                  onClick={(e) => {
                    window.location.href = "mailto:comercial@space7.com.br";
                    e.preventDefault();
                  }}
                >
                  {" "}
                  {!location.hash.includes("/trabalhe-conosco") ? (
                    <small>comercial@space7.com.br</small>
                  ) : (
                    <small>contato@space7.com.br</small>
                  )}
                </Link>
                <div className="Divider"></div>
                <small>
                  <a
                    href="https://wa.me/5551989515775?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+da+SPACE7."
                    target={"_blank"}
                    // onClick={(e) => {
                    //   window.location.href =
                    //     "https://wa.me/5551992797210?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+da+SPACE7.";
                    //   e.preventDefault();
                    // }}
                  >
                    <BsWhatsapp /> +55 51 98951-5775
                  </a>
                </small>
              </div>
              <div className="Local">
                <BsPinFill /> POA/RS
              </div>
              <div className="Redes">
                <a
                  href="https://www.instagram.com/space7digital/"
                  target="_blank"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.facebook.com/space7digital"
                  target="_blank"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://linkedin.com/company/space7digital"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Styled>
  );
}
