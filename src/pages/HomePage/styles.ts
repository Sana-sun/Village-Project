import styled from "styled-components";

export const MainContext = styled.div`
  padding: 40px 60px;
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