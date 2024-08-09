import { FaLocationDot } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { useUser } from "../context/UserContext";
import Spinner from "./Spinner";

const Sidebar = () => {
  const { isLoading, userData } = useUser();

  const about = userData.data?.shortAbout;
  const location = userData.data?.contact.location;
  const school = userData.data?.school.schoolName;

  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && (
        <div className="max-w-[300px] h-max bg-[#222] p-4 rounded-lg">
          <h3 className="headingSecondary mb-2">About</h3>
          <div className="border-y border-1 py-4">
            <p className="text">{about}</p>
          </div>
          <ul className="mt-2">
            <li>
              <p className="text flex gap-1 items-center">
                <i>
                  <FaLocationDot fill="white" opacity="0.6" />
                </i>
                <span>{location}</span>
              </p>
            </li>
            <li>
              <p className="text flex gap-1 items-center">
                <i>
                  <LuSchool opacity="0.6" />
                </i>
                <span>{school}</span>
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
