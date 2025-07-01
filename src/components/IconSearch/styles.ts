// import styled from "@emotion/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchMenuContainer = styled.div`
  /* position: relative; */
  /* z-index: 1; */
`;

// export const SearchButton = styled.button`
//   background: transparent;
//   border: none;
//   font-size: 28px;
//   color: white;
//   cursor: pointer;

//   display: flex;
//   padding: 8px;

//   &:hover {
//     border-radius: 4px;
//     background: #002277;
//   }
// `;
export const SearchButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 8px;
  transition: background 0.3s ease, transform 0.5s ease-in-out;
  border-radius: 4px;

  &:hover {
    border-radius: 6px;
    background: rgba(0, 33, 127, 0.2);
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
  top: 0;
  /* top: 100px; */
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
  background: #ffffff;
  color: #002c96;
  padding: 2rem;
  border-radius: 14px;
  width: 90%;
  max-width: 540px;
  max-height: 80vh;
  max-height: 70vh;

  position: absolute;
  top: 100px;
  right: 60px;

  overflow-y: auto;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15); // сучасна тінь
  transition: all 0.3s ease;
  /* scrollbar-color: #002c96 transparent; */
  scrollbar-color: lightgray transparent;

  @media (max-width: 768px) {
    left: 30px;
    /* max-width: 360px; */
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

export const MenuItem = styled.li`
  margin-bottom: 1rem;
  border-radius: 10px;
  background: #f0f4ff;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #dbe8ff;
    transform: translateX(4px);
  }
`;

export const MenuItemLabel = styled(Link)`
  display: block;
  text-decoration: none;
  color: #002c96;
  padding: 12px 18px;
  font-size: 1rem;
  font-weight: 500;
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
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border-radius: 25px;
  border-radius: 12px;
  border: 1.5px solid #0033a0;
  outline: none;
  background: #f8f9fc;
  color: #0033a0;
  transition: all 0.3s ease-in-out;
  margin-bottom: 20px;
  z-index: 2;

 &:hover {
    background: #e4f1fe;
  }

  &:focus {
    background: white;
    border-color: #002080;
    box-shadow: 0px 0px 10px rgba(0, 51, 160, 0.3);
  }
`;

// from menu

export const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuSection = styled.div`
  h3 {
    margin-bottom: 0.8rem;
    font-size: 1.05rem;
    /* text-transform: uppercase; */
    letter-spacing: 0.5px;
    color: #cfdaf6;
  }
`;

// export const MenuCategory = styled(Link)`
//   display: block;
//   color: white;
//   font-weight: 500;
//   font-size: 0.95rem;
//   margin-bottom: 0.4rem;
//   padding: 6px 10px;
//   border-radius: 8px;
//   background: rgba(255, 255, 255, 0.1);
//   text-decoration: none;
//   transition: background 0.2s;

//   &:hover {
//     background: rgba(255, 255, 255, 0.18);
//   }
// `;
export const MenuCategory = styled(Link)`
   display: block;
  color: #e0eaff;
  font-size: 0.9rem;
  padding: 6px 12px;
  margin-left: 12px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }
`;


export const MenuPageLink = styled(Link)`
  display: block;
  color: #cfdaf6;
  font-size: 1.05rem;
  font-weight: 600;
  /* text-transform: uppercase; */
  /* margin-bottom: 0.6rem; */
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 6px;
  transition: background 0.2s ease, color 0.2s ease;
  margin-left: -rem;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const MenuItemLink = styled(Link)`
  display: block;
  color: #e0eaff;
  font-size: 0.9rem;
  padding: 6px 12px;
  margin-left: 12px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const OpenButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  /* color: #002c96; */
  color: white;;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const HerzText = styled.div`
  background: transparent;
  font-size: 1.1rem;
  color: white;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  border: 1.5px solid #ffffff;
  border-radius: 14px;
  padding: 8px 12px;
  margin-top: 1rem;
`;

export const SunUpperHome = styled.div`
  position: relative;
  top: -10px;
  left: 4px;
`;
