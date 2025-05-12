// import styled from "@emotion/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BurgerMenuContainer = styled.div`
  position: relative;
  z-index: 2;
`;

export const BurgerButton = styled.button`
  background: transparent;
  border: none;
  font-size: 28px;
  color: white;
  cursor: pointer;

  display: flex;
  padding: 8px;

  &:hover {
    border-radius: 4px;
    background: #002277;
  }
`;

export const CloseButton = styled(BurgerButton)`
  background: transparent;
  border: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  /* top: 100px; */
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const ModalContent = styled.div`
  background: #0033a0;
  color: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  max-width: 450px;
  position: absolute;
  top: 120px;
  top: 40px;
  top: 100px;
  left: 60px;
  overflow-y: auto;
  scrollbar-color: gray transparent;

  max-height: 80vh;

  @media (max-width: 768px) {
    left: 30px;
    top: 20px;
  }

  @media (max-width: 433px) {
    left: 20px;
  }
`;

export const MenuContainer = styled.div``;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li<{ $active?: boolean }>`
  margin-bottom: 20px;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 40px;
  border: 1px solid ${({ $active }) => ($active ? "white" : "transparent")};
  background: ${({ $active }) => ($active ? "white" : "transparent")};
  color: ${({ $active }) => ($active ? "#0033A0" : "white")};
  transition: all 0.3s ease;
    /* background: rgba(255, 255, 255, 0.1); */

`;

export const MenuItemName = styled(Link)<{ $active?: boolean }>`
  flex-grow: 1;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#0033A0" : "white")};
  font-size: 18px;
  transition: color 0.3s ease;
  padding: 10px;

  border: 1px solid transparent;
  border-radius: 20px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    list-style: none;
    padding-left: 0;
  }
`;

export const MenuItemArrow = styled.span<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 6px 20px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#0033A0" : "lightgray")};
  transition: color 0.2s ease;
`;

export const MenuSubList = styled.ul`
  list-style: disc;
  list-style-position: outside;
  margin-top: 20px;

  @media (max-width: 768px) {
    list-style: none;
    padding-left: 20px;
  }
`;

export const MenuSubItem = styled.li<{ $active?: boolean }>`
  font-size: 16px;
  color: white;
  padding: 10px 0;
  border: 1px solid transparent;
  border-radius: 20px;
  transition: all 0.2s ease;

  word-wrap: break-word;
  overflow-wrap: break-word;

  &:hover {
    border: 1px solid transparent;
  }
`;
