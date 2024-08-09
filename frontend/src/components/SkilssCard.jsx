import { useUser } from "../context/UserContext";

import html from "../img/html.svg";
import css from "../img/css.svg";
import js from "../img/js.svg";
import react from "../img/react.svg";
import github from "../img/github.svg";
import spring from "../img/spring.svg";
import nodeJs from "../img/nodeJs.svg";
import mongodb from "../img/mongodb.svg";

const photoList = [html, css, js, react, nodeJs, spring, mongodb, github];

const SkilssCard = ({ index }) => {
  const { userData } = useUser();
  const text = userData.data?.skills[index]?.name;
  const photo = photoList[index];
  return (
    <div className="flex items-center gap-2 bg-[#222] px-2 py-2 rounded card">
      <img src={photo} alt="Skilss Icon" width="16px" />
      <span className="text">{text}</span>
    </div>
  );
};

export default SkilssCard;
