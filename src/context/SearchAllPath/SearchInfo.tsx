1 
import { useEffect, useState } from "react";
import { useData } from "../DataContext";

interface SearchEntry {
  page: string;
  name?: string;
  category?: string;
  path?: string;
  categoryPath?: string;
}

export default function SearchInfo() {
  const data = useData();
  const [searchList, setSearchList] = useState<SearchEntry[]>([]);

 useEffect(() => {
  if (!data) return;

  const entries: SearchEntry[] = [];

  Object.entries(data).forEach(([sectionKey, value]) => {
    const page = sectionKey.trim();
    const pageSlug = "/" + page.toLowerCase().replace(/\s+/g, "-"); // залишає ö, ä, &, ü

    const items = value as Record<string, any>[];

    items.forEach((item) => {
      const name = item.NAME || item.CARD_NAME;
      if (!name) return;

      const nameAnchor = "#" + name.toLowerCase().replace(/\s+/g, "-");
      const entry: SearchEntry = {
        page,
        name,
        path: `${pageSlug}${nameAnchor}`,
      };

      if (item.CATEGORY) {
        const category = item.CATEGORY;
        const categoryAnchor = "#" + category.toLowerCase().replace(/\s+/g, "-");

        entry.category = category;
        entry.categoryPath = `${pageSlug}${categoryAnchor}`;
      }

      entries.push(entry);
    });
  });

  setSearchList(entries);
}, [data]);



  return (
    <>
      <pre>{JSON.stringify(searchList, null, 2)}</pre>
    </>
  );
}
