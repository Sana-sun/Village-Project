// import { useState } from "react";
// import {
//   BurgerMenuContainer,
//   BurgerButton,
//   CloseButton,
//   ModalOverlay,
//   ModalContent,
//   MenuList,
//   MenuItem,
//   MenuItemName,
//   MenuItemArrow,
//   MenuSubList,
//   MenuSubItem,
//   FaItem,
// } from "./styles";
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { subcategories } from "../IconSearch/subcategories";

// function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
//   const location = useLocation();

//   // Групуємо підкатегорії за категоріями
//   const groupedCategories = subcategories.reduce((acc, subcategory) => {
//     const existingCategory = acc.find(
//       (cat) => cat.name === subcategory.category
//     );

//     if (existingCategory) {
//       existingCategory.items.push(subcategory);
//     } else {
//       acc.push({
//         name: subcategory.category,
//         items: [subcategory],
//       });
//     }

//     return acc;
//   }, [] as { name: string; items: typeof subcategories }[]);

//   const toggleExpand = (index: number) => {
//     setExpandedIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <BurgerMenuContainer>
//       {isOpen ? (
//         <CloseButton onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </CloseButton>
//       ) : (
//         <BurgerButton onClick={() => setIsOpen(true)}>
//           <FaBars />
//         </BurgerButton>
//       )}

//       {isOpen && (
//         <ModalOverlay onClick={() => setIsOpen(false)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <MenuList>
//               {groupedCategories.map((category, index) => {
//                 const categoryPath = category.items[0].path.split("#")[0];
//                 const isActive = location.pathname === categoryPath;
//                 const hasSub = category.items.length > 1;

//                 return (
//                   <div key={category.name}>
//                     {/* Категорія */}
//                     <MenuItem $active={isActive}>
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <MenuItemName
//                           to={categoryPath}
//                           $active={isActive}
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {category.name}
//                         </MenuItemName>

//                         {hasSub && (
//                           <MenuItemArrow
//                             $active={isActive}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               toggleExpand(index);
//                             }}
//                           >
//                             <FaItem>
//                               {expandedIndex === index ? (
//                                 <FaChevronUp />
//                               ) : (
//                                 <FaChevronDown />
//                               )}
//                             </FaItem>
//                           </MenuItemArrow>
//                         )}
//                       </div>
//                     </MenuItem>

//                     {/* Підкатегорії */}
//                     {expandedIndex === index && (
//                       <MenuSubList>
//                         {category.items.map((sub) => {
//                           const subActive =
//                             location.pathname + location.hash === sub.path;
//                           return (
//                             <MenuSubItem key={sub.name} $active={subActive}>
//                               <MenuItemName to={sub.path} $active={subActive} onClick={() => setIsOpen(false)}>
//                                 {sub.name}
//                               </MenuItemName>
//                             </MenuSubItem>
//                           );
//                         })}
//                       </MenuSubList>
//                     )}
//                   </div>
//                 );
//               })}
//             </MenuList>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </BurgerMenuContainer>
//   );
// }

// export default BurgerMenu;

// 2
// import { useState } from "react";
// import {
//   BurgerMenuContainer,
//   BurgerButton,
//   CloseButton,
//   ModalOverlay,
//   ModalContent,
//   MenuList,
//   MenuItem,
//   MenuItemName,
//   MenuItemArrow,
//   MenuSubList,
//   MenuSubItem,
//   FaItem,
//   SubcategoryTitle,
// } from "./styles";
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { subcategories } from "../IconSearch/subcategories";

// // Групуємо дані: Категорія → Підкатегорія → Фірми
// function groupData(data: typeof subcategories) {
//   const result: Record<string, Record<string, typeof subcategories>> = {};

//   data.forEach((item) => {

//     const { category, subCategory } = item;
//     if (!result[category]) result[category] = {};

//     const sub = subCategory || "_";
//     if (!result[category][sub]) result[category][sub] = [];

//     result[category][sub].push(item);
//   });

//   return result;
// }

// function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(
//     null
//   );
//   const location = useLocation();
//   const grouped = groupData(subcategories);

//   const toggleCategory = (category: string) => {
//     setExpandedCategory((prev) => (prev === category ? null : category));
//     setExpandedSubcategory(null); // скинути підкатегорію при зміні категорії
//   };

