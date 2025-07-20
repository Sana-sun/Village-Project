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
// import { useState } from "react";
// import { FiX, FiSearch } from "react-icons/fi";
// import {
//   Body,
//   CloseBtn,
//   EntryLink,
//   Header,
//   NoResults,
//   Overlay,
//   PageTitle,
//   Panel,
//   SearchInput,
//   Section,
//   SkeletonItem,
//   ToggleButton,
// } from "./styles";
// import useSearchList from "../SearchInfoTemplate/useSearchList";

// export default function SearchIcon() {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const { searchList, isLoading } = useSearchList();

//   const normalize = (str: string) => str.normalize("NFC");

//   const filtered = searchList
//     .filter((item) =>
//       normalize(item.name || "")
//         .toLowerCase()
//         .includes(normalize(query).toLowerCase())
//     )
//     .sort((a, b) => (a.name || "").localeCompare(b.name || ""));

//   const grouped = filtered.reduce<Record<string, typeof filtered>>(
//     (acc, item) => {
//       if (!acc[item.page]) acc[item.page] = [];
//       acc[item.page].push(item);
//       return acc;
//     },
//     {}
//   );

//   // console.log("useSearchList:", searchList);

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
//             placeholder={isLoading ? "Lade Daten..." : "Suche nach Namen ..."}
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </Header>

//         <Body>
//           {isLoading ? (
//             Array.from({ length: 4 }).map((_, i) => (
//               <Section key={i}>
//                 <PageTitle>
//                   <SkeletonItem style={{ width: "50%", height: "20px" }} />
//                 </PageTitle>
//                 <ul>
//                   {Array.from({ length: 3 }).map((_, j) => (
//                     <li key={j}>
//                       <SkeletonItem />
//                     </li>
//                   ))}
//                 </ul>
//               </Section>
//             ))
//           ) : (
//             <>
//               {Object.entries(grouped).map(([page, items]) => (
//                 <Section key={page}>
//                   <PageTitle>{page}</PageTitle>
//                   <ul>
//                     {items.map((entry) => (
//                       <li key={entry.path}>
//                         <EntryLink
//                           to={entry.path}
//                           onClick={() => setOpen(false)}
//                         >
//                           {entry.name}
//                         </EntryLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </Section>
//               ))}
//               {query && filtered.length === 0 && (
//                 <NoResults>🔍 Keine Ergebnisse gefunden.</NoResults>
//               )}
//             </>
//           )}
//         </Body>
//       </Panel>
//     </>
//   );
// }

// + Barrierefreiheit

import { useEffect, useRef, useState } from "react";
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

  const inputRef = useRef<HTMLInputElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null); // 💡 ref на кнопку відкриття

  const lastFocusableRef = useRef<HTMLAnchorElement | null>(null);

  // Фокусуємо поле при відкритті
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [open]);

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

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      toggleBtnRef.current?.focus(); // 🧠 повертаємо фокус назад
    }, 50);
  };

  // Escape → закрити та повернути фокус
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
  if (!open) return;

  const handleTabClose = (e: KeyboardEvent) => {
    if (e.key === "Tab" && !e.shiftKey && document.activeElement === lastFocusableRef.current) {
      e.preventDefault(); // Заборонити стандартний перехід
      handleClose(); // Закриває панель і повертає фокус
    }
  };

  document.addEventListener("keydown", handleTabClose);
  return () => {
    document.removeEventListener("keydown", handleTabClose);
  };
}, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = document.querySelector('[role="dialog"]');
    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ];
    const focusableEls =
      panel?.querySelectorAll<HTMLElement>(focusableSelectors.join(",")) || [];

    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    const handleTrapTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab — назад
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        // Tab — вперед
        if (document.activeElement === lastEl) {
          e.preventDefault();
          handleClose(); // 👈 закриває панель
        }
      }
    };

    document.addEventListener("keydown", handleTrapTab);
    return () => document.removeEventListener("keydown", handleTrapTab);
  }, [open]);

  return (
    <>
      <ToggleButton
        ref={toggleBtnRef} // 👈 додаємо ref
        onClick={() => setOpen(true)}
        aria-label="Suche öffnen"
      title="Suche öffnen"
        aria-expanded={open}
      >
        <FiSearch />
      </ToggleButton>

      {/* Напівпрозоре затемнення поза вікном пошуку */}
      <Overlay
        $active={open}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Панель пошуку */}
      <Panel
        $active={open}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Suche"
        tabIndex={open ? 0 : -1}
      >
        <Header>
          <CloseBtn
            onClick={handleClose}
            aria-label="Suche schließen"
            tabIndex={open ? 0 : -1}
          >
            <FiX />
          </CloseBtn>

          <SearchInput
            ref={inputRef}
            placeholder={isLoading ? "Lade Daten..." : "Suche nach Namen ..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            tabIndex={open ? 0 : -1} // <-- табуляція лише коли панель відкрита
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
                  {/* <PageTitle tabIndex={open ? 0 : -1}>{page}</PageTitle> */}
                  <PageTitle tabIndex={-1}>{page}</PageTitle>{" "}
                  {/* <-- не фокусується */}
                  <ul>
                    {items.map((entry, index) => {
                      const isLastItem =
                        index === items.length - 1 &&
                        page === Object.keys(grouped).slice(-1)[0];

                      return (
                        <li key={entry.path}>
                          <EntryLink
                            to={entry.path}
                            onClick={() => setOpen(false)}
                            tabIndex={open ? 0 : -1}
                            ref={isLastItem ? lastFocusableRef : null}
                          >
                            {entry.name}
                          </EntryLink>
                        </li>
                      );
                    })}
                  </ul>
                </Section>
              ))}
              {query && filtered.length === 0 && (
                <NoResults tabIndex={open ? 0 : -1}>
                  🔍 Keine Ergebnisse gefunden.
                </NoResults>
              )}
            </>
          )}
        </Body>
      </Panel>
    </>
  );
}
