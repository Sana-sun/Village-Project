import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ScrollButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff66b2;
  background-color: #66b3ff;
  /* background-color:  hsl(221, 86%, 52%); */
  /* background-color:  #0033a0; */
  color: white;
  border: none;
  /* border: 2px solid #0033a0; */
  /* border: 2px solid white; */
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  /* font-size: 18px; */
  /* font-size: 1.2rem; */
  font-size: 1.5rem;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #ff3385;
    background-color: #338bff;
    /* background-color: #002080; */
    /* background-color: #002080; */
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`;

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// styles.ts
export const StyledNavLink = styled(NavLink)<{ $active?: boolean }>`
  text-decoration: none;
  display: block;
  text-align: center;

  color: ${({ $active }) => ($active ? "white" : "#0439ab")};
  background: ${({ $active }) => ($active ? "hsl(221, 95%, 34%)" : "white")};

  padding: 10px 20px;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: 12px;
  border: 2px solid #0439ab;
  width: 100%;
  box-sizing: border-box;

  cursor: pointer;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#002080" : "#e4f1fe")};
  }

  &:active {
    opacity: 0.9;
    transition: opacity 0.3s ease;
    transform: scale(0.98);
  }
`;
