import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

interface SearchEntry {
  page: string;
  name?: string;
  category?: string;
  path?: string;
}

export default function useSearchList(): SearchEntry[] {
  const data = useData();
  const [searchList, setSearchList] = useState<SearchEntry[]>([]);

  useEffect(() => {
    if (!data) return;

    const entries: SearchEntry[] = [];

    Object.entries(data).forEach(([sectionKey, value]) => {
      const pageKey = sectionKey.trim();
      const pageSlug = "/" + pageKey.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
      const items = value as Record<string, any>[];

      items.forEach((item) => {
        const name = item.NAME || item.CARD_NAME;
        if (!name) return;

        const anchor = "#" + name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]/g, "");

        const entry: SearchEntry = {
          page: pageKey,
          name: name,
          path: `${pageSlug}${anchor}`,
        };

        if (item.CATEGORY) {
          entry.category = item.CATEGORY;
        }

        entries.push(entry);
      });
    });

    setSearchList(entries);
  }, [data]);

  return searchList;
}
