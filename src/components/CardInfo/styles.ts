import styled from "styled-components";

export const SloganText = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  background-color: #0033a0;
  background-color: #0033a0e8;
  /* background-color:#ff66b2; */
  border-radius: 20px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  text-align: center;

  /* color: #333; */
  /* border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

export const MainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: stretch; /* Вирівнювання по висоті */
  height: 500px;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr;
  }
`;

export const FotoContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 20px;

  overflow: hidden;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* ← це ключ */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  height: 100%;
  border-radius: 20px;

  border: 2px solid #0033a0;
  overflow-y: auto;

  box-sizing: border-box; /* важливо, щоб padding не порушував height */
  scroll-behavior: smooth;
  scrollbar-color: gray transparent;

  white-space: pre-wrap;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

  p {
    margin-bottom: 0.1em;
  }

  h1,
  h2,
  h3 {
    margin-top: 1.2em;
    margin-bottom: 0.5em;
  }

  ul,
  ol {
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    aspect-ratio: 4 / 3; // додали новий рядок
  }
`;
