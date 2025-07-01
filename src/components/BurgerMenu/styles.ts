// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const BurgerMenuContainer = styled.div`
//   position: relative;
//   z-index: 2;
// `;

// export const BurgerButton = styled.button`
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

// export const CloseButton = styled(BurgerButton)``;

// export const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.6);
//   display: flex;
//   justify-content: center;
//   align-items: start;
// `;

// export const ModalContent = styled.div`
//   background: #0033a0;
//   color: white;
//   padding: 30px;
//   border-radius: 12px;
//   width: 90%;
//   /* max-width: 450px; */
//   max-width: 500px;
//   position: absolute;
//   top: 100px;
//   left: 60px;
//   overflow-y: auto;
//   scrollbar-color: #fff transparent;
//   max-height: 80vh;

//   @media (max-width: 768px) {
//     left: 30px;
//   }

//   @media (max-width: 433px) {
//     left: 20px;
//   }
// `;

// export const MenuList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// export const MenuItem = styled.li<{ $active?: boolean }>`
//   margin-bottom: 20px;
//   border-radius: 40px;
//   /* background: ${({ $active }) => ($active ? "white" : "transparent")}; */
//   background: ${({ $active }) => ($active ? "#0843c3" : "transparent")};
//   /* color: ${({ $active }) => ($active ? "green" : "red")}; */

//   transition: all 0.3s ease;
// `;

// export const MenuItemName = styled(Link)<{ $active?: boolean }>`
//   display: block;
//   text-decoration: none;
//   /* color: ${({ $active }) => ($active ? "#0033A0" : "white")}; */
//   /* color: ${({ $active }) => ($active ? "#0033A0" : "white")}; */
//   font-size: 18px;
//   padding: 10px 16px;
//   border-radius: 40px;
//   transition: all 0.3s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//   }
// `;

// export const MenuItemArrow = styled.span<{ $active?: boolean }>`
//   display: flex;
//   align-items: center;
//   /* padding: 6px 20px; */
//   cursor: pointer;
//   color: ${({ $active }) => ($active ? "#0033A0" : "lightgray")};

//   transition: color 0.2s ease;
// `;

// // export const MenuSubList = styled.ul`
// //   list-style: none;

// //   /* list-style-position: inside; */
// //   margin-top: 10px;
// //   padding-left: 20px;
// // `;

// // export const MenuSubItem = styled.li<{ $active?: boolean }>`

// //   font-size: 16px;
// //   margin-bottom: 10px;
// //   border-radius: 12px;
// //   background: ${({ $active }) => ($active ? "white" : "transparent")};
// //   transition: all 0.2s ease;

// //   a {
// //     display: block;
// //     color: ${({ $active }) => ($active ? "#0033A0" : "white")};
// //     padding: 8px 12px;
// //     border-radius: 12px;
// //     text-decoration: none;

// //     &:hover {
// //       background: rgba(255, 255, 255, 0.1);
// //       background: rgba(242, 255, 4, 0.1);
// //     }
// //   }
// // `;

// export const MenuSubList = styled.ul`
//   list-style: none;
//   margin-top: 10px;
//   padding-left: 0;
// `;

// export const MenuSubItem = styled.li<{ $active?: boolean }>`
//   position: relative;
//   font-size: 16px;
//   margin-bottom: 10px;
//   border-radius: 12px;
//   background: ${({ $active }) => ($active ? "white" : "transparent")};
//   transition: all 0.2s ease;
//   padding-left: 28px;
//   margin-left: 8px;

//   &::before {
//     content: "";
//     position: absolute;
//     left: 10px;
//     top: 17px;
//     width: 8px;
//     height: 8px;

//     width: 6px;
//     height: 6px;

//     background-color: ${({ $active }) => ($active ? "#0033A0" : "white")};
//     border-radius: 50%;
//   }

//   a {
//     display: block;
//     color: ${({ $active }) => ($active ? "#0033A0" : "white")};
//     padding: 8px 12px;
//     border-radius: 12px;
//     text-decoration: none;

//     &:hover {
//       background: rgba(255, 255, 255, 0.1);
//     }
//   }
// `;

// export const FaItem = styled.div`
//   padding: 6px 20px;
//   border-radius: 12px;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//   }
// `;

