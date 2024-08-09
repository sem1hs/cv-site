import { CgMail, CgPhone } from "react-icons/cg";
import { useUser } from "../context/UserContext";
import Spinner from "./Spinner";
import pp from "../img/pp.jpeg";

const Header = () => {
  const { userData, isLoading } = useUser();

  const name = userData.data?.name;
  const title = userData.data?.title;
  const about = userData.data?.about;
  const gmail = userData.data?.contact.gmail;
  const phone = userData.data?.contact.phone;

  return (
    <header>
      <div className="flex gap-12 items-center ">
        <div>
          {isLoading && <Spinner></Spinner>}
          {!isLoading && (
            <img
              src={pp}
              alt="My Profile Picture"
              className="w-[250px] h-[250px] object-cover rounded-full"
            />
          )}
        </div>
        {isLoading && <Spinner></Spinner>}
        {!isLoading && (
          <div className="max-w-[600px]">
            <h3 className="headingSecondary mb-2">{title}</h3>
            <h1 className="headingPrimary mb-2">{name}</h1>
            <p className="text mb-2">{about}</p>
            <div className="flex gap-3">
              <div className="mt-4 w-max border border-[#444] px-4 py-1 rounded-full">
                <p className="text flex items-center gap-1 w-max">
                  <i className="flex items-center">
                    <CgMail />
                  </i>
                  <span>{gmail}</span>
                </p>
              </div>
              <div className="mt-4 w-max border border-[#444] px-4 py-1 rounded-full">
                <p className="text flex items-center gap-1 w-max">
                  <i className="flex items-center">
                    <CgPhone />
                  </i>
                  <span>{phone}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
