// import styled from "@emotion/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchMenuContainer = styled.div`
  position: relative;
  z-index: 2;
`;

export const SearchButton = styled.button`
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

export const CloseButton = styled(SearchButton)`
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
  /* left: 0; */
  right: 0;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 80px;
`;

export const ModalContent = styled.div`
  /* background: #0033a0; */
  /* background: red; */
  background: white;
  /* color: white; */
  color: #0033a0;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  max-height: 400px;
  position: absolute;
  /* top: 120px; */
  top: 40px;
  right: 60px;

  overflow-y: auto;
  /* scrollbar-color: gray transparent; */
  scrollbar-color: #0033a0 transparent;

  @media (max-width: 768px) {
    left: 30px;
    top: 20px;
  max-width: 350px;

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
  color: ${({ $active }) => ($active ? "white" : "#0033a0;")};
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid #0033a0;
  }
`;

export const MenuItemLabel = styled(Link)<{ $active?: boolean }>`
  flex-grow: 1;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "darkblue" : " #0033A0")};
  font-size: 18px;
  transition: color 0.3s ease;
  /* background: red; */
  /* background: #d5e1fa; */
  /* background: #66b3ff; */
  background: #e4f1fe;
  background: #e4f1fe9a;
  border-radius: 20px;
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

export const IconBox = styled.div`
  font-size: 24px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 18px;
  border-radius: 25px;
  border: 2px solid #0033a0;
  outline: none;
  background: #f8f9fc;
  color: #0033a0;
  transition: all 0.3s ease-in-out;
  margin-bottom: 20px;
  
  &:hover {
    background: #e4f1fe;
  }

  &:focus {
    background: white;
    border-color: #002080;
    box-shadow: 0px 0px 10px rgba(0, 51, 160, 0.3);
  }
`;