// export const SubcategoryTitle = styled.div`
//   font-size: 16px;
//   padding: 8px 16px;
//   cursor: default;
//   color: white;
//   color: #ddd;
//   font-weight: 600;
//        /* background: rgba(255, 255, 255, 0.1); */

//        list-style: none;

// `;










// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const BurgerMenuContainer = styled.div`
//   position: relative;
//   z-index: 2;
// `;

// export const BurgerButton = styled.button`
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

// export const CloseButton = styled(BurgerButton)``;

// export const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.6);
//   display: flex;
//   justify-content: center;
//   align-items: start;
// `;

// export const ModalContent = styled.div`
//   background: #0033a0;
//   color: white;
//   padding: 30px;
//   border-radius: 12px;
//   width: 90%;
//   /* max-width: 450px; */
//   max-width: 500px;
//   position: absolute;
//   top: 100px;
//   left: 60px;
//   overflow-y: auto;
//   scrollbar-color: #fff transparent;
//   max-height: 80vh;

//   @media (max-width: 768px) {
//     left: 30px;
//   }

//   @media (max-width: 433px) {
//     left: 20px;
//   }
// `;

// export const MenuList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// export const MenuItem = styled.li<{ $active?: boolean }>`
//   margin-bottom: 20px;
//   border-radius: 40px;
//   background: ${({ $active }) => ($active ? "#0843c3" : "transparent")};

//   transition: all 0.3s ease;
// `;

// export const MenuItemName = styled(Link)<{ $active?: boolean }>`
//   display: block;
//   text-decoration: none;
//   color: ${({ $active }) => ($active ? "#0033A0" : "white")};
//   background: ${({ $active }) => ($active ? "white" : "transparent")};
//   font-size: 18px;
//   padding: 10px 16px;
//   border-radius: 40px;
//   transition: all 0.3s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//   }
// `;

// export const MenuItemArrow = styled.span<{ $active?: boolean }>`
//   display: flex;
//   align-items: center;
//   /* padding: 6px 20px; */
//   cursor: pointer;
//   color: ${({ $active }) => ($active ? "#0033A0" : "lightgray")};

//   transition: color 0.2s ease;
// `;

// // export const MenuSubList = styled.ul`
// //   list-style: none;

// //   /* list-style-position: inside; */
// //   margin-top: 10px;
// //   padding-left: 20px;
// // `;

// // export const MenuSubItem = styled.li<{ $active?: boolean }>`

// //   font-size: 16px;
// //   margin-bottom: 10px;
// //   border-radius: 12px;
// //   background: ${({ $active }) => ($active ? "white" : "transparent")};
// //   transition: all 0.2s ease;

// //   a {
// //     display: block;
// //     color: ${({ $active }) => ($active ? "#0033A0" : "white")};
// //     padding: 8px 12px;
// //     border-radius: 12px;
// //     text-decoration: none;

// //     &:hover {
// //       background: rgba(255, 255, 255, 0.1);
// //       background: rgba(242, 255, 4, 0.1);
// //     }
// //   }
// // `;

// export const MenuSubList = styled.ul`
//   list-style: none;
//   margin-top: 10px;
//   padding-left: 0;
// `;

// export const MenuSubItem = styled.li<{ $active?: boolean }>`
//   position: relative;
//   font-size: 16px;
//   margin-bottom: 10px;
//   border-radius: 12px;
//   background: ${({ $active }) => ($active ? "white" : "transparent")};
//   transition: all 0.2s ease;
//   padding-left: 28px;
//   margin-left: 8px;

//   &::before {
//     /* content: ""; */
//     position: absolute;
//     left: 10px;
//     top: 17px;
//     width: 8px;
//     height: 8px;

//     width: 6px;
//     height: 6px;

//     background-color: ${({ $active }) => ($active ? "#0033A0" : "white")};
//     border-radius: 50%;
//   }

//   a {
//     display: block;
//     color: ${({ $active }) => ($active ? "#0033A0" : "white")};
//     padding: 8px 12px;
//     border-radius: 12px;
//     text-decoration: none;

//     &:hover {
//       background: rgba(255, 255, 255, 0.1);
//     }
//   }
// `;

