// beautiful but selbst erstelen NAME PATh
// import { useState } from "react";
// import { FiX, FiSearch } from "react-icons/fi";

// // ⚠️ Замінити це на імпорт твоїх реальних даних
// import { allPathInfo } from "../../context/SearchAllPath/allPathInfo";
// import { Body, CloseBtn, EntryLink, Header, NoResults, Overlay, PageTitle, Panel, SearchInput, Section, ToggleButton } from "./styles";

// export default function SearchIcon() {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const filtered = allPathInfo
//     .filter((item) =>
//       item.name?.toLowerCase().includes(query.toLowerCase())
//     )
//     .sort((a, b) => a.name.localeCompare(b.name));

//   // 🔁 Групування за сторінками
//   const grouped = filtered.reduce<Record<string, typeof filtered>>((acc, item) => {
//     if (!acc[item.page]) acc[item.page] = [];
//     acc[item.page].push(item);
//     return acc;
//   }, {});

// console.log("🔍 Фільтровані результати 1:", filtered);

//   return (
//     <>
//       <ToggleButton onClick={() => setOpen(true)}>
//         <FiSearch />
//       </ToggleButton>

//       <Overlay $active={open} onClick={() => setOpen(false)} />

//       <Panel $active={open} onClick={(e) => e.stopPropagation()}>
//         <Header>
//           <CloseBtn onClick={() => setOpen(false)}>
//             <FiX />
//           </CloseBtn>
//           <SearchInput
//             placeholder="Suchen nach Namen ..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </Header>

//         <Body>
//           {Object.entries(grouped).map(([page, items]) => (
//             <Section key={page}>
//               <PageTitle>{page}</PageTitle>
//               <ul>
//                 {items.map((entry) => (
//                   <li key={entry.path}>
//                     <EntryLink to={entry.path} onClick={() => setOpen(false)}>
//                       {entry.name}
//                     </EntryLink>
//                   </li>
//                 ))}
//               </ul>
//             </Section>
//           ))}

//           {query && filtered.length === 0 && (
//             <NoResults>🔍 Keine Ergebnisse gefunden.</NoResults>
//           )}
//         </Body>
//       </Panel>
//     </>
//   );
// }

// auto Path-Erstelung
import { useState } from "react";
import { FiX, FiSearch } from "react-icons/fi";
import {
  Body,
  CloseBtn,
  EntryLink,
  Header,
  NoResults,
  Overlay,
  PageTitle,
  Panel,
  SearchInput,
  Section,
  SkeletonItem,
  ToggleButton,
} from "./styles";
import useSearchList from "../SearchInfoTemplate/useSearchList";

export default function SearchIcon() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { searchList, isLoading } = useSearchList();

  const normalize = (str: string) => str.normalize("NFC");

  const filtered = searchList
    .filter((item) =>
      normalize(item.name || "")
        .toLowerCase()
        .includes(normalize(query).toLowerCase())
    )
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""));

  const grouped = filtered.reduce<Record<string, typeof filtered>>(
    (acc, item) => {
      if (!acc[item.page]) acc[item.page] = [];
      acc[item.page].push(item);
      return acc;
    },
    {}
  );

  // console.log("useSearchList:", searchList);

  return (
    <>
      <ToggleButton onClick={() => setOpen(true)}>
        <FiSearch />
      </ToggleButton>

      <Overlay $active={open} onClick={() => setOpen(false)} />

      <Panel $active={open} onClick={(e) => e.stopPropagation()}>
        <Header>
          <CloseBtn onClick={() => setOpen(false)}>
            <FiX />
          </CloseBtn>
          <SearchInput
            placeholder={isLoading ? "Lade Daten..." : "Suche nach Namen ..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Header>

        <Body>
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Section key={i}>
                <PageTitle>
                  <SkeletonItem style={{ width: "50%", height: "20px" }} />
                </PageTitle>
                <ul>
                  {Array.from({ length: 3 }).map((_, j) => (
                    <li key={j}>
                      <SkeletonItem />
                    </li>
                  ))}
                </ul>
              </Section>
            ))
          ) : (
            <>
              {Object.entries(grouped).map(([page, items]) => (
                <Section key={page}>
                  <PageTitle>{page}</PageTitle>
                  <ul>
                    {items.map((entry) => (
                      <li key={entry.path}>
                        <EntryLink
                          to={entry.path}
                          onClick={() => setOpen(false)}
                        >
                          {entry.name}
                        </EntryLink>
                      </li>
                    ))}
                  </ul>
                </Section>
              ))}
              {query && filtered.length === 0 && (
                <NoResults>🔍 Keine Ergebnisse gefunden.</NoResults>
              )}
            </>
          )}
        </Body>
      </Panel>
    </>
  );
}
