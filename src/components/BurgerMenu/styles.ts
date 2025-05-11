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
  /* top: 0; */
  top: 100px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 80px;
`;

export const ModalContent = styled.div`
  background: #0033a0;
  color: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: absolute;
  /* top: 120px; */
  top: 40px;
  left: 60px;

  @media (max-width: 768px) {
     left: 30px;
  top: 20px;

  }

  @media (max-width: 433px) {
     left: 20px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li<{ $active?: boolean }>`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  /* padding: 10px 20px; */
  /* padding: 8px 20px; */
  border-radius: 40px;
  border: 1px solid ${({ $active }) => ($active ? "white" : "transparent")};
  background: ${({ $active }) => ($active ? "white" : "transparent")};
  color: ${({ $active }) => ($active ? "#0033A0" : "white")};
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid white;
  }
`;

export const MenuItemLabel = styled(Link)<{ $active?: boolean }>`
  flex-grow: 1;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#0033A0" : "white")};
  font-size: 18px;
  transition: color 0.3s ease;
  /* background: red; */
  padding: 8px 20px;
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
  list-style: none;
  margin-top: 8px;
  margin-left: 20px;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MenuSubItem = styled.li`
  font-size: 16px;
  color: white;
  padding: 4px 12px;
  border-left: 2px solid transparent;
  transition: all 0.2s ease;
`;