import React from "react";

import { useState } from "react";
import { createContext } from "react";

export const SearchNewsContext = createContext();

const SearchNewsProvider = ({ children }) => {
  const [searchNews, setSearchNews] = useState([]);
  const values = { searchNews, setSearchNews };
  return (
    <SearchNewsContext.Provider value={values}>
      {children}
    </SearchNewsContext.Provider>
  );
};
export default SearchNewsProvider;
