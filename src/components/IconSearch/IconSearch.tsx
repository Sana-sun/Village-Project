// import { useState, useEffect, useRef } from "react";
// import {
//   SearchMenuContainer,
//   SearchButton,
//   CloseButton,
//   ModalOverlay,
//   ModalContent,
//   MenuList,
//   MenuItem,
//   MenuItemLabel,
//   SearchInput,
// } from "./styles";
// import { FaTimes } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { subcategories } from "./subcategories";
// import { useLocation } from "react-router-dom";

// // Сортуємо підкатегорії в алфавітному порядку
// const sortedSubcategories = subcategories
//   .filter((subcategory) => !subcategory.isCategoryLink) // ⛔️ Пропускаємо категорієві лінки
//   .sort((a, b) => a.name.localeCompare(b.name));


// function IconSearch() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null); // 🔹 Реф для пошукового поля
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   // Фільтрація підкатегорій за пошуковим запитом
//   const filteredSubcategories = sortedSubcategories.filter((subcategory) =>
//     subcategory.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.substring(1); // "#kita-regenbogen" → "kita-regenbogen"
//       const target = document.getElementById(id);
//       if (target) {
//         const yOffset = -100;
//         const y =
//           target.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//     setSearchQuery("");
//   }, [location]);

//   const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       // Варіант 1: якщо є кілька збігів, відкриваємо список
//       if (filteredSubcategories.length > 1) {
//         setIsOpen(true); // Відображаємо список результатів
//       } else if (filteredSubcategories.length === 1) {
//         // Варіант 2: якщо тільки один збіг – відкриваємо його відразу
//         window.location.href = filteredSubcategories[0].path;
//         setIsOpen(false);
//       }
//     }
//   };

//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       inputRef.current.focus(); // 🔹 Автофокус на поле вводу
//     }
//   }, [isOpen]);

//   return (
//     <SearchMenuContainer>
//       {isOpen ? (
//         <CloseButton onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </CloseButton>
//       ) : (
//         <SearchButton onClick={() => setIsOpen(true)}>
//           <FiSearch />
//         </SearchButton>
//       )}

//       {isOpen && (
//         <ModalOverlay onClick={() => setIsOpen(false)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <SearchInput
//               ref={inputRef} // 🔹 Додаємо реф
//               type="text"
//               placeholder="Suche nach Namen ..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               onKeyDown={handleSearchKeyDown}
//             />
//             <MenuList>
//               {filteredSubcategories.map((subcategory) => (
//                 <MenuItem key={subcategory.name}>
//                   <MenuItemLabel
//                     to={subcategory.path}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {subcategory.name}
//                   </MenuItemLabel>
//                 </MenuItem>
//               ))}
//             </MenuList>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </SearchMenuContainer>
//   );
// }

// export default IconSearch;



// 2 - without isLoading state

// import { useState, useEffect, useRef } from "react";
// import {
//   SearchMenuContainer,
//   SearchButton,
//   CloseButton,
//   ModalOverlay,
//   ModalContent,
//   MenuList,
//   MenuItem,
//   MenuItemLabel,
//   SearchInput,
// } from "./styles";
// import { FaTimes } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { useLocation } from "react-router-dom";
// import useSearchList from "../../context/useSearchList";


// function IconSearch() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);
//   const location = useLocation();

//   const entries = useSearchList();

