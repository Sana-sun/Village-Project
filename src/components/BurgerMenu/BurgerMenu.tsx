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
} from "./styles";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { subcategories } from "../IconSearch/subcategories";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const location = useLocation();

  // Групуємо підкатегорії за категоріями
  const groupedCategories = subcategories.reduce((acc, subcategory) => {
    const existingCategory = acc.find(
      (cat) => cat.name === subcategory.category
    );

    if (existingCategory) {
      existingCategory.items.push(subcategory);
    } else {
      acc.push({
        name: subcategory.category,
        items: [subcategory],
      });
    }

    return acc;
  }, [] as { name: string; items: typeof subcategories }[]);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
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
              {groupedCategories.map((category, index) => {
                const categoryPath = category.items[0].path.split("#")[0];
                const isActive = location.pathname === categoryPath;
                const hasSub = category.items.length > 1;

                return (
                  <div key={category.name}>
                    {/* Категорія */}
                    <MenuItem $active={isActive}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <MenuItemName
                          to={categoryPath}
                          $active={isActive}
                          onClick={() => setIsOpen(false)}
                        >
                          {category.name}
                        </MenuItemName>

                        {hasSub && (
                          <MenuItemArrow
                            $active={isActive}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(index);
                            }}
                          >
                            <FaItem>
                              {expandedIndex === index ? (
                                <FaChevronUp />
                              ) : (
                                <FaChevronDown />
                              )}
                            </FaItem>
                          </MenuItemArrow>
                        )}
                      </div>
                    </MenuItem>

                    {/* Підкатегорії */}
                    {expandedIndex === index && (
                      <MenuSubList>
                        {category.items.map((sub) => {
                          const subActive =
                            location.pathname + location.hash === sub.path;
                          return (
                            <MenuSubItem key={sub.name} $active={subActive}>
                              <MenuItemName to={sub.path} $active={subActive} onClick={() => setIsOpen(false)}>
                                {sub.name}
                              </MenuItemName>
                            </MenuSubItem>
                          );
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
