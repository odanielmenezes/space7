import { Link } from "react-router-dom";
import Styled from "./style-buttons";

export function BtnQueroComecar(props) {
  const {name, link} = props

  console.log(name, 'name')

  return (
    <Styled>
      <div className="ButtonQueroComecar">
        <Link to={link ? link : `/contato`}>
          <button>{name ? name : `QUERO COMEÇAR`}</button>
        </Link>
      </div>
    </Styled>
  );
}
