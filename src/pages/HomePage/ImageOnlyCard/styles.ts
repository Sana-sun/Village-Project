import styled, { keyframes } from "styled-components";


// improve skeleton loading
const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const SkeletonBox = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 8px;
  /* background: linear-gradient(
    90deg,
    #eeeeee 25%,
    #dddddd 37%,
    #eeeeee 63%
  ); */
  background: linear-gradient(
    90deg,
    rgba(240, 240, 240, 0.9) 0%,
    rgba(220, 220, 220, 0.9) 50%,
    rgba(240, 240, 240, 0.9) 100%
  );
  background-size: 800px 104px;
  /* background-size: 1200px 100%; */
  animation: ${shimmer} 1.4s ease-in-out infinite;
`;

// geschichte cards

export const CardsContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "itemCount",
})<{ itemCount: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: ${({ itemCount }) =>
    itemCount === 1 ? "center" : "space-evenly"};
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

export const CardImageWrapper = styled.div`
  text-align: center;

  img {
    width: 100%;
    /* max-height: 350px; */
    /* max-height: 270px; */
    /* max-height: 400px; */
    /* max-height: 280px; */
    object-fit: cover;
    border-radius: 8px;
  }
`;