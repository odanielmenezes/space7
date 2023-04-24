import { useState, useCallback, useEffect } from "react";
import Styled from "./style";
import api from "../../api/api";

export function SenderEmail() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const [posuiLoja, setPosuiLoja] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [send, setSend] = useState(false);
  const [sendText, setSendText] = useState("Enviar");

  const sendEmail = () => {
    setSend(true);
    setSendText("Enviando");
    api
      .post("/send-email", {
        nome,
        email,
        mensagem,
        celular,
        empresa,
        funcionarios,
        posuiLoja,
        assunto,
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
        console.log("ERROR");
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

  const clearFields = () => {
    console.log("CLEAR");
    setNome("");
    setEmail("");
    setMensagem("");
    setAssunto("");
    setCelular("");
    setEmpresa("");
    setFuncionarios("");
    setPosuiLoja("");
    setSend(false);
    setSendText("Enviar");
  };

  return (
    <Styled>
      <div className="SenderEmail">
        <div className="test">
          <div className="SenderEmail__Text">
            <h2>DEIXE SUA MENSAGEM!</h2>
            <p>
              uma equipe especializada fará contato o mais rápido posssivel
              assim que receber seu contato!
            </p>
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
              <input
                type="text"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                placeholder="Telefone/Celular"
              />
              <input
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                placeholder="Empresa"
              />
              <input
                type="text"
                value={funcionarios}
                onChange={(e) => setFuncionarios(e.target.value)}
                placeholder="Número de funcionários"
              />
              <input
                type="text"
                value={posuiLoja}
                onChange={(e) => setPosuiLoja(e.target.value)}
                placeholder="Você já possui uma loja virtual?"
              />
              <input
                type="text"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                placeholder="Assunto"
              />
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
              <button type="submit" onClick={() => clearFields()}>
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
