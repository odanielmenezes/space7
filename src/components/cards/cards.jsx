import Styled from "./style";
import { Link } from "react-router-dom";
import Balance from "react-wrap-balancer";
import migrationSvg from "../../assets/migracao-cards.svg";
import marketplaceSvg from "../../assets/marketplace-cards.svg";
import designSvg from "../../assets/design-cards.svg";
import googleAds from "../../assets/googleads.png";
import croSvg from "../../assets/cro-cards.svg";
import seoSvg from "../../assets/seo-cards.svg";
import instaSvg from "../../assets/insta-cards.png";
import mentoriaSvg from "../../assets/mentoria-cards.svg";
import supportSvg from "../../assets/support-cards.svg";
import Humam from "../../assets/human-agency.svg"
import Team from "../../assets/team-agency.svg"
import Idea from "../../assets/idea-agency.svg"
import Result from "../../assets/result-agency.svg"

const icons = [
  migrationSvg,
  marketplaceSvg,
  designSvg,
  croSvg,
  seoSvg,
  googleAds,
  instaSvg,
  mentoriaSvg,
  supportSvg,
];

const iconsAgency = [Humam, Idea, Team, Result];

export function Cards(props) {
  const { title, description, description02, list, id, isAgency } = props;

  return (
    <Styled>
      <div className="HomePage__Services__Icons__Icon">
        {id && (
          <div className="Icon">
            {isAgency <= 4 && <img src={iconsAgency[id - 1]} alt="" />}
            {isAgency > 4 &&  <img src={icons[id - 1]} alt="" />}
          </div>
        )}
        <h1>{title}</h1>
        <p>
          <Balance>{description}</Balance>
        {list && list.length > 0 && (
          <ul>
            {list.map((item) => (
              <li>{item.li}</li>
            ))}
          </ul>
        )}
        </p>
        {description02 !== "" && <p>{description02}</p>}
        <Link to={title.includes("Mentoria") ? `/mentoria` : `/servicos`}>
          <button>conhecer</button>
        </Link>
      </div>
    </Styled>
  );
}
