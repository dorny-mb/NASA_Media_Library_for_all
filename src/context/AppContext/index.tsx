import React, { createContext, useContext, useState } from "react";

type AppContextTypes = {
  searchedItems: any[];
  setSearchedItems: React.Dispatch<React.SetStateAction<never[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  pageNumber: number;
  searching: boolean;
  hasMore: boolean;
  setSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = createContext<AppContextTypes>({
  searchTerm: "",
  setSearchTerm: () => null,
  searchedItems: [],
  setSearchedItems: () => null,
  pageNumber: 1,
  setPageNumber: () => null,
  setSearching: () => null,
  searching: false,
  hasMore: true,
  setHasMore: () => null,
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider: React.FC = ({ children }) => {
  const [searchedItems, setSearchedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searching, setSearching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  return (
    <AppContext.Provider
      value={{
        hasMore,
        setHasMore,
        searchedItems,
        setSearchedItems,
        setSearchTerm,
        searchTerm,
        pageNumber,
        setPageNumber,
        searching,
        setSearching,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
