// 1 - працюючий локально
// import { createContext, useContext, useEffect, useState } from "react";
// import type { ReactNode } from "react";


// const DataContext = createContext<any>(null);

// interface DataProviderProps {
//   children: ReactNode;
// }

// export const DataProvider = ({ children }: DataProviderProps) => {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {    
//     fetch(import.meta.env.VITE_DATA_URL)
//     .then((res) => res.json())
//       .then(setData)
//       .catch((err) => console.error("Data fetch error:", err));
//   }, []);

// // console.log("Data use:" , import.meta.env.VITE_DATA_URL);

//   return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
// };

// export const useData = () => useContext(DataContext);


// 3 - try to cach and update 1 time pro day
// import { createContext, useContext, useEffect, useState } from "react";
// import type { ReactNode } from "react";

// const DataContext = createContext<any>(null);
// interface DataProviderProps {
//   children: ReactNode;
// }

// const STORAGE_KEY = "village_project_data";
// const TIMESTAMP_KEY = "village_project_last_update";

// export const DataProvider = ({ children }: DataProviderProps) => {
//   const [data, setData] = useState<any>(null);

//   // обчислюємо наступну 7:00
//   function isUpdateNeeded(): boolean {
//     const lastUpdated = localStorage.getItem(TIMESTAMP_KEY);
//     if (!lastUpdated) return true;

//     const last = new Date(lastUpdated);
//     const now = new Date();

//     // якщо день змінився або зараз після 7 ранку, але оновлення ще не було сьогодні
//     const todayAt7 = new Date();
//     todayAt7.setHours(7, 0, 0, 0);

//     const shouldRefresh =
//       now.getDate() !== last.getDate() ||
//       (now > todayAt7 && last < todayAt7);

//     return shouldRefresh;
//   }

//   useEffect(() => {
//     const cachedData = localStorage.getItem(STORAGE_KEY);

//     if (cachedData && !isUpdateNeeded()) {
//       setData(JSON.parse(cachedData));
//       return;
//     }

//     fetch(import.meta.env.VITE_DATA_URL)
//       .then((res) => res.json())
//       .then((json) => {
//         setData(json);
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
//         localStorage.setItem(TIMESTAMP_KEY, new Date().toISOString());
//       })
//       .catch((err) => {
//         console.error("Data fetch error:", err);
//         if (cachedData) {
//           setData(JSON.parse(cachedData)); // fallback
//         }
//       });
//   }, []);

//   return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
// };

// export const useData = () => useContext(DataContext);


// без часу та кешування
// import { createContext, useContext, useEffect, useState } from "react";
// import type { ReactNode } from "react";

// const DataContext = createContext<any>(null);

// interface DataProviderProps {
//   children: ReactNode;
// }

// export const DataProvider = ({ children }: DataProviderProps) => {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     fetch(import.meta.env.VITE_DATA_URL)
//       .then((res) => res.json())
//       .then((json) => {
//         setData(json);
//       })
//       .catch((err) => {
//         console.error("Data fetch error:", err);
//       });
//   }, []);

//   return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
// };

// export const useData = () => useContext(DataContext);


// 4 з кешуванням

// import { createContext, useContext, useEffect, useState } from "react";
// import type { ReactNode } from "react";

// const DataContext = createContext<any>(null);

// interface DataProviderProps {
//   children: ReactNode;
// }

// const STORAGE_KEY = "village_project_data";

// export const DataProvider = ({ children }: DataProviderProps) => {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     fetch(import.meta.env.VITE_DATA_URL)
//       .then((res) => res.json())
//       .then((json) => {
//         setData(json);
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
//       })
//       .catch((err) => {
//         console.error("Data fetch error:", err);

//         // якщо fetch не вдався — беремо дані з localStorage
//         const cachedData = localStorage.getItem(STORAGE_KEY);
//         if (cachedData) {
//           setData(JSON.parse(cachedData));
//         }
//       });
//   }, []);

//   return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
// };

// export const useData = () => useContext(DataContext);


// миттєве відображення сховиша
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

const DataContext = createContext<any>(null);

interface DataProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "village_project_data";

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<any>(null);

  // 1. одразу читаємо з localStorage
  useEffect(() => {
    const cachedData = localStorage.getItem(STORAGE_KEY);
    if (cachedData) {
      setData(JSON.parse(cachedData));
    }

    // 2. паралельно оновлюємо з сервера
    fetch(import.meta.env.VITE_DATA_URL)
      .then((res) => res.json())
      .then((freshData) => {
        const cached = localStorage.getItem(STORAGE_KEY);
        const cachedJson = cached ? JSON.parse(cached) : null;

        const freshStr = JSON.stringify(freshData);
        const cachedStr = JSON.stringify(cachedJson);

        // 3. якщо нові дані відрізняються — оновлюємо
        if (freshStr !== cachedStr) {
          setData(freshData);
          localStorage.setItem(STORAGE_KEY, freshStr);
        }
      })
      .catch((err) => {
        console.error("Data fetch error:", err);
      });
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
