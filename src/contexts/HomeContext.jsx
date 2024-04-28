import { createContext, useState } from "react";
import { api } from "../services/api";
import { removeSpaces } from "../utils/remove-spaces";
import { toast } from "react-toastify";

const HomeContext = createContext({});

export const HomeContextProvider = ({ children }) => {
  const [domains, setDomains] = useState([]);

  const searchDomain = async (domain) => {
    const formattedDomain = removeSpaces(domain);

    const response = await api.get(`/registrobr/v1/${formattedDomain}`);

    if (response.status !== 200) {
      return toast(
        "Não foi possível recurar o domínio, tente novamente mais tarde!",
        {
          type: "error",
        }
      );
    }

    setDomains((prevDomains) => [response.data, ...prevDomains]);
  };

  return (
    <HomeContext.Provider
      value={{
        domains,
        searchDomain,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
