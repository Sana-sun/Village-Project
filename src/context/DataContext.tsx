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


// 2 - старт віддалено включити
// import { createContext, useContext, useEffect, useState } from "react";
// import type { ReactNode } from "react";


// const DataContext = createContext<any>(null);

// interface DataProviderProps {
//   children: ReactNode;
// }


// export const DataProvider = ({ children }: DataProviderProps) => {
//   const [data, setData] = useState<any>(null);

//  useEffect(() => {
//   const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
//   const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

//   // 1. Отримати список аркушів
//   fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${apiKey}`)
//     .then(res => res.json())
//     .then(async metadata => {
//       const sheetNames = metadata.sheets.map((sheet: any) => sheet.properties.title);

//       // 2. Для кожного аркуша зробити запит на дані
//       const allData = await Promise.all(
//         sheetNames.map(async (sheetName: string) => {
//           const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`);
//           const json = await res.json();
//           return { sheetName, values: json.values };
//         })
//       );

//       setData(allData); // [{sheetName: "Лист1", values: [...]}, ...]
//     })
//     .catch(err => console.error("Data fetch error:", err));
// }, []);

// // console.log("Data use:" , import.meta.env.VITE_DATA_URL);

//   return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
// };

// export const useData = () => useContext(DataContext);
