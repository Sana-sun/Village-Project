import { useState, useEffect } from "react";
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
import { subcategories } from "./subcategories";
import { useLocation } from "react-router-dom";

// Сортуємо підкатегорії в алфавітному порядку
const sortedSubcategories = [...subcategories].sort((a, b) =>
  a.name.localeCompare(b.name)
);

function IconSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

 const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(e.target.value);
};

  // Фільтрація підкатегорій за пошуковим запитом
  const filteredSubcategories = sortedSubcategories.filter((subcategory) =>
    subcategory.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.substring(1); // "#kita-regenbogen" → "kita-regenbogen"
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -100;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}, [location]);


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
              type="text"
              placeholder="Suche nach Namen ..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <MenuList>
              {filteredSubcategories.map((subcategory) => (
                <MenuItem key={subcategory.name}>
                  <MenuItemLabel
                    to={subcategory.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {subcategory.name}
                  </MenuItemLabel>
                </MenuItem>
              ))}
            </MenuList>
          </ModalContent>
        </ModalOverlay>
      )}
    </SearchMenuContainer>
  );
}

export default IconSearch;
