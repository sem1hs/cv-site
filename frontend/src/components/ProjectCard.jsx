import { useUser } from "../context/UserContext";

const ProjectCard = ({ index }) => {
  const { userData } = useUser();
  const title = userData.data?.projects[index]?.name;
  const description = userData.data?.projects[index]?.description;
  const link = userData.data?.projects[index]?.link;

  return (
    <div className="bg-[#222] px-6 py-4 rounded card">
      <h3 className="headingSecondary">{title}</h3>
      <p className="text">{description}</p>
      <div className="mt-2">
        <span className="text">Github : </span>
        <a className="textLink" href={link} target="blank">
          Click to Go
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
