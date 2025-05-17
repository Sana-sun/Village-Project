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
import { subcategories } from "./subcategories";
import { useLocation } from "react-router-dom";

// Сортуємо підкатегорії в алфавітному порядку
const sortedSubcategories = [...subcategories].sort((a, b) =>
  a.name.localeCompare(b.name)
);

function IconSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // 🔹 Реф для пошукового поля
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
    setSearchQuery("");
  }, [location]);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Варіант 1: якщо є кілька збігів, відкриваємо список
      if (filteredSubcategories.length > 1) {
        setIsOpen(true); // Відображаємо список результатів
      } else if (filteredSubcategories.length === 1) {
        // Варіант 2: якщо тільки один збіг – відкриваємо його відразу
        window.location.href = filteredSubcategories[0].path;
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus(); // 🔹 Автофокус на поле вводу
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
              ref={inputRef} // 🔹 Додаємо реф
              type="text"
              placeholder="Suche nach Namen ..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
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
