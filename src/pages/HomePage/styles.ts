import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainContext = styled.div`
  padding: 40px 60px;

  @media (max-width: 768px) {
      padding: 40px 30px;
  }
`;


export const InfoCardsWrapper = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* height: 400px;  */
  gap: 16px;
  /* margin: 20px 0; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HistoryWrapper = styled.div`
 display: flex;
  
  img {
    width: 600px;
  }
`;

export const HistoryWrapper2 = styled.div`
 display: flex;
  
  img {
    width:750px;
  }
`;


export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  text-align: center;

  cursor: pointer;

  &:hover {
  }

  &:active {
    opacity: 0.9;
    transition: opacity 0.3s ease;
    transform: scale(0.98);
  }
`;