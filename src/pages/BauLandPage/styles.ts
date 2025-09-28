import styled from "styled-components";

export const LargeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  width: 100%;
`;


export const LargeImage = styled.img`
  max-width: 100%;
  min-height: 100%;
  //max-height: 100vh; /* не вище висоти екрану */
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  //object-fit: contain; /* зберігає пропорції без обрізки */
`;
