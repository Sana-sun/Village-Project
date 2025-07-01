// // BurgerMenuIcon.tsx
// import { useState } from "react";
// import { FiX, FiHome, FiMenu } from "react-icons/fi";

// import {allPathInfo} from "../../context/SearchAllPath/allPathInfo"; // ⬅️ or however you import your entries
// import { CloseButton, LogoLink, MenuCategory, MenuGroup, MenuPageLink, MenuItemLink, MenuSection, OpenButton, SidebarContainer, SidebarContent, SidebarOverlay } from "./styles";

// type MenuItem = {
//   page: string;
//   name: string;
//   path: string;
//   category?: string;
//   categoryPath?: string;
// };

// export default function BurgerMenuIcon() {
//   const [open, setOpen] = useState(false);

//   // Групування за сторінками і категоріями
//   const grouped = allPathInfo.reduce<Record<string, { [category: string]: MenuItem[] }>>((acc, item) => {
//     if (!acc[item.page]) acc[item.page] = {};
//     const category = item.category || "__uncategorized__";
//     if (!acc[item.page][category]) acc[item.page][category] = [];
//     acc[item.page][category].push(item);
//     return acc;
//   }, {});

//   return (
//     <>
//       <OpenButton onClick={() => setOpen(true)} title="Menü öffnen" ><FiMenu /></OpenButton>
//       {open && (
//         <>
//           <SidebarOverlay onClick={() => setOpen(false)} />
//           <SidebarContainer>
//             <SidebarContent>
//               <CloseButton onClick={() => setOpen(false)}><FiX /></CloseButton>
//               <LogoLink to="/"><FiHome /> Schönwald</LogoLink>

//               <MenuGroup>
//                 {Object.entries(grouped).map(([pageName, categories]) => (
//                   <MenuSection key={pageName}>
//                     <h3>{pageName}</h3>
//                     {Object.entries(categories).map(([categoryName, items]) =>
//                       categoryName === "__uncategorized__" ? (
//                         items.map((item) => (
//                           <MenuItemLink to={item.path} key={item.name} onClick={() => setOpen(false)}>
//                             {item.name}
//                           </MenuItemLink>
//                         ))
//                       ) : (
//                         <div key={categoryName}>
//                           <MenuCategory to={items[0].categoryPath || "#"} onClick={() => setOpen(false)}>
//                             {categoryName}
//                           </MenuCategory>
//                         </div>
//                       )
//                     )}
//                   </MenuSection>
//                 ))}
//               </MenuGroup>
//             </SidebarContent>
//           </SidebarContainer>
//         </>
//       )}
//     </>
//   );
// }

// все є і клікабельне
// import { useState } from "react";
// import { FiX, FiHome, FiMenu } from "react-icons/fi";
// import { allPathInfo } from "../../context/SearchAllPath/allPathInfo";

// import {
//   CloseButton,
//   LogoLink,
//   MenuCategory,
//   MenuGroup,
//   MenuItemLink,
//   MenuPageLink,
//   MenuSection,
//   OpenButton,
//   SidebarContainer,
//   SidebarContent,
//   SidebarOverlay,
// } from "./styles";

// type MenuItem = {
//   page: string;
//   name: string;
//   path: string;
//   category?: string;
//   categoryPath?: string;
// };

// export default function BurgerMenuIcon() {
//   const [open, setOpen] = useState(false);

//   const grouped = allPathInfo.reduce<
//     Record<string, { [category: string]: MenuItem[] }>
//   >((acc, item) => {
//     const page = item.page;
//     const category = item.category || "__uncategorized__";

//     if (!acc[page]) acc[page] = {};
//     if (!acc[page][category]) acc[page][category] = [];

//     acc[page][category].push(item);
//     return acc;
//   }, {});

//   return (
//     <>
//       <OpenButton onClick={() => setOpen(true)} title="Menü öffnen">
//         <FiMenu />
//       </OpenButton>
//       {open && (
//         <>
//           <SidebarOverlay onClick={() => setOpen(false)} />
//           <SidebarContainer>
//             <SidebarContent>
//               <CloseButton onClick={() => setOpen(false)}>
//                 <FiX />
//               </CloseButton>
//               <LogoLink to="/" onClick={() => setOpen(false)}>
//                 <FiHome /> Schönwald
//               </LogoLink>

