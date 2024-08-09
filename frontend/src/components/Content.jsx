import DetailCard from "./DetailCard";
import SkilssCard from "./SkilssCard";
import ProjectCard from "./ProjectCard";
import { useUser } from "../context/UserContext";
import Spinner from "./Spinner";

const Content = () => {
  const { isLoading, userData } = useUser();

  const school = userData.data?.school.schoolName;
  const department = userData.data?.school.department;
  const beginDate = userData.data?.school.beginDate;
  const endDate = userData.data?.school.endDate;

  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && (
        <div className="w-full">
          <h3 className="headingSecondary mb-2">Education</h3>
          <DetailCard>
            <p className="text">
              {school} / {department}
            </p>
            <span className="text text-violet-400">
              {beginDate} - {endDate}
            </span>
          </DetailCard>
          <h3 className="headingSecondary my-4">Skills and Technologies</h3>
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            {Array.from({ length: 8 }, (val, key) => (
              <SkilssCard key={key} index={key}></SkilssCard>
            ))}
          </div>
          <h3 className="headingSecondary my-4">Projects</h3>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 2 }, (val, key) => (
              <ProjectCard key={key} index={key}></ProjectCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
