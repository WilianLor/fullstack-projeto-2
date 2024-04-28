import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import { HomeContextProvider } from "./contexts/HomeContext";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <HomeContextProvider>
      <Home />
      <ToastContainer />
    </HomeContextProvider>
  );
};

export default App;