//   const toggleSubcategory = (subcategory: string) => {
//     setExpandedSubcategory((prev) =>
//       prev === subcategory ? null : subcategory
//     );
//   };

//   return (
//     <BurgerMenuContainer>
//       {isOpen ? (
//         <CloseButton onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </CloseButton>
//       ) : (
//         <BurgerButton onClick={() => setIsOpen(true)}>
//           <FaBars />
//         </BurgerButton>
//       )}

//       {isOpen && (
//         <ModalOverlay onClick={() => setIsOpen(false)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <MenuList>
//               {Object.entries(grouped).map(([categoryName, subMap]) => {
//                 // const categoryPath =
//                 //   Object.values(subMap)[0][0].path.split("#")[0];
//                 // Шукаємо спеціальний запис для лінку категорії
//                 const categoryLinkItem = Object.values(subMap)
//                   .flat()
//                   .find((item) => item.isCategoryLink);

//                 const categoryPath =
//                   categoryLinkItem?.path ||
//                   Object.values(subMap)[0][0].path.split("#")[0];

//                 const isCategoryExpanded = expandedCategory === categoryName;

//                 return (
//                   <div key={categoryName}>
//                     <MenuItem $active={location.pathname === categoryPath}>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <MenuItemName
//                           to={categoryPath}
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {categoryName}
//                         </MenuItemName>
//                         <MenuItemArrow
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toggleCategory(categoryName);
//                           }}
//                         >
//                           <FaItem>
//                             {isCategoryExpanded ? (
//                               <FaChevronUp />
//                             ) : (
//                               <FaChevronDown />
//                             )}
//                           </FaItem>
//                         </MenuItemArrow>
//                       </div>
//                     </MenuItem>

//                     {isCategoryExpanded && (
//                       <MenuSubList>
//                         {Object.entries(subMap).map(([subName, firms]) => {
//                           if (subName === "_") {
//                             // Без підкатегорії — просто список фірм
//                             return firms.map((firm) => {
//                               const active =
//                                 location.pathname + location.hash === firm.path;
//                               return (
//                                 <MenuSubItem key={firm.name} $active={active}>
//                                   <MenuItemName
//                                     to={firm.path}
//                                     onClick={() => setIsOpen(false)}
//                                   >
//                                     {firm.name}
//                                   </MenuItemName>
//                                 </MenuSubItem>
//                               );
//                             });
//                           } else {
//                             const isSubExpanded =
//                               expandedSubcategory === subName;
//                             return (
//                               <div key={subName}>
//                                 <MenuSubItem $active={false}>
//                                   <div
//                                     style={{
//                                       display: "flex",
//                                       justifyContent: "space-between",
//                                     }}
//                                   >
//                                     {/* Додаємо обробник події на клік для назви підкатегорії */}
//                                     <SubcategoryTitle
//                                       onClick={(e) => {
//                                         e.stopPropagation();
//                                         toggleSubcategory(subName); // відкриваємо підкатегорію при кліку на назву
//                                       }}
//                                     >
//                                       {subName}
//                                     </SubcategoryTitle>

//                                     <MenuItemArrow
//                                       onClick={(e) => {
//                                         e.stopPropagation();
//                                         toggleSubcategory(subName); // також можна відкривати підкатегорію через стрілку
//                                       }}
//                                     >
//                                       <FaItem>
//                                         {isSubExpanded ? (
//                                           <FaChevronUp />
//                                         ) : (
//                                           <FaChevronDown />
//                                         )}
//                                       </FaItem>
//                                     </MenuItemArrow>
//                                   </div>
//                                 </MenuSubItem>

//                                 {/* Підкатегорії */}
//                                 {isSubExpanded && (
//                                   <MenuSubList style={{ paddingLeft: "20px" }}>
//                                     {firms.map((firm) => {
//                                       const active =
//                                         location.pathname + location.hash ===
//                                         firm.path;
//                                       return (
//                                         <MenuSubItem
//                                           key={firm.name}
//                                           $active={active}
//                                         >
//                                           <MenuItemName
//                                             to={firm.path}
//                                             onClick={() => setIsOpen(false)}
//                                           >
//                                             {firm.name}
//                                           </MenuItemName>
//                                         </MenuSubItem>
//                                       );
//                                     })}
//                                   </MenuSubList>
//                                 )}
//                               </div>
//                             );
//                           }
//                         })}
//                       </MenuSubList>
//                     )}
//                   </div>
//                 );
//               })}
//             </MenuList>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </BurgerMenuContainer>
//   );
// }

