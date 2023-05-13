import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="test">{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
