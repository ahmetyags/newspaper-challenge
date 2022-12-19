import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const SearchWordContext = createContext();

const SearchWordProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState([]);
  const values = { searchWord, setSearchWord };
  return (
    <SearchWordContext.Provider value={values}>
      {children}
    </SearchWordContext.Provider>
  );
};
export default SearchWordProvider;
