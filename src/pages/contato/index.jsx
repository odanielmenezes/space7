import Styled from "./style";
import { useEffect } from "react";
import { SenderEmail } from "../../components/form-email";

export function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Styled>
      <div className="Contato">
        <SenderEmail />
      </div>
    </Styled>
  );
}
