import React, { useState, useCallback, useEffect } from "react";
import Styled from "./style";
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import {
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsPin,
} from "react-icons/bs";

import api from "../../api/api";

export function SenderEmail() {
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
  const [sendText, setSendText] = useState("Enviar");

  const sendEmail = () => {
    setSend(true);
    setSendText("Enviando");
    console.log(file, " file");
    let formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("mensagem", mensagem);
    formData.append("celular", celular);
    formData.append("empresa", empresa);
    formData.append("funcionarios", funcionarios);
    formData.append("assunto", assunto);
    formData.append("file", file);
    formData.append(
      "curriculo",
      location.pathname === "/trabalhe-conosco" ? true : false
    );

    api
      .post("/send-email", formData, {
        responseType: "arraybuffer",
        responseEncoding: "binary",
        headers: { "Content-Type": "application/pdf" },
      })
      .then((response) => {
        console.log(response);
        setSend(false);
        setSendText("Enviado!");
        setTimeout(() => {
          setSendText("Enviar");
          clearFields();
        }, 2000);
        console.log("REPONSE");
      })
      .catch((err) => {
        setSend(false);
        setSendText("Erro");
        setTimeout(() => {
          setSendText("Enviar");
        }, 5000);
        console.log("ERROR", err);
      });
    console.log(send);
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
    console.log("CLEAR");
    setNome("");
    setEmail("");
    setMensagem("");
    setAssunto("");
    setCelular("");
    setEmpresa("");
    setFuncionarios("");
    setSend(false);
    setSendText("Enviar");
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
            <h2>
              {location.pathname.includes("space7") ||
              location.pathname.includes("contato")
                ? "COMO PODEMOS AJUDAR?"
                : "ENVIE SEU CURRÍCULO!"}
            </h2>
            <p>
              {location.pathname.includes("space7") ||
              location.pathname.includes("contato")
                ? "uma equipe especializada fará contato o mais rápido posssivel assim que receber seu contato!"
                : "Venha fazer parte do nosso time."}
            </p>
            <div className="Divider"></div>
            <div className="RedesSociais">
              <div className="line01">
                <small>comercial@space7digital.com.br</small>
                <div className="Divider"></div>
                <small>
                  <BsWhatsapp /> +55 51 93104790
                </small>
              </div>
              <div className="Local">
                <BsPin /> POA/RS
              </div>
              <div className="Redes">
                <BsInstagram />
                <BsFacebook />
                <BsLinkedin />
              </div>
            </div>
          </div>
          <div className="SenderEmail__Divider"></div>
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
                  <div>
                    <TelefoneBrasileiroInput
                      value={celular}
                      onChange={(e) => setCelular(e.target.value)}
                      temDDD
                      separaDDD
                      placeholder="Telefone/Celular"
                    />
                  </div>
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
                      : "Anexar currículo (*pdf)"}{" "}
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
              <button type="submit" onClick={() => sendEmail()}>
                {!send ? sendText : onLoading()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
