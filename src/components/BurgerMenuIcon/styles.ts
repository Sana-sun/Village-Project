// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export const SidebarOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.4);
//   z-index: 999;
// `;

// export const SidebarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 400px;
//   /* max-width: 340px; */
//   max-width: 90%;
//   height: 100vh;
//   background: #002c96;
//   color: white;
//   z-index: 1000;
//   box-shadow: 4px 0 16px rgba(0, 0, 0, 0.2);
//   transform: translateX(0%);
//   transition: transform 0.3s ease;
// `;

// export const SidebarContent = styled.div`
//   padding: 2rem 1.5rem 2rem;
//   height: 100%;
//   overflow-y: auto;
//   scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
// `;

// export const CloseButton = styled.button`
//   background: transparent;
//   border: none;
//   font-size: 1.8rem;
//   color: white;
//   cursor: pointer;
//   position: absolute;
//   top: 18px;
//   right: 18px;
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// export const LogoLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   color: white;
//   font-size: 1.2rem;
//   font-weight: 600;
//   text-decoration: none;
//   margin-bottom: 3rem;

//   svg {
//     margin-right: 0.5rem;
//     font-size: 1.4rem;
//   }

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// export const MenuGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.8rem;
// `;

// export const MenuSection = styled.div`
//   h3 {
//     margin-bottom: 0.8rem;
//     font-size: 1.05rem;
//     /* text-transform: uppercase; */
//     letter-spacing: 0.5px;
//     color: #cfdaf6;
//   }
// `;

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

// export const MenuPageLink = styled(Link)`
//   display: block;
//   color: #cfdaf6;
//   font-size: 1.05rem;
//   font-weight: 600;
//   /* text-transform: uppercase; */
//   /* margin-bottom: 0.6rem; */
//   text-decoration: none;
//   padding: 4px 6px;
//   border-radius: 6px;
//   transition: background 0.2s ease, color 0.2s ease;

//   &:hover {
//     color: #ffffff;
//     background: rgba(255, 255, 255, 0.08);
//   }
// `;

// export const MenuItemLink = styled(Link)`
//   display: block;
//   color: #e0eaff;
//   font-size: 0.9rem;
//   padding: 6px 12px;
//   margin-left: 12px;
//   border-left: 2px solid rgba(255, 255, 255, 0.2);
//   text-decoration: none;
//   transition: color 0.2s;

//   &:hover {
//     color: white;
//   }
// `;

// export const OpenButton = styled.button`
//   background: transparent;
//   border: none;
//   font-size: 24px;
//   /* color: #002c96; */
//   color: white;;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   transition: transform 0.2s;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// export const HerzText = styled.div`
//   background: transparent;
//   font-size: 1.1rem;
//   color: white;
//   text-align: center;
//   font-family: 'Segoe UI', sans-serif;
//   border: 1.5px solid #ffffff;
//   border-radius: 14px;
//   padding: 8px 12px;
//   margin-top: 2rem;
// `;

// start
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 420px;
  /* max-width: 340px; */
  max-width: 90%;
  height: 100vh;
  background: #002c96;
  color: white;
  z-index: 1000;
  box-shadow: 4px 0 16px rgba(0, 0, 0, 0.2);
  transform: translateX(0%);
  transition: transform 0.3s ease;
`;

export const SidebarContent = styled.div`
  padding: 2rem 1.5rem 2rem;
  height: 100%;
  overflow-y: auto;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
  scrollbar-width: thin;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 18px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 2rem;

  svg {
    margin-right: 0.5rem;
    font-size: 1.4rem;
  }

  &:hover {
    /* text-decoration: underline; */
  }
`;

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
  color: white;
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
  font-family: "Segoe UI", sans-serif;
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

// button up
export const BtnCategoryOpen = styled.button`
  color: white;
  background: none;
  border: none;
  font-size: 1.2rem;
  margin-top: 6px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

// скелетон
import { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

export const SkeletonLine = styled.div`
  height: 1rem;
  width: 70%;
  border-radius: 6px;
  margin: 8px 0;
  padding: 0.5rem;
  background: linear-gradient(
    90deg,
    rgba(191, 208, 233, 0.4) 0%,
    rgba(230, 236, 244, 0.2) 50%,
    rgba(191, 208, 233, 0.4) 100%
  );

  background-size: 200px 100%;
  animation: ${shimmer} 1.3s ease-in-out infinite;
`;