//               <MenuGroup>
//                 {Object.entries(grouped).map(([pageName, categories]) => {
//                   const pageSlug = "/" + pageName.toLowerCase().replace(/\s+/g, "-");
//                   return (
//                     <MenuSection key={pageName}>
//                       <MenuPageLink to={pageSlug} onClick={() => setOpen(false)}>
//                         {pageName}
//                       </MenuPageLink>

//                       {Object.entries(categories).map(([categoryName, items]) =>
//                         categoryName === "__uncategorized__" ? (
//                           items.map((item) => (
//                             <MenuItemLink
//                               to={item.path}
//                               key={item.name}
//                               onClick={() => setOpen(false)}
//                             >
//                               {item.name}
//                             </MenuItemLink>
//                           ))
//                         ) : (
//                           <MenuCategory
//                             to={items[0].categoryPath || "#"}
//                             key={categoryName}
//                             onClick={() => setOpen(false)}
//                           >
//                             {categoryName}
//                           </MenuCategory>
//                         )
//                       )}
//                     </MenuSection>
//                   );
//                 })}
//               </MenuGroup>
//             </SidebarContent>
//           </SidebarContainer>
//         </>
//       )}
//     </>
//   );
// }

// тільки назви сторінок
// import { useState } from "react";
// import { FiX, FiHome, FiMenu } from "react-icons/fi";
// import { allPathInfo } from "../../context/SearchAllPath/allPathInfo";

// import {
//   CloseButton,
//   LogoLink,
//   MenuGroup,
//   MenuPageLink,
//   MenuSection,
//   OpenButton,
//   SidebarContainer,
//   SidebarContent,
//   SidebarOverlay,
//   HerzText,
//   SunUpperHome,
// } from "./styles";

// import { GiFlowerEmblem } from "react-icons/gi";
// import { GiDandelionFlower } from "react-icons/gi";
// import { FaPagelines } from "react-icons/fa";

// function capitalizeWords(input: string) {
//   return input
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// export default function BurgerMenuIcon() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <OpenButton onClick={() => setOpen(true)} title="Menü öffnen">
//         <FiMenu />
//       </OpenButton>

//       {open && (
//         <>
//           <SidebarOverlay onClick={() => setOpen(false)} />
//           <SidebarContainer>
//             <SidebarContent>
//               <CloseButton onClick={() => setOpen(false)}>
//                 <FiX />
//               </CloseButton>
//               <LogoLink to="/" onClick={() => setOpen(false)}>
//                 <FiHome />
//                 Schönwald
//                 <SunUpperHome><GiFlowerEmblem style={{ color: "#FFD700", fontSize: "1rem" }} /></SunUpperHome>
//               </LogoLink>

//               <MenuGroup>
//                 <>
//                   {Array.from(new Set(allPathInfo.map((item) => item.page)))
//                     .sort((a, b) => a.localeCompare(b))
//                     .map((page) => {
//                       const pageSlug =
//                         "/" + page.toLowerCase().replace(/\s+/g, "-");
//                       return (
//                         <MenuSection key={page}>
//                           <MenuPageLink
//                             to={pageSlug}
//                             onClick={() => setOpen(false)}
//                           >
//                             {capitalizeWords(page)}
//                           </MenuPageLink>
//                         </MenuSection>
//                       );
//                     })}

//                   <HerzText>Danke, dass du uns besucht hast – komm bald wieder vorbei! ❤️</HerzText>

//                 </>
//               </MenuGroup>
//             </SidebarContent>
//           </SidebarContainer>
//         </>
//       )}
//     </>
//   );
// }

// додаємо список категорій

// import { useState } from "react";
// import { FiX, FiHome, FiMenu } from "react-icons/fi";
// import { allPathInfo } from "../../context/SearchAllPath/allPathInfo";

