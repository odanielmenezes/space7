import Styled from "./style";
import { Header } from "../../components/header";
import { SenderEmail } from "../../components/form-email"

export function Contato() {
  return (
    <Styled>
      <div className="Contato">
        <SenderEmail />
      </div>
    </Styled>
  );
}
