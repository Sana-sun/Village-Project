
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    /* padding: 1rem 0.5rem; */
  }
`;

export const MainImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 4 / 3;
  width: 100%;
  max-width: 900px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 6s ease-in-out, opacity 3s ease-in-out;
  }
`;

export const SideImageRightContainer = styled.div`
  flex: 1;
  display: flex;

  flex-direction: column;
  gap: 50px;

  align-items: center;
  justify-content: center;
  margin: 0 0 0 1rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SideImageLeftContainer = styled.div`
  flex: 1;
  display: flex;

  flex-direction: column;
  gap: 50px;

  align-items: center;
  justify-content: center;
  margin: 0 1rem 0 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SideImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 70%;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  margin-top: 100px;

  cursor: pointer

`;

export const NavButton = styled.button`
  background-color: #0033a0;
  color: white;
  border: none;
  font-size: 1.5rem;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  transition: background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #005ce6;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const NavButtonContainer = styled.button`
  border: none;
  background-color: none;
  background: transparent;
  margin: 0;
  padding: 0;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const Dot = styled.div<{ $isActive: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.$isActive ? "#0033a0" : "#cccccc")};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005ce6;
  }
`;

export const LoadingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  text-align: center;
`;

export const HistoryFotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 0;
    padding: 0;
  }

  img:nth-child(odd) {
    align-self: flex-start;
  }

  img:nth-child(even) {
    align-self: flex-end;
  }

  img {
    width: 100%;
    max-width: 800px;
  }

  @media (max-width: 1024px) {
    img:nth-child(odd), img:nth-child(even) {
      align-self: center; /* На малих екранах всі фото центруються */
    }

    img {
      max-width: 90%; /* Трохи зменшуємо максимальну ширину */
    }
  }
`;