// export default BurgerMenu;

// // 3
// import { useState } from "react";
// import {
//   BurgerMenuContainer,
//   BurgerButton,
//   CloseButton,
//   ModalOverlay,
//   ModalContent,
//   MenuList,
//   MenuItem,
//   MenuItemName,
//   MenuItemArrow,
//   MenuSubList,
//   MenuSubItem,
//   FaItem,
//   SubcategoryTitle,
// } from "./styles";
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { subcategories } from "../IconSearch/subcategories";

// // Групуємо дані: Категорія → Підкатегорія → Фірми
// function groupData(data: typeof subcategories) {
//   const result: Record<string, Record<string, typeof subcategories>> = {};

//   data.forEach((item) => {
//     const { category, subCategory } = item;
//     if (!result[category]) result[category] = {};

//     const sub = subCategory || "_";
//     if (!result[category][sub]) result[category][sub] = [];

//     result[category][sub].push(item);
//   });

//   return result;
// }

// function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(
//     null
//   );
//   const location = useLocation();
//   const grouped = groupData(subcategories);

//   const toggleCategory = (category: string) => {
//     setExpandedCategory((prev) => (prev === category ? null : category));
//     setExpandedSubcategory(null); // скинути підкатегорію при зміні категорії
//   };

//   const toggleSubcategory = (subcategory: string) => {
//     setExpandedSubcategory((prev) =>
//       prev === subcategory ? null : subcategory
//     );
//   };

//   return (
//     <BurgerMenuContainer>
//       {isOpen ? (
//         <CloseButton onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </CloseButton>
//       ) : (
//         <BurgerButton onClick={() => setIsOpen(true)}>
//           <FaBars />
//         </BurgerButton>
//       )}

//       {isOpen && (
//         <ModalOverlay onClick={() => setIsOpen(false)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <MenuList>
//               {Object.entries(grouped).map(([categoryName, subMap]) => {
//                 // const categoryPath =
//                 //   Object.values(subMap)[0][0].path.split("#")[0];
//                 // Шукаємо спеціальний запис для лінку категорії
//                 const categoryLinkItem = Object.values(subMap)
//                   .flat()
//                   .find((item) => item.isCategoryLink);

//                 const categoryPath =
//                   categoryLinkItem?.path ||
//                   Object.values(subMap)[0][0].path.split("#")[0];

//                 const isCategoryExpanded = expandedCategory === categoryName;

//                 return (
//                   <div key={categoryName}>
//                     <MenuItem $active={location.pathname === categoryPath}>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <MenuItemName
//                           to={categoryPath}
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {categoryName}
//                         </MenuItemName>
//                         <MenuItemArrow
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toggleCategory(categoryName);
//                           }}
//                         >
//                           <FaItem>
//                             {isCategoryExpanded ? (
//                               <FaChevronUp />
//                             ) : (
//                               <FaChevronDown />
//                             )}
//                           </FaItem>
//                         </MenuItemArrow>
//                       </div>
//                     </MenuItem>

//                     {isCategoryExpanded && (
//                       <MenuSubList>
//                         {Object.entries(subMap).map(([subName, firms]) => {
//                           if (subName === "_") {
//                             // Без підкатегорії — просто список фірм
//                             return firms
//                               .filter((firm) => !firm.isCategoryLink) // 🛑 пропускаємо посилання на головну категорію
//                               .map((firm) => {
//                                 const active =
//                                   location.pathname + location.hash ===
//                                   firm.path;
//                                 return (
//                                   <MenuSubItem key={firm.name} $active={active}>
//                                     <MenuItemName
//                                       to={firm.path}
//                                       onClick={() => setIsOpen(false)}
//                                     >
//                                       {firm.name}
//                                     </MenuItemName>
//                                   </MenuSubItem>
//                                 );
//                               });
//                           } else {
//                             const isSubExpanded =
//                               expandedSubcategory === subName;
//                             return (
//                               <div key={subName}>
//                                 <MenuSubItem $active={false}>
//                                   <div
//                                     style={{
//                                       display: "flex",
//                                       justifyContent: "space-between",
//                                     }}
//                                   >
//                                     {/* Додаємо обробник події на клік для назви підкатегорії */}
//                                     <SubcategoryTitle
//                                       onClick={(e) => {
//                                         e.stopPropagation();
//                                         toggleSubcategory(subName); // відкриваємо підкатегорію при кліку на назву
//                                       }}
//                                     >
//                                       {subName}
//                                     </SubcategoryTitle>

