import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:8000/api/v1/getUser", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.log("Error in fetchData" + error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <UserContext.Provider value={{ userData, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
