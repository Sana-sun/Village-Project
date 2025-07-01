// 1
// import { useEffect, useState } from "react";
// import { useData } from "../../context/DataContext";

// interface SearchEntry {
//   page: string;
//   name?: string;
//   category?: string;
//   path?: string;
// }

// export default function SearchInfo() {
//   const data = useData();
//   const [searchList, setSearchList] = useState<SearchEntry[]>([]);

//   useEffect(() => {
//     if (!data) return;

//     const entries: SearchEntry[] = [];

//     Object.entries(data).forEach(([sectionKey, value]) => {
//       const pageKey = sectionKey.trim(); // page
//       const pageSlug = "/" + pageKey.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
//       const items = value as Record<string, any>[];

//       items.forEach((item) => {
//         const name = item.NAME || item.CARD_NAME;
//         if (!name) return;

//         const anchor = "#" + name
//           .toLowerCase()
//           .replace(/\s+/g, "-")
//           .replace(/[^\w\-]/g, "");

//         const entry: SearchEntry = {
//           page: pageKey,
//           name: name,
//           path: `${pageSlug}${anchor}`,
//         };

//         if (item.CATEGORY) {
//           entry.category = item.CATEGORY;
//         }

//         entries.push(entry);
//       });
//     });

//     setSearchList(entries);
//   }, [data]);

//   return (
//     <>
//       <pre>{JSON.stringify(searchList, null, 2)}</pre>
//     </>
//   );
// }

// 2
// hooks/useSearchList.ts
// import { useEffect, useState } from "react";
// import { useData } from "../../context/DataContext";

// interface SearchEntry {
//   name?: string;
//   path: string;
//   page: string;
//   category?: string;
// }

// export default function useSearchList() {
//   const data = useData();
//   const [searchList, setSearchList] = useState<SearchEntry[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!data) return;

//     const entries: SearchEntry[] = [];

//     Object.entries(data).forEach(([sectionKey, value]) => {
//       const pageKey = sectionKey.trim();
//       const pageSlug =
//         "/" +
//         pageKey
//           .toLowerCase()
//           .replace(/\s+/g, "-")
//           .replace(/[^\p{L}0-9\-&]/gu, "");
//       const items = value as Record<string, any>[];

//       items.forEach((item) => {
//         const name = item.NAME || item.CARD_NAME;
//         if (!name) return;

//         const anchor =
//           "#" +
//           name
//             .toLowerCase()
//             .replace(/\s+/g, "-")
//             .replace(/[^\p{L}0-9\-&]/gu, ""); // ✅ зберігає літери з діакритиками

//         entries.push({
//           page: pageKey,
//           name,
//           path: `${pageSlug}${anchor}`,
//           category: item.CATEGORY || null,
//         });
//       });
//     });

//     setSearchList(entries);
//     setIsLoading(false);
//   }, [data]);

//   console.log("data:",data )
//   console.log("searchList:",searchList )

//   return { searchList, isLoading };
// }


// 3 simplifier
import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";

interface SearchEntry {
  name?: string;
  path: string;
  page: string;
  category?: string;
  categoryPath?: string;
}

export default function useSearchList() {
  const data = useData();
  const [searchList, setSearchList] = useState<SearchEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!data) return;

    const entries: SearchEntry[] = [];

    Object.entries(data).forEach(([pageKey, value]) => {
      const items = value as Record<string, any>[];

      items.forEach((item) => {
        if (!item.PATH || !item.NAME) return;

        entries.push({
          page: pageKey.trim(),
          name: item.NAME,
          path: item.PATH,
          category: item.CATEGORY || null,
          categoryPath: item.CATEGORY_PATH || null,
        });
      });
    });

    setSearchList(entries);
    setIsLoading(false);
  }, [data]);

  // console.log("searchList new:", searchList);

  return { searchList, isLoading };
}
