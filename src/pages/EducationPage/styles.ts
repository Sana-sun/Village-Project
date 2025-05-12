import styled from "styled-components";

export const IntroText = styled.h2`
display: flex;
justify-content: center;
align-items: center;
  margin-bottom: 24px;  
  /* white-space: pre-wrap; */
  /* line-height: 1.6; */
  color: #333;
`;

export const IntroWrapper = styled.div`
  white-space: pre-wrap;
  line-height: 1.6;
  color: #333;

  a {
    /* text-decoration: none; */
    color: #0033a0;
    /* color: black; */
  }
`;


export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NavWrapper = styled.div`
  padding: 0 0 30px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #222;

  span {
  }

  strong {
    font-weight: bold;
  }
`;

export const ArrowBox = styled.div`
  margin-top: 6px;
`;

export const ArrowButton = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  cursor: pointer;
  color: #222;

  svg {
    margin-right: 10px;
  }
`;

// card info
export const SloganText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  background-color: #0033a0;
  border-radius: 20px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;

 

  @media (max-width: 768px) {
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
  }
`;

export const FotoContainer = styled.div`
  background-color: lightgray;
  padding: 20px;
  width: 650px;
  height: 500px;
  border-radius: 20px;

  @media (max-width: 768px) {
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  width: 650px;
  height: 500px;
  border-radius: 20px;
  border: 2px solid #0033a0;

  @media (max-width: 768px) {
  }
`;
