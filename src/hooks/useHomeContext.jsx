import { useContext } from "react";
import HomeContext from "../contexts/HomeContext";

export const useHomeContext = () => {
  const homeContext = useContext(HomeContext);

  return homeContext;
};