// export const FaItem = styled.div`
//   padding: 6px 20px;
//   border-radius: 12px;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//   }
// `;

// export const SubcategoryTitle = styled.div`
//   font-size: 16px;
//   padding: 8px 16px;
//   cursor: pointer;
//   color: white;
//   color: #ddd;
//   font-weight: 600;
//   width: 100%;
//   list-style: none;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//   border-radius: 12px;

//   }

//    &::before {
//     content: "";
//     position: absolute;
//     left: 10px;
//     top: 17px;
//     width: 8px;
//     height: 8px;

//     width: 6px;
//     height: 6px;

//     background-color: white;
//     border-radius: 50%;
//   }
// `;

// export const MenuSubItemArrow = styled.span<{ $active?: boolean }>`
//   display: flex;
//   align-items: center;
//   /* padding: 6px 20px; */
//   cursor: pointer;
//   color: ${({ $active }) => ($active ? "#0033A0" : "lightgray")};
//   background: rgba(255, 255, 255, 0.1);
//   transition: color 0.2s ease;
// `;














// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const BurgerMenuContainer = styled.div`
// `;

// export const BurgerButton = styled.button`
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

// export const CloseButton = styled(BurgerButton)``;

// export const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.6);
//   display: flex;
//   justify-content: center;
//   align-items: start;
// `;

// export const ModalContent = styled.div`
//   background: #0033a0;
//   /* background: #002c96; */
  
//   color: white;
//   padding: 30px;
//   /* border-radius: 12px; */
//   border-radius: 12px;
//   width: 90%;
//   /* max-width: 450px; */
//   max-width: 500px;

//   position: absolute;
//   top: 100px;
//   left: 60px;
//   overflow-y: auto;
//   scrollbar-color: #fff transparent;
//   max-height: 80vh;

//   @media (max-width: 768px) {
//     left: 30px;
//   }

//   @media (max-width: 433px) {
//     left: 20px;
//   }
// `;

// export const MenuList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// export const MenuItem = styled.li<{ $active?: boolean }>`
//   margin-bottom: 20px;
//   border-radius: 40px;
//   border-radius: 12px;
//   /* background: ${({ $active }) => ($active ? "#0843c3" : "transparent")}; */
//   /* background: ${({ $active }) => ($active ? "#e4f1fe9a" : "transparent")}; */
//   background: ${({ $active }) => ($active ? "#e4f1fe63" : "transparent")};

//   transition: all 0.3s ease;
// `;

// export const MenuItemName = styled(Link)<{ $active?: boolean }>`
//   display: block;
//   text-decoration: none;
//   color: ${({ $active }) => ($active ? "#0033A0" : "white")};
//   /* color: ${({ $active }) => ($active ? "#e4f1fe9a" : "red")}; */
//   background: ${({ $active }) => ($active ? "white" : "transparent")};
//   font-size: 18px;
//   padding: 10px 16px;
//   border-radius: 40px;
//   border-radius: 12px;

//   transition: all 0.3s ease;
//     width: 100%;
//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//   }
// `;

// export const MenuItemArrow = styled.span<{ $active?: boolean }>`
//   display: flex;
//   align-items: center;
//   /* padding: 6px 20px; */
//   cursor: pointer;
//   color: ${({ $active }) => ($active ? "#0033A0" : "lightgray")};

//   transition: color 0.2s ease;
// `;

// export const MenuSubList = styled.ul`
//   list-style: none;
//   margin-top: 10px;
//   padding-left: 12px;
//   border-left: 1px solid rgba(255, 255, 255, 0.2);
// `;

// export const MenuSubItem = styled.li<{ $active?: boolean }>`
//   font-size: 16px;
//   margin-bottom: 8px;
//   border-radius: 12px;
// /* 
//   background: ${({ $active }) => ($active ? "white" : "transparent")}; */
//   background: ${({ $active }) => ($active ? "#e4f1fe63" : "transparent")};
//   transition: background 0.3s, color 0.3s;
//   padding-left: 24px;
//   position: relative;

//   &::before {
//     content: "";
//     position: absolute;
//     left: 8px;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 6px;
//     height: 6px;
//     /* background-color: ${({ $active }) => ($active ? "#0033A0" : "white")}; */
//     background-color:white;
//     border-radius: 50%;
//   }

