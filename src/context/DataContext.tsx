// 1 - працюючий локально
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";


const DataContext = createContext<any>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {    
    fetch(import.meta.env.VITE_DATA_URL)
    .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Data fetch error:", err));
  }, []);

// console.log("Data use:" , import.meta.env.VITE_DATA_URL);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);