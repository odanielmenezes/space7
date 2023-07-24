import { Link } from "react-router-dom";
import Styled from "./style-buttons";

export function BtnQueroComecar(props) {
  const { name, link, href } = props;

  return (
    <Styled>
      <div className="ButtonQueroComecar">
        {!href ? (
          <Link to={link ? link : `/contato`}>
            <a href={href} target="_blanl">
              <button>{name ? name : `QUERO COMEÇAR`}</button>
            </a>
          </Link>
        ) : (
          <a href={href} target="_blank">
            <button>{name ? name : `QUERO COMEÇAR`}</button>
          </a>
        )}
      </div>
    </Styled>
  );
}
