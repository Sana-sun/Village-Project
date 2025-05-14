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
  FaItem,
  SubcategoryTitle,
} from "./styles";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { subcategories } from "../IconSearch/subcategories";

// Групуємо дані: Категорія → Підкатегорія → Фірми
function groupData(data: typeof subcategories) {
  const result: Record<string, Record<string, typeof subcategories>> = {};

  data.forEach((item) => {
    const { category, subCategory } = item;
    if (!result[category]) result[category] = {};

    const sub = subCategory || "_";
    if (!result[category][sub]) result[category][sub] = [];

    result[category][sub].push(item);
  });

  return result;
}

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(
    null
  );
  const location = useLocation();
  const grouped = groupData(subcategories);

  const toggleCategory = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
    setExpandedSubcategory(null); // скинути підкатегорію при зміні категорії
  };

  const toggleSubcategory = (subcategory: string) => {
    setExpandedSubcategory((prev) =>
      prev === subcategory ? null : subcategory
    );
  };

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
              {Object.entries(grouped).map(([categoryName, subMap]) => {
                const categoryPath =
                  Object.values(subMap)[0][0].path.split("#")[0];
                const isCategoryExpanded = expandedCategory === categoryName;

                return (
                  <div key={categoryName}>
                    <MenuItem $active={location.pathname === categoryPath}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <MenuItemName
                          to={categoryPath}
                          onClick={() => setIsOpen(false)}
                        >
                          {categoryName}
                        </MenuItemName>
                        <MenuItemArrow
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCategory(categoryName);
                          }}
                        >
                          <FaItem>
                            {isCategoryExpanded ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </FaItem>
                        </MenuItemArrow>
                      </div>
                    </MenuItem>

                    {isCategoryExpanded && (
                      <MenuSubList>
                        {Object.entries(subMap).map(([subName, firms]) => {
                          if (subName === "_") {
                            // Без підкатегорії — просто список фірм
                            return firms.map((firm) => {
                              const active =
                                location.pathname + location.hash === firm.path;
                              return (
                                <MenuSubItem key={firm.name} $active={active}>
                                  <MenuItemName
                                    to={firm.path}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {firm.name}
                                  </MenuItemName>
                                </MenuSubItem>
                              );
                            });
                          } else {
                            const isSubExpanded =
                              expandedSubcategory === subName;
                            return (
                              <div key={subName}>
                                <MenuSubItem $active={false}>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    {/* Додаємо обробник події на клік для назви підкатегорії */}
                                    <SubcategoryTitle
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSubcategory(subName); // відкриваємо підкатегорію при кліку на назву
                                      }}
                                    >
                                      {subName}
                                    </SubcategoryTitle>

                                    <MenuItemArrow
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSubcategory(subName); // також можна відкривати підкатегорію через стрілку
                                      }}
                                    >
                                      <FaItem>
                                        {isSubExpanded ? (
                                          <FaChevronUp />
                                        ) : (
                                          <FaChevronDown />
                                        )}
                                      </FaItem>
                                    </MenuItemArrow>
                                  </div>
                                </MenuSubItem>

                                {/* Підкатегорії */}
                                {isSubExpanded && (
                                  <MenuSubList style={{ paddingLeft: "20px" }}>
                                    {firms.map((firm) => {
                                      const active =
                                        location.pathname + location.hash ===
                                        firm.path;
                                      return (
                                        <MenuSubItem
                                          key={firm.name}
                                          $active={active}
                                        >
                                          <MenuItemName
                                            to={firm.path}
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {firm.name}
                                          </MenuItemName>
                                        </MenuSubItem>
                                      );
                                    })}
                                  </MenuSubList>
                                )}
                              </div>
                            );
                          }
                        })}
                      </MenuSubList>
                    )}
                  </div>
                );
              })}
            </MenuList>
          </ModalContent>
        </ModalOverlay>
      )}
    </BurgerMenuContainer>
  );
}

export default BurgerMenu;