//   // Фільтровані результати пошуку
//   const filteredEntries = entries
//     .filter((entry) => entry.name?.toLowerCase().includes(searchQuery.toLowerCase()))
//     .sort((a, b) => (a.name || "").localeCompare(b.name || ""));

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       if (filteredEntries.length === 1) {
//         window.location.href = filteredEntries[0].path!;
//         setIsOpen(false);
//       } else if (filteredEntries.length > 1) {
//         setIsOpen(true);
//       }
//     }
//   };

//   // Переходи по якорях
//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.substring(1);
//       const target = document.getElementById(id);
//       if (target) {
//         const yOffset = -100;
//         const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//     setSearchQuery("");
//   }, [location]);

//   // Автофокус на поле вводу при відкритті
//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isOpen]);

//   return (
//     <SearchMenuContainer>
//       {isOpen ? (
//         <CloseButton onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </CloseButton>
//       ) : (
//         <SearchButton onClick={() => setIsOpen(true)}>
//           <FiSearch />
//         </SearchButton>
//       )}

//       {isOpen && (
//         <ModalOverlay onClick={() => setIsOpen(false)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <SearchInput
//               ref={inputRef}
//               type="text"
//               placeholder="Suche nach Namen ..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               onKeyDown={handleSearchKeyDown}
//             />
//             <MenuList>
//               {filteredEntries.map((entry) => (
//                 <MenuItem key={entry.path}>
//                   <MenuItemLabel to={entry.path!} onClick={() => setIsOpen(false)}>
//                     {entry.name}
//                   </MenuItemLabel>
//                 </MenuItem>
//               ))}
//             </MenuList>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </SearchMenuContainer>
//   );
// }

// export default IconSearch;


// 3

// import { useState, useEffect, useRef } from "react";
// import {
//   SearchMenuContainer,
//   SearchButton,
//   CloseButton,
//   ModalOverlay,
//   ModalContent,
//   MenuList,
//   MenuItem,
//   MenuItemLabel,
//   SearchInput,
// } from "./styles";
// import { FaTimes } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { useLocation } from "react-router-dom";
// import useSearchList from "../SearchInfoTemplate/SearchInfo";


// export default function IconSearch() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);
//   const location = useLocation();

//   const { searchList, isLoading } = useSearchList();

//   const filteredEntries = searchList
//     .filter((entry) => entry.name?.toLowerCase().includes(searchQuery.toLowerCase()))
//     .sort((a, b) => (a.name || "").localeCompare(b.name || ""));

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       if (filteredEntries.length === 1) {
//         window.location.href = filteredEntries[0].path!;
//         setIsOpen(false);
//       } else if (filteredEntries.length > 1) {
//         setIsOpen(true);
//       }
//     }
//   };

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.substring(1);
//       const target = document.getElementById(id);
//       if (target) {
//         const yOffset = -100;
//         const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//     setSearchQuery("");
//   }, [location]);

//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isOpen]);

//   return (
//     <SearchMenuContainer>
//       {isOpen ? (
//         <CloseButton onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </CloseButton>
//       ) : (
//         <SearchButton onClick={() => setIsOpen(true)}>
//           <FiSearch />
//         </SearchButton>
//       )}

//       {isOpen && (
//         <ModalOverlay onClick={() => setIsOpen(false)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <SearchInput
//               ref={inputRef}
//               type="text"
//               placeholder="Suche nach Namen ..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               onKeyDown={handleSearchKeyDown}
//               disabled={isLoading}
//             />

//             <MenuList>
//               {isLoading ? (
//                 <>
//                   <MenuItem><div style={{ opacity: 0.6 }}>🔄 Daten werden geladen ...</div></MenuItem>
//                 </>
//               ) : filteredEntries.length > 0 ? (
//                 filteredEntries.map((entry) => (
//                   <MenuItem key={entry.path}>
//                     <MenuItemLabel to={entry.path!} onClick={() => setIsOpen(false)}>
//                       {entry.name}
//                     </MenuItemLabel>
//                   </MenuItem>
//                 ))
//               ) : (
//                 <MenuItem><div>🔍 Keine Ergebnisse</div></MenuItem>
//               )}
//             </MenuList>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </SearchMenuContainer>
//   );
// }


// 4
import { useState, useEffect, useRef } from "react";
import {
  SearchMenuContainer,
  SearchButton,
  CloseButton,
  ModalOverlay,
  ModalContent,
  MenuList,
  MenuItem,
  MenuItemLabel,
  SearchInput,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import useSearchList from "../SearchInfoTemplate/useSearchList";

function IconSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const { searchList, isLoading } = useSearchList();

  const filteredEntries = searchList
    .filter((entry) =>
      entry.name?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (filteredEntries.length === 1) {
        window.location.href = filteredEntries[0].path!;
        setIsOpen(false);
      } else if (filteredEntries.length > 1) {
        setIsOpen(true);
      }
    }
  };

  // console.log("🔍 Фільтровані результати 2:", filteredEntries);
  // console.log("useSearchList:", searchList);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const target = document.getElementById(id);
      if (target) {
        const yOffset = -100;
        const y =
          target.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setSearchQuery("");
  }, [location]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <SearchMenuContainer>
      {isOpen ? (
        <CloseButton onClick={() => setIsOpen(false)}>
          <FaTimes />
        </CloseButton>
      ) : (
        <SearchButton onClick={() => setIsOpen(true)}>
          <FiSearch />
        </SearchButton>
      )}

      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <SearchInput
              ref={inputRef}
              type="text"
              placeholder={
                isLoading ? "Daten werden geladen ..." : "Suche nach Namen ..."
              }
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              disabled={isLoading}
            />
            <MenuList>
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <MenuItem key={i}>
                    <div style={{
                      width: "100%",
                      height: "20px",
                      background: "#dbe5f4",
                      borderRadius: "8px",
                      animation: "pulse 1.5s infinite",
                    }} />
                  </MenuItem>
                ))
              ) : filteredEntries.length > 0 ? (
                
                filteredEntries.map((entry) => (
                  <MenuItem key={entry.path}>
                    <MenuItemLabel
                      to={entry.path!}
                      onClick={() => setIsOpen(false)}
                    >
                      {entry.name}
                    </MenuItemLabel>
                  </MenuItem>
                ))
                
              ) : (
                <MenuItem>
                  <div>🔍 Keine Ergebnisse</div>
                </MenuItem>
              )}
            </MenuList>
          </ModalContent>
        </ModalOverlay>
      )}
    </SearchMenuContainer>
  );
}

export default IconSearch;