//                                     <MenuItemArrow
//                                       onClick={(e) => {
//                                         e.stopPropagation();
//                                         toggleSubcategory(subName); // також можна відкривати підкатегорію через стрілку
//                                       }}
//                                     >
//                                       <FaItem>
//                                         {isSubExpanded ? (
//                                           <FaChevronUp />
//                                         ) : (
//                                           <FaChevronDown />
//                                         )}
//                                       </FaItem>
//                                     </MenuItemArrow>
//                                   </div>
//                                 </MenuSubItem>

//                                 {/* Підкатегорії */}
//                                 {isSubExpanded && (
//                                   <MenuSubList style={{ paddingLeft: "20px" }}>
//                                     {firms
//                                       .filter((firm) => !firm.isCategoryLink) // 🛑 пропускаємо посилання на головну категорію
//                                       .map((firm) => {
//                                         const active =
//                                           location.pathname + location.hash ===
//                                           firm.path;
//                                         return (
//                                           <MenuSubItem
//                                             key={firm.name}
//                                             $active={active}
//                                           >
//                                             <MenuItemName
//                                               to={firm.path}
//                                               onClick={() => setIsOpen(false)}
//                                             >
//                                               {firm.name}
//                                             </MenuItemName>
//                                           </MenuSubItem>
//                                         );
//                                       })}
//                                   </MenuSubList>
//                                 )}
//                               </div>
//                             );
//                           }
//                         })}
//                       </MenuSubList>
//                     )}
//                   </div>
//                 );
//               })}
//             </MenuList>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </BurgerMenuContainer>
//   );
// }

// export default BurgerMenu;

// // 4
// import { useState } from "react";
// import {
//   BurgerMenuContainer,
//   BurgerButton,
//   CloseButton,
//   ModalOverlay,
//   ModalContent,
//   MenuList,
//   MenuItem,
//   MenuItemName,
//   MenuItemArrow,
//   MenuSubList,
//   MenuSubItem,
//   FaItem,
//   SubcategoryTitle,
// } from "./styles";
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import useSearchList from "../SearchInfoTemplate/SearchInfo";

// function groupByPage(data: ReturnType<typeof useSearchList>["searchList"]) {
//   const result: Record<string, { name: string; path: string; category?: string | null }[]> = {};

//   data.forEach((item) => {
//     if (!result[item.page]) {
//       result[item.page] = [];
//     }

//     // Уникнення дублікатів за name
//     if (!result[item.page].some((i) => i.name === item.name)) {
//       result[item.page].push({
//         name: item.name || "",
//         path: item.path || "",
//         category: item.category || null,
//       });
//     }
//   });

//   return result;
// }

// function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [expandedPage, setExpandedPage] = useState<string | null>(null);
//   const location = useLocation();
//   const { searchList } = useSearchList();
//   const grouped = groupByPage(searchList);

//   const togglePage = (page: string) => {
//     setExpandedPage((prev) => (prev === page ? null : page));
//   };

//   return (
//     <BurgerMenuContainer>
//       {isOpen ? (
//         <CloseButton onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </CloseButton>
//       ) : (
//         <BurgerButton onClick={() => setIsOpen(true)}>
//           <FaBars />
//         </BurgerButton>
//       )}

//       {isOpen && (
//         <ModalOverlay onClick={() => setIsOpen(false)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <MenuList>
//               {Object.entries(grouped).map(([page, entries]) => {
//                 const pageSlug = "/" + page.toLowerCase().replace(/\s+/g, "-");
//                 const isExpanded = expandedPage === page;
//                 const isActive = location.pathname === pageSlug;