// import {
//   CloseButton,
//   LogoLink,
//   MenuGroup,
//   MenuPageLink,
//   MenuSection,
//   OpenButton,
//   SidebarContainer,
//   SidebarContent,
//   SidebarOverlay,
//   HerzText,
//   SunUpperHome,
//   MenuCategory,
// } from "./styles";

// import { GiFlowerEmblem } from "react-icons/gi";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// function capitalizeWords(input: string) {
//   return input
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// export default function BurgerMenuIcon() {
//   const [open, setOpen] = useState(false);
//   const [expandedCategories, setExpandedCategories] = useState(false);
//   return (
//     <>
//       <OpenButton onClick={() => setOpen(true)} title="Menü öffnen">
//         <FiMenu />
//       </OpenButton>

//       {open && (
//         <>
//           {" "}
//           <SidebarOverlay onClick={() => setOpen(false)} />{" "}
//           <SidebarContainer>
//             {" "}
//             <SidebarContent>
//               {" "}
//               <CloseButton onClick={() => setOpen(false)}>
//                 {" "}
//                 <FiX />{" "}
//               </CloseButton>{" "}
//               <LogoLink to="/" onClick={() => setOpen(false)}>
//                 {" "}
//                 <FiHome /> Schönwald{" "}
//                 <SunUpperHome>
//                   <GiFlowerEmblem
//                     style={{ color: "#FFD700", fontSize: "1rem" }}
//                   />
//                 </SunUpperHome>{" "}
//               </LogoLink>
//               <MenuGroup>
//                 <>
//                   {Array.from(new Set(allPathInfo.map((item) => item.page)))
//                     .sort((a, b) => a.localeCompare(b))
//                     .map((page) => {
//                       const pageSlug =
//                         "/" + page.toLowerCase().replace(/\s+/g, "-");
//                       const isHandwerk =
//                         page === "Handwerkgewerbe & Dienstleistungen";

//                       return (
//                         <MenuSection key={page}>
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "space-between",
//                             }}
//                           >
//                             <MenuPageLink
//                               to={pageSlug}
//                               onClick={() => setOpen(false)}
//                             >
//                               {capitalizeWords(page)}
//                             </MenuPageLink>

//                             {isHandwerk && (
//                               <button
//                                 onClick={() =>
//                                   setExpandedCategories((prev) => !prev)
//                                 }
//                                 style={{
//                                   background: "transparent",
//                                   border: "none",
//                                   color: "white",
//                                   cursor: "pointer",
//                                   fontSize: "1.2rem",
//                                   padding: "6px 0 2px 0",
//                                   display: "flex",
//                                 }}
//                                 title={
//                                   expandedCategories ? "Schließen" : "Öffnen"
//                                 }
//                               >
//                                 {expandedCategories ? (
//                                   <FiChevronUp />
//                                 ) : (
//                                   <FiChevronDown />
//                                 )}
//                               </button>
//                             )}
//                           </div>

//                           {isHandwerk && expandedCategories && (
//                             <div
//                               style={{
//                                 marginTop: "0.5rem",
//                                 paddingLeft: "0.5rem",
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 gap: "6px",
//                               }}
//                             >
//                               {Array.from(
//                                 new Set(
//                                   allPathInfo
//                                     .filter(
//                                       (item) =>
//                                         item.page === page && item.category
//                                     )
//                                     .map((item) => item.category)
//                                 )
//                               ).map((category) => {
//                                 const categoryPath = allPathInfo.find(
//                                   (i) =>
//                                     i.page === page && i.category === category
//                                 )?.categoryPath;

//                                 return (
//                                   <MenuCategory
//                                     to={categoryPath || "#"}
//                                     key={category}
//                                     onClick={() => setOpen(false)}
//                                   >
//                                     {category}
//                                   </MenuCategory>
//                                 );
//                               })}
//                             </div>
//                           )}
//                         </MenuSection>
//                       );
//                     })}

