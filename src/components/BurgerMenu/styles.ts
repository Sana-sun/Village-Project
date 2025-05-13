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

export const CloseButton = styled(BurgerButton)``;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
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
  /* max-width: 450px; */
  max-width: 500px;
  position: absolute;
  top: 100px;
  left: 60px;
  overflow-y: auto;
  scrollbar-color: #fff transparent;
  max-height: 80vh;

  @media (max-width: 768px) {
    left: 30px;
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
  border-radius: 40px;
  background: ${({ $active }) => ($active ? "white" : "transparent")};
  transition: all 0.3s ease;
`;

export const MenuItemName = styled(Link)<{ $active?: boolean }>`
  display: block;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#0033A0" : "white")};
  font-size: 18px;
  padding: 10px 16px;
  border-radius: 40px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MenuItemArrow = styled.span<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  /* padding: 6px 20px; */
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#0033A0" : "lightgray")};
  transition: color 0.2s ease;
`;

// export const MenuSubList = styled.ul`
//   list-style: none;

//   /* list-style-position: inside; */
//   margin-top: 10px;
//   padding-left: 20px;
// `;

// export const MenuSubItem = styled.li<{ $active?: boolean }>`

//   font-size: 16px;
//   margin-bottom: 10px;
//   border-radius: 20px;
//   background: ${({ $active }) => ($active ? "white" : "transparent")};
//   transition: all 0.2s ease;

//   a {
//     display: block;
//     color: ${({ $active }) => ($active ? "#0033A0" : "white")};
//     padding: 8px 12px;
//     border-radius: 20px;
//     text-decoration: none;

//     &:hover {
//       background: rgba(255, 255, 255, 0.1);
//       background: rgba(242, 255, 4, 0.1);
//     }
//   }
// `;

export const MenuSubList = styled.ul`
  list-style: none;
  margin-top: 10px;
  padding-left: 0;
`;

export const MenuSubItem = styled.li<{ $active?: boolean }>`
  position: relative;
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 20px;
  background: ${({ $active }) => ($active ? "white" : "transparent")};
  transition: all 0.2s ease;
  padding-left: 28px;
  margin-left: 8px;

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 17px;
    width: 8px;
    height: 8px;

    width: 6px;
    height: 6px;

    background-color: ${({ $active }) => ($active ? "#0033A0" : "white")};
    border-radius: 50%;
  }

  a {
    display: block;
    color: ${({ $active }) => ($active ? "#0033A0" : "white")};
    padding: 8px 12px;
    border-radius: 20px;
    text-decoration: none;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const FaItem = styled.div`
  padding: 6px 20px;
  border-radius: 20px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
