
import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [formList, setFormList] = useState();
  
    return (
        <Context.Provider value={{ formList, setFormList }}>
            {children}
        </Context.Provider>
    );
};
