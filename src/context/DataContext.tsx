import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

const DataContext = createContext<any>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://script.googleusercontent.com/a/macros/sana-sun.com/echo?user_content_key=AehSKLi299kNPDVyvkF5ZWBrirQx2gt_R7l-1KS2OpPBw-acxVXg_Cl3gpfOCvENRM0HRou8QRHhLJrFDJ82-cpmUWXD5wshUTd0U5YBDZFuUwp0VpoQj-qSA76_QxLS2aBvio6c2Er_Vjo3Fyjl76icXOZSimcEdq-QddTUPoM4sh4Z1Scg2wJnbu1ixgp8AKiod0NrtQThQzS_Lbg3Ix5yeXAFcelvdDA4a8lDoaiJH6WOuUH3VeT4keGLoLafCWHje3girhVYm2T2OBy20nzlj-KL3DR-eCcCGcMgzNvlKyc30mz9FbY&lib=MaSdhTTlyG_sOh8kbTwgkfhIMQKN1ylQ6") // твій JSON URL
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Data fetch error:", err));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
