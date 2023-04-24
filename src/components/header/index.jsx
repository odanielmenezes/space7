import { Link } from "react-router-dom";
import Styled from "./style";
import Logo from "../../../public/vite.svg";

export function Header() {
  return (
    <Styled>
      <div className="Header">
        <div className="Header__Content">
          <ul>
            <Link className="lis" to="/">
              <li>Home</li>
            </Link>
            <Link className="lis" to="/agencia">
              <li>A agencia</li>
            </Link>
            <Link className="lis" to="/mentoria">
              <li>Mentoria</li>
            </Link>
            <Link className="lis" to="/servicos">
              <li>Serviços</li>
            </Link>
            <Link className="lis" to="/trabalhe-conosco">
              <li>Trabalhe Conosco</li>
            </Link>
            <Link className="lis" to="/contato">
              <li>Contato</li>
            </Link>
          </ul>
          <div className="Header__Logo">
            <img src={Logo} alt="" />
            <small>SPACE7 digital</small>
          </div>
        </div>
      </div>
    </Styled>
  );
}