//                 return (
//                   <div key={page}>
//                     <MenuItem $active={isActive}>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                         }}
//                       >
//                         <MenuItemName to={pageSlug} onClick={() => setIsOpen(false)}>
//                           {page}
//                         </MenuItemName>
//                         <MenuItemArrow
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             togglePage(page);
//                           }}
//                         >
//                           <FaItem>{isExpanded ? <FaChevronUp /> : <FaChevronDown />}</FaItem>
//                         </MenuItemArrow>
//                       </div>
//                     </MenuItem>

//                     {isExpanded && (
//                       <MenuSubList>
//                         {entries.map((entry) => {
//                           const isEntryActive =
//                             location.pathname + location.hash === entry.path;
//                           return (
//                             <MenuSubItem key={entry.path} $active={isEntryActive}>
//                               <MenuItemName to={entry.path} onClick={() => setIsOpen(false)}>
//                                 {entry.name}
//                                 {entry.category ? ` (${entry.category})` : ""}
//                               </MenuItemName>
//                             </MenuSubItem>
//                           );
//                         })}
//                       </MenuSubList>
//                     )}
//                   </div>
//                 );
//               })}
//             </MenuList>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </BurgerMenuContainer>
//   );
// }

// export default BurgerMenu;

// 5 - name + category + name
// import { useState } from "react";
// import {
//   BurgerMenuContainer,
//   BurgerButton,
//   CloseButton,
//   ModalOverlay,
//   ModalContent,
//   MenuList,
//   MenuItem,
//   MenuItemName,
//   MenuItemArrow,
//   MenuSubList,
//   MenuSubItem,
//   FaItem,
//   SubcategoryTitle,
//   SkeletonItem,
// } from "./styles";
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import useSearchList from "../SearchInfoTemplate/SearchInfo";

// function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [expandedPage, setExpandedPage] = useState<string | null>(null);
//   const location = useLocation();
//   const { searchList, isLoading } = useSearchList();

//   const togglePage = (page: string) => {
//     setExpandedPage((prev) => (prev === page ? null : page));
//   };

//   // Унікалізуємо name для кожної сторінки
//   const grouped = searchList.reduce<
//     Record<
//       string,
//       {
//         ungrouped: { name: string; path: string }[];
//         groupedByCategory: Record<string, { name: string; path: string }[]>;
//       }
//     >
//   >((acc, item) => {
//     if (!acc[item.page]) {
//       acc[item.page] = {
//         ungrouped: [],
//         groupedByCategory: {},
//       };
//     }

//     const { name, path, category } = item;
//     if (!name || !path) return acc;

//     if (category) {
//       if (!acc[item.page].groupedByCategory[category]) {
//         acc[item.page].groupedByCategory[category] = [];
//       }
//       if (
//         !acc[item.page].groupedByCategory[category].some(
//           (el) => el.name === name
//         )
//       ) {
//         acc[item.page].groupedByCategory[category].push({ name, path });
//       }
//     } else {
//       if (!acc[item.page].ungrouped.some((el) => el.name === name)) {
//         acc[item.page].ungrouped.push({ name, path });
//       }
//     }

//     return acc;
//   }, {});

//   return (
//     <BurgerMenuContainer>
//       {isOpen ? (
//         <CloseButton onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </CloseButton>
//       ) : (
//         <BurgerButton onClick={() => setIsOpen(true)}>
//           <FaBars />
//         </BurgerButton>
//       )}

//       {isOpen && (
//         <ModalOverlay onClick={() => setIsOpen(false)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <MenuList>
//               {isLoading ? (
//                 <>
//                   <MenuItem>
//                     <div
//                       style={{
//                         fontStyle: "italic",
//                         padding: "8px 16px",
//                         color: "#666",
//                       }}
//                     >
//                       🔄 Daten werden geladen ...
//                     </div>
//                   </MenuItem>
//                   <SkeletonItem />
//                   <SkeletonItem />
//                   <SkeletonItem />
//                 </>
//               ) : (
//                 Object.entries(grouped).map(
//                   ([pageName, { ungrouped, groupedByCategory }]) => {
//                     const pageSlug =
//                       "/" + pageName.toLowerCase().replace(/\s+/g, "-");
//                     const isExpanded = expandedPage === pageName;