//   a {
//     display: block;
//     /* color: ${({ $active }) => ($active ? "#0033A0" : "white")}; */
//     color: white;
//     padding: 6px 12px;
//     border-radius: 12px;
//     text-decoration: none;
//     /* font-weight: ${({ $active }) => ($active ? 600 : 400)}; */

//     &:hover {
//       background: rgba(255, 255, 255, 0.08);
//     }
//   }
// `;

// export const FaItem = styled.div`
//   padding: 10px 20px;

//   border-radius: 12px;
//   display: flex;
//   align-items: center;

//   &:hover {
//     background: rgba(255, 255, 255, 0.08);
//   }
// `;

// // Назва підкатегорії
// export const SubcategoryTitle = styled.div`
//   font-size: 16px;
//   font-weight: 600;
//   padding: 6px 12px;
//   color: #ddd;
//   cursor: pointer;
//   border-radius: 12px;

//   transition: background 0.3s;
//   width: 100%;

//   &:hover {
//     background: rgba(255, 255, 255, 0.08);
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     left: 8px;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 6px;
//     height: 6px;
//     background-color: white;
//     border-radius: 50%;
//   }
// `;


// // Стрілка праворуч від підкатегорії
// export const MenuSubItemArrow = styled.span<{ $active?: boolean }>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   padding: 6px 10px;
//   color: ${({ $active }) => ($active ? "#0033A0" : "lightgray")};
//   border-radius: 12px;
//   transition: color 0.3s, background 0.3s;

//   &:hover {
//     background: rgba(255, 255, 255, 0.08);
//   }
// `;

// export const SkeletonItem = styled.div`
//   height: 24px;
//   margin: 12px 0;
//   border-radius: 8px;
//   background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
//   background-size: 400% 100%;
//   animation: pulse 1.2s ease-in-out infinite;

//   @keyframes pulse {
//     0% { background-position: 100% 50%; }
//     100% { background-position: 0 50%; }
//   }
// `;






import styled from "styled-components";
import { Link } from "react-router-dom";

export const BurgerMenuContainer = styled.div``;

export const BurgerButton = styled.button`
  background: transparent;
  border: none;
  font-size: 28px;
  color: #002c96;
  cursor: pointer;
  display: flex;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 44, 150, 0.1);
  }
`;

export const CloseButton = styled(BurgerButton)`
  color: #002c96;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  color: #002c96;
  padding: 2rem;
  border-radius: 14px;
  width: 92%;
  max-width: 540px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  scrollbar-color: #ccc transparent;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li<{ $active?: boolean }>`
  border-radius: 10px;
  margin-bottom: 16px;
  background: ${({ $active }) => ($active ? "#e4f1fe" : "transparent")};
  transition: background 0.3s ease;

  &:hover {
    background: #dbe8ff;
  }
`;

export const MenuItemName = styled(Link)`
  display: block;
  text-decoration: none;
  color: #002c96;
  padding: 12px 18px;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;

export const MenuItemArrow = styled.span`
  display: flex;
  align-items: center;
  color: #666;
  cursor: pointer;
  padding: 6px 10px;

  &:hover {
    color: #002c96;
  }
`;

export const MenuSubList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  margin-top: 0.5rem;
`;

export const MenuSubItem = styled.li<{ $active?: boolean }>`
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
  border-left: 3px solid #e4f1fe;
  padding-left: 12px;

  a {
    color: #002c96;
    text-decoration: none;
    display: block;
    padding: 6px 0;

    &:hover {
      color: #001b66;
      text-decoration: underline;
    }
  }
`;

export const SubcategoryTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #0033a0;
  background: #eef3fe;
  padding: 6px 12px;
  border-radius: 6px;
  margin-top: 1rem;
`;

export const SkeletonItem = styled.div`
  height: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background: linear-gradient(90deg, #f2f2f2 25%, #e0e0e0 50%, #f2f2f2 75%);
  background-size: 400% 100%;
  animation: pulse 1.2s ease-in-out infinite;

  @keyframes pulse {
    0% { background-position: 100% 50%; }
    100% { background-position: 0 50%; }
  }
`;