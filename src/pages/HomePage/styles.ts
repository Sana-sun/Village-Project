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

// geschichte text
export const Heading = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
  text-align: center;
`;

export const IntroText = styled.p`
  /* white-space: pre-line; */
  font-size: 1.2rem;
  margin: 2rem 0 4rem 0;
  /* padding: 0 1rem; */
  line-height: 1.6;
  text-align: center;
`;


// geschichte cards

export const CardsContainer = styled.div<{ itemCount: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: ${({ itemCount }) =>
    itemCount === 1 ? "center" : "space-evenly"};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem 1.5rem 1.5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(50% - 10px);
  min-width: 280px;
  max-width: 600px;

  border: 1px solid #ccc;
  border-radius: 12px;
  margin-bottom: 1.5rem;

  margin-inline: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;

   /* @media (min-width: 1024px) {
    flex: 1 1 calc(33.33% - 1rem);
  } */
   @media (min-width: 1440px) {
    flex: 1 1 calc(33.33% - 1rem);
  }
`;