//                     return (
//                       <div key={pageName}>
//                         <MenuItem $active={location.pathname === pageSlug}>
//                           <div
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-between",
//                             }}
//                           >
//                             <MenuItemName
//                               to={pageSlug}
//                               onClick={() => setIsOpen(false)}
//                             >
//                               {pageName}
//                             </MenuItemName>
//                             <MenuItemArrow
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 togglePage(pageName);
//                               }}
//                             >
//                               <FaItem>
//                                 {isExpanded ? (
//                                   <FaChevronUp />
//                                 ) : (
//                                   <FaChevronDown />
//                                 )}
//                               </FaItem>
//                             </MenuItemArrow>
//                           </div>
//                         </MenuItem>

//                         {isExpanded && (
//                           <MenuSubList>
//                             {/* 🔹 Негруповані елементи */}
//                             {ungrouped.map((entry) => {
//                               const isActive =
//                                 location.pathname + location.hash ===
//                                 entry.path;
//                               return (
//                                 <MenuSubItem
//                                   key={entry.path}
//                                   $active={isActive}
//                                 >
//                                   <MenuItemName
//                                     to={entry.path}
//                                     onClick={() => setIsOpen(false)}
//                                   >
//                                     {entry.name}
//                                   </MenuItemName>
//                                 </MenuSubItem>
//                               );
//                             })}

//                             {/* 🔸 Групи по категоріях */}
//                             {Object.entries(groupedByCategory).map(
//                               ([categoryName, entries]) => (
//                                 <div key={categoryName}>
//                                   <SubcategoryTitle>
//                                     {categoryName}
//                                   </SubcategoryTitle>
//                                   {entries.map((entry) => {
//                                     const isActive =
//                                       location.pathname + location.hash ===
//                                       entry.path;
//                                     return (
//                                       <MenuSubItem
//                                         key={entry.path}
//                                         $active={isActive}
//                                       >
//                                         <MenuItemName
//                                           to={entry.path}
//                                           onClick={() => setIsOpen(false)}
//                                         >
//                                           {entry.name}
//                                         </MenuItemName>
//                                       </MenuSubItem>
//                                     );
//                                   })}
//                                 </div>
//                               )
//                             )}
//                           </MenuSubList>
//                         )}
//                       </div>
//                     );
//                   }
//                 )
//               )}
//             </MenuList>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </BurgerMenuContainer>
//   );
// }

// export default BurgerMenu;

// 6 - знову все
// import { useState } from "react";
// import {
//   BurgerMenuContainer,
//   BurgerButton,
//   CloseButton,
//   ModalOverlay,
//   ModalContent,
//   MenuList,
//   MenuItem,
//   MenuItemName,
//   MenuItemArrow,
//   MenuSubList,
//   MenuSubItem,
//   FaItem,
//   SubcategoryTitle,
//   SkeletonItem,
// } from "./styles";
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import useSearchList from "../SearchInfoTemplate/SearchInfo";

// function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [expandedPage, setExpandedPage] = useState<string | null>(null);
//   const location = useLocation();
//   const { searchList, isLoading } = useSearchList();

//   const togglePage = (page: string) => {
//     setExpandedPage((prev) => (prev === page ? null : page));
//   };

//   type GroupedEntry = {
//     hasCategory: boolean;
//     categories: Record<string, { name: string; path: string }[]>;
//     names: { name: string; path: string }[];
//   };

//   const grouped: Record<string, GroupedEntry> = {};

//   for (const { page, name, path, category } of searchList) {
//     if (!name || !path) continue;

//     if (!grouped[page]) {
//       grouped[page] = {
//         hasCategory: false,
//         categories: {},
//         names: [],
//       };
//     }

//     if (category) {
//       grouped[page].hasCategory = true;

//       if (!grouped[page].categories[category]) {
//         grouped[page].categories[category] = [];
//       }

//       if (!grouped[page].categories[category].some((e) => e.name === name)) {
//         grouped[page].categories[category].push({ name, path });
//       }
//     } else {
//       if (!grouped[page].names.some((e) => e.name === name)) {
//         grouped[page].names.push({ name, path });
//       }
//     }
//   }

