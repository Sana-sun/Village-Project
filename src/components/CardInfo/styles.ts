import styled from "styled-components";

export const SloganText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  background-color: #0033a0;
  /* background-color:#ff66b2; */
  border-radius: 20px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
  }
`;

export const MainInfoContainer = styled.div`
  /* display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  } */

   display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 16px;
  /* margin-top: 20px; */

  @media (max-width: 1124px) {
    grid-template-columns: 1fr;
  }
`;

export const FotoContainer = styled.div`
  background-color: lightgray;
  padding: 20px;
  /* width: 650px; */
  /* height: 500px; */

  height: 500px;
  border-radius: 20px;

  @media (max-width: 768px) {
    /* max-width: 100%; */
    max-height: 300px;
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  /* width: 650px; */
  /* height: 500px; */

  max-height: 500px;
  border-radius: 20px;
  border: 2px solid #0033a0;

  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-color: gray transparent;

  white-space: pre-wrap;
  p {
    margin-bottom: 0.1em;
  }

  h1, h2, h3 {
    margin-top: 1.2em;
    margin-bottom: 0.5em;
  }

  ul, ol {
    /* margin-left: 1.5em; */
    /* margin-bottom: 1em; */
    margin: 0;
  }

  /* white-space: normal; */

  @media (max-width: 768px) {
    /* max-width: 100%; */
    max-height: 300px;
  }
`;

