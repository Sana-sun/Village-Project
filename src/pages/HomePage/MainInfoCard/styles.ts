import styled from "styled-components";

export const MainFoto = styled.div`
  width: 100%;
  /* aspect-ratio: 16 / 9; */
  aspect-ratio: 4 / 3; 

  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

export const MainTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  /* color: #0033a0; */
`;

export const MainText = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;
