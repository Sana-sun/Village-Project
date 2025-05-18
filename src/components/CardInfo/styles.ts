import styled from "styled-components";

export const SloganText = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
  background-color: #0033a0e8;
  border-radius: 1rem;
  padding: 0.75rem 1.5rem;
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: stretch;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FotoContainer = styled.div`
  flex: 1;
  /* padding: 1.25rem; */

  border-radius: 1rem;
  overflow: hidden;
  background-color: #e0e0e0;
  position: relative;
  aspect-ratio: 4 / 3;
  min-height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  /* padding: 1.25rem; */
  /* padding: 30px; */
  /* margin: 1.25rem; */
  border-radius: 1rem;
  border: 2px solid #0033a0;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  scrollbar-color: #0033a0 transparent;

  p {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    font-size: 1rem;
  }

  h1,
  h2,
  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  ul,
  ol {
    padding-left: 1.2rem;
    margin: 0.5rem 0;
  }

  a {
    color: #0033a0;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
  overflow-y: hidden;

    /* padding: 1rem; */
    /* background-color: red; */
  }
`;

export const InnerText = styled.div`
  padding: 1.25rem;
  /* aspect-ratio: 4 / 3; */
  /* min-height: 200px; */
  /* padding: 30px; */
  /* background-color: green; */
  /* max-height: 500px; */
  overflow-y: auto;

  @media (max-width: 768px) {
    height: auto;
  overflow-y: hidden;

  }
`;

export const LoadingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
`;
