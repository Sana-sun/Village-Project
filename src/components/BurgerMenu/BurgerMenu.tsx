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
    const existingCategory = acc.find((cat) => cat.name === subcategory.category);

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
                const isActive = location.pathname === category.items[0].path;
                const hasSub = category.items.length > 1;

                return (
                  <MenuItem key={category.name} $active={isActive}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <MenuItemName
                        to={category.items[0].path}
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
                          {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </MenuItemArrow>
                      )}
                    </div>

                    {expandedIndex === index && (
                      <MenuSubList>
                        {category.items.map((sub) => (
                          <MenuItem key={sub.name} $active={location.pathname === sub.path}>
                            <MenuItemName to={sub.path} $active={location.pathname === sub.path}>
                              {sub.name}
                            </MenuItemName>
                          </MenuItem>
                        ))}
                      </MenuSubList>
                    )}
                  </MenuItem>
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