//   return (
//     <BurgerMenuContainer>
//       {isOpen ? (
//         <CloseButton onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </CloseButton>
//       ) : (
//         <BurgerButton onClick={() => setIsOpen(true)}>
//           <FaBars />
//         </BurgerButton>
//       )}

//       {isOpen && (
//         <ModalOverlay onClick={() => setIsOpen(false)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <MenuList>
//               {isLoading ? (
//                 <>
//                   <MenuItem>
//                     <div
//                       style={{
//                         fontStyle: "italic",
//                         padding: "8px 16px",
//                         color: "#666",
//                       }}
//                     >
//                       🔄 Daten werden geladen ...
//                     </div>
//                   </MenuItem>
//                   <SkeletonItem />
//                   <SkeletonItem />
//                   <SkeletonItem />
//                 </>
//               ) : (
//                 Object.entries(grouped).map(
//                   ([pageName, { hasCategory, names, categories }]) => {
//                     const pageSlug =
//                       "/" + pageName.toLowerCase().replace(/\s+/g, "-");
//                     const isExpanded = expandedPage === pageName;

//                     return (
//                       <div key={pageName}>
//                         <MenuItem $active={location.pathname === pageSlug}>
//                           <div
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-between",
//                             }}
//                           >
//                             <MenuItemName
//                               to={pageSlug}
//                               onClick={() => setIsOpen(false)}
//                             >
//                               {pageName}
//                             </MenuItemName>
//                             <MenuItemArrow
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 togglePage(pageName);
//                               }}
//                             >
//                               <FaItem>
//                                 {isExpanded ? (
//                                   <FaChevronUp />
//                                 ) : (
//                                   <FaChevronDown />
//                                 )}
//                               </FaItem>
//                             </MenuItemArrow>
//                           </div>
//                         </MenuItem>

//                         {isExpanded && (
//                           <MenuSubList>
//                             {!hasCategory &&
//                               names.map((entry) => {
//                                 const isActive =
//                                   location.pathname + location.hash ===
//                                   entry.path;
//                                 return (
//                                   <MenuSubItem
//                                     key={entry.path}
//                                     $active={isActive}
//                                   >
//                                     <MenuItemName
//                                       to={entry.path}
//                                       onClick={() => setIsOpen(false)}
//                                     >
//                                       {entry.name}
//                                     </MenuItemName>
//                                   </MenuSubItem>
//                                 );
//                               })}

//                             {hasCategory &&
//                               Object.entries(categories).map(
//                                 ([categoryName, entries]) => (
//                                   <div key={categoryName}>
//                                     <SubcategoryTitle>
//                                       {categoryName}
//                                     </SubcategoryTitle>
//                                     {entries.map((entry) => {
//                                       const isActive =
//                                         location.pathname + location.hash ===
//                                         entry.path;
//                                       return (
//                                         <MenuSubItem
//                                           key={entry.path}
//                                           $active={isActive}
//                                         >
//                                           <MenuItemName
//                                             to={entry.path}
//                                             onClick={() => setIsOpen(false)}
//                                           >
//                                             {entry.name}
//                                           </MenuItemName>
//                                         </MenuSubItem>
//                                       );
//                                     })}
//                                   </div>
//                                 )
//                               )}
//                           </MenuSubList>
//                         )}
//                       </div>
//                     );
//                   }
//                 )
//               )}
//             </MenuList>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </BurgerMenuContainer>
//   );
// }

// export default BurgerMenu;