//                   <HerzText>
//                     Danke, dass du uns besucht hast – komm bald wieder vorbei!
//                     ❤️
//                   </HerzText>
//                 </>
//               </MenuGroup>
//             </SidebarContent>
//           </SidebarContainer>
//         </>
//       )}
//     </>
//   );
// }

// with new useSearchList для категорій та allPathInfo для заг сторінок
import { useState } from "react";
import {
  FiX,
  FiHome,
  FiMenu,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { GiFlowerEmblem } from "react-icons/gi";
import {
  CloseButton,
  LogoLink,
  MenuGroup,
  MenuPageLink,
  MenuSection,
  OpenButton,
  SidebarContainer,
  SidebarContent,
  SidebarOverlay,
  HerzText,
  SunUpperHome,
  MenuCategory,
  SkeletonLine,
  BtnCategoryOpen,
} from "./styles";
import { allPathInfo } from "../../context/SearchAllPath/allPathInfo";
import useSearchList from "../SearchInfoTemplate/useSearchList";

function capitalizeWords(input: string) {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function BurgerMenuIcon() {
  const [open, setOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(false);
  const { searchList, isLoading } = useSearchList();

  const allPages = Array.from(
    new Set(allPathInfo.map((item) => item.page))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <>
      <OpenButton onClick={() => setOpen(true)} title="Menü öffnen">
        <FiMenu />
      </OpenButton>

      {open && (
        <>
          <SidebarOverlay onClick={() => setOpen(false)} />
          <SidebarContainer>
            <SidebarContent>
              <CloseButton onClick={() => setOpen(false)}>
                <FiX />
              </CloseButton>

              <LogoLink to="/" onClick={() => setOpen(false)}>
                <FiHome /> Schönwald
                <SunUpperHome>
                  <GiFlowerEmblem
                    style={{ color: "#FFD700", fontSize: "1rem" }}
                  />
                </SunUpperHome>
              </LogoLink>

              <MenuGroup>
                {allPages.map((page) => {
                  const pageSlug =
                    "/" + page.toLowerCase().replace(/\s+/g, "-");
                  const isHandwerk =
                    page === "Handwerkgewerbe & Dienstleistungen";

                  // Категорії тільки з useSearchList
                  const categories = isHandwerk
                    ? Array.from(
                        new Set(
                          searchList
                            .filter(
                              (item) => item.page === page && item.category
                            )
                            .map((item) => item.category)
                        )
                      )
                    : [];

                  return (
                    <MenuSection key={page}>
                      {/* Посилання на сторінку */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <MenuPageLink
                          to={pageSlug}
                          onClick={() => setOpen(false)}
                        >
                          {capitalizeWords(page)}
                        </MenuPageLink>

                        {isHandwerk && (
                          <BtnCategoryOpen
                            onClick={() =>
                              setExpandedCategories((prev) => !prev)
                            }
                            title={expandedCategories ? "Schließen" : "Öffnen"}
                          >
                            {expandedCategories ? (
                              <FiChevronUp />
                            ) : (
                              <FiChevronDown />
                            )}
                          </BtnCategoryOpen>
                        )}
                      </div>

                      {/* Категорії (підменю) */}
                      {isHandwerk && expandedCategories && (
                        <div
                          style={{ paddingLeft: "0.5rem", marginTop: "0.5rem" }}
                        >
                          {isLoading
                            ? Array.from({ length: 4 }).map((_, i) => (
                                <SkeletonLine key={i} />
                              ))
                            : categories.map((category) => {
                                const categoryPath = searchList.find(
                                  (item) =>
                                    item.page === page &&
                                    item.category === category
                                )?.path;

                                return (
                                  <MenuCategory
                                    key={category}
                                    to={categoryPath || "#"}
                                    onClick={() => setOpen(false)}
                                  >
                                    {category}
                                  </MenuCategory>
                                );
                              })}
                        </div>
                      )}
                    </MenuSection>
                  );
                })}

                <HerzText>
                  Danke, dass du uns besucht hast – komm bald wieder vorbei! ❤️
                </HerzText>
              </MenuGroup>
            </SidebarContent>
          </SidebarContainer>
        </>
      )}
    </>
  );
}
