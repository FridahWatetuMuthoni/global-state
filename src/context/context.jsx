import { createContext, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [name, setName] = useState("fridah");

  const data = {
    name,
    setName,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};

export { AppContext, GlobalContext };