// 7 - end
import { useState } from "react";
import {
  BurgerMenuContainer,
  BurgerButton,
  CloseButton,
  ModalOverlay,
  ModalContent,
  MenuList,
  MenuItem,
  MenuItemName,
  MenuItemArrow,
  MenuSubList,
  MenuSubItem,
  SubcategoryTitle,
  SkeletonItem,
} from "./styles";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import useSearchList from "../SearchInfoTemplate/useSearchList";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedPage, setExpandedPage] = useState<string | null>(null);
  const location = useLocation();
  const { searchList, isLoading } = useSearchList();

  const togglePage = (page: string) => {
    setExpandedPage((prev) => (prev === page ? null : page));
  };

  type GroupedEntry = {
    hasCategory: boolean;
    categories: Record<string, { name: string; path: string }[]>;
    names: { name: string; path: string }[];
  };

  const grouped: Record<string, GroupedEntry> = {};

  for (const { page, name, path, category } of searchList) {
    if (!name || !path) continue;

    if (!grouped[page]) {
      grouped[page] = {
        hasCategory: false,
        categories: {},
        names: [],
      };
    }

    if (category) {
      grouped[page].hasCategory = true;

      if (!grouped[page].categories[category]) {
        grouped[page].categories[category] = [];
      }

      // Уникати повторів
      if (!grouped[page].categories[category].some((e) => e.name === name)) {
        grouped[page].categories[category].push({ name, path });
      }
    } else {
      // ⛔️ Виключити NAME для "Handwerkgewerbe & Dienstleistungen"
      if (page !== "Handwerkgewerbe & Dienstleistungen") {
        if (!grouped[page].names.some((e) => e.name === name)) {
          grouped[page].names.push({ name, path });
        }
      }
    }
  }

  return (
    <BurgerMenuContainer>
      {isOpen ? (
        <CloseButton onClick={() => setIsOpen(false)}>
          <FaTimes />
        </CloseButton>
      ) : (
        <BurgerButton onClick={() => setIsOpen(true)}>
          <FaBars />
        </BurgerButton>
      )}

      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <MenuList>
              {isLoading ? (
                <>
                  <MenuItem>
                    <div
                      style={{
                        fontStyle: "italic",
                        padding: "8px 16px",
                        color: "#666",
                      }}
                    >
                      🔄 Daten werden geladen ...
                    </div>
                  </MenuItem>
                  <SkeletonItem />
                  <SkeletonItem />
                  <SkeletonItem />
                </>
              ) : (
                Object.entries(grouped).map(
                  ([pageName, { hasCategory, names, categories }]) => {
                    const pageSlug =
                      "/" + pageName.toLowerCase().replace(/\s+/g, "-");
                    const isExpanded = expandedPage === pageName;

                    return (
                      <div key={pageName}>
                        <MenuItem $active={location.pathname === pageSlug}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <MenuItemName
                              to={pageSlug}
                              onClick={() => setIsOpen(false)}
                            >
                              {pageName}
                            </MenuItemName>
                            <MenuItemArrow
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePage(pageName);
                              }}
                            >
                              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                            </MenuItemArrow>
                          </div>
                        </MenuItem>

                        {isExpanded && (
                          <MenuSubList>
                            {/* 🔹 Тільки якщо немає категорій і це не "Handwerkgewerbe & Dienstleistungen" */}
                            {pageName !==
                              "Handwerkgewerbe & Dienstleistungen" &&
                              !hasCategory &&
                              names.map((entry) => {
                                const isActive =
                                  location.pathname + location.hash ===
                                  entry.path;
                                return (
                                  <MenuSubItem
                                    key={entry.path}
                                    $active={isActive}
                                  >
                                    <MenuItemName
                                      to={entry.path}
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {entry.name}
                                    </MenuItemName>
                                  </MenuSubItem>
                                );
                              })}

                            {/* 🔸 Якщо є категорії — завжди показуємо */}
                            {Object.entries(categories).map(
                              ([categoryName, entries]) => (
                                <div key={categoryName}>
                                  <SubcategoryTitle>
                                    {categoryName}
                                  </SubcategoryTitle>

                                  {pageName !==
                                    "Handwerkgewerbe & Dienstleistungen" &&
                                    entries.map((entry) => {
                                      const isActive =
                                        location.pathname + location.hash ===
                                        entry.path;
                                      return (
                                        <MenuSubItem
                                          key={entry.path}
                                          $active={isActive}
                                        >
                                          <MenuItemName
                                            to={entry.path}
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {entry.name}
                                          </MenuItemName>
                                        </MenuSubItem>
                                      );
                                    })}
                                </div>
                              )
                            )}
                          </MenuSubList>
                        )}
                      </div>
                    );
                  }
                )
              )}
            </MenuList>
          </ModalContent>
        </ModalOverlay>
      )}
    </BurgerMenuContainer>
  );
}

export default BurgerMenu;
