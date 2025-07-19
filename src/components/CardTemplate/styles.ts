//  "1"
// import styled from "styled-components";

// export const PageWrapper = styled.div`
//   padding: 1rem;
// `;

// export const Heading = styled.h1`
//   font-size: 1.8rem;
//   margin-bottom: 0.5rem;
// `;

// export const IntroText = styled.p`
//   font-size: 1rem;
//   margin-bottom: 2rem;
// `;

// export const CardsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   justify-content: center;
// `;

// export const Card = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 12px;
//   padding: 1.5rem;
//   margin-bottom: 2rem;
//   max-width: 600px;
//   margin-inline: auto;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   background-color: #f9f9f9;
//   position: relative;
// `;

// export const CardImageWrapper = styled.div`
//   text-align: center;
//   margin-bottom: 1rem;

//   img {
//     width: 100%;
//     max-height: 250px;
//     object-fit: cover;
//     border-radius: 8px;
//   }
// `;

// export const CardSlogan = styled.h2`
//   color: #0033a0;
//   font-size: 1.4rem;
//   margin-bottom: 1rem;
//   word-break: break-word;
//   text-align: center;
// `;

// export const CardText = styled.p`
//   margin-bottom: 1rem;
//   white-space: pre-line;
// `;

// export const ContactInfo = styled.div`
//   font-size: 0.95rem;
//   line-height: 1.6;

//   a {
//     color: #0033a0;
//     text-decoration: underline;
//   }
// `;

// export const MoreButtonWrapper = styled.div`
//   text-align: right;
//   margin-top: 1rem;
// `;

// export const MoreButton = styled.button`
//   background-color: #0033a0;
//   color: #fff;
//   border: none;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;
//   cursor: pointer;
// `;

// export const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.6);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 999;
// `;

// export const ModalContent = styled.div`
//   background-color: #fff;
//   padding: 2rem;
//   border-radius: 12px;
//   max-width: 500px;
//   width: 90%;
//   text-align: left;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
// `;

// export const ModalTitle = styled.h3`
//   margin-bottom: 1rem;
//   color: #0033a0;
// `;

// export const ModalText = styled.p`
//   white-space: pre-line;
// `;

// export const ModalCloseButtonWrapper = styled.div`
//   text-align: right;
//   margin-top: 1.5rem;
// `;

// export const ModalCloseButton = styled.button`
//   background-color: #ccc;
//   border: none;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;
//   cursor: pointer;
// `;

// "2"
import styled, { keyframes, css } from "styled-components";

// const slideUp = keyframes`
//   from {
//     transform: translateY(100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// `;

// const slideDown = keyframes`
//   from {
//     transform: translateY(0);
//     opacity: 1;
//   }
//   to {
//     transform: translateY(100%);
//     opacity: 0;
//   }
// `;

export const PageWrapper = styled.div`
  /* padding: 1rem; */
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const IntroText = styled.p`
  /* white-space: pre-line; */
  font-size: 1.2rem;
  margin: 2rem 0 3rem 0;
  /* padding: 0 1rem; */
  line-height: 1.6;
  text-align: center;
`;

export const CardsContainer = styled.div<{ $itemCount?: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: ${({ $itemCount }) =>
    $itemCount === 1 ? "center" : "space-evenly"};
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

export const CardImageWrapper = styled.div`
  text-align: center;

  img {
    width: 100%;
    /* max-height: 350px; */
    /* max-height: 270px; */
    max-height: 330px;
    /* max-height: 280px; */
    object-fit: contain;
    border-radius: 8px;
  }
`;

export const CardSlogan = styled.h4`
  color: #0033a0;
  /* font-size: 1.4rem; */
  /* font-size: 1.2rem; */
  margin-bottom: 1rem;
  word-break: break-word;
  text-align: center;
`;

export const CardText = styled.p`
  margin-bottom: 1rem;
  white-space: pre-line;
  font-size: 1rem;
`;

export const CardTextItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const ContactInfo = styled.div`
  font-size: 0.9rem;
  /* font-size: 0.8rem; */
  line-height: 1.6;

  a {
    color: #0033a0;
    text-decoration: underline;
  }
`;

export const MoreButtonWrapper = styled.div`
  text-align: right;
  margin-top: 3rem;
  margin-top: auto;
`;

export const MoreButton = styled.button`
  background-color: #0033a0;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.15s ease;

  &:active {
    transform: scale(0.97);
    background-color: #002f8e;
  }
`;

export const MoreButtonText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// export const SlideOverlay = styled.div<{ $isVisible?: boolean }>`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   /* z-index: 10; */
//   background: white;
//   padding: 1.5rem;
//   border-top: 1px solid #ccc;
//   border-radius: 0 0 12px 12px;
//   box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
//   animation: ${({ $isVisible }) =>
//     $isVisible
//       ? css`
//           ${slideUp} 0.4s ease forwards;
//         `
//       : css`
//           ${slideDown} 0.4s ease forwards;
//         `};
// `;

export const SlideOverlay = styled.div<{ $isVisible?: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* z-index: 2; */
  background: white;
  padding: 1.5rem;
  border-top: 1px solid #ccc;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    `};

  transition: transform 0.4s ease, opacity 0.4s ease;
`;


export const SlideContent = styled.div`
  position: relative;
`;

export const SlideTitle = styled.h3`
  margin-bottom: 1rem;
  color: #0033a0;
`;

export const SlideText = styled.div`
  max-height: 400px; /* або інше обмеження, яке підходить під дизайн */
  overflow-y: auto;
  white-space: pre-line;
  font-size: 0.95rem;
  line-height: 1.6;
  padding-right: 0.5rem; /* невеличкий відступ для скролу */
`;

export const SlideCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0.4rem;
  background: #ccc;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #bbb;
  }
`;

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

// carousel
export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const Arrow = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  /* background: rgba(255,255,255,0.7); */
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  padding: 0.3rem;
  color: #0033a0; /* блакитна стрілка */

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background-color: #f5faff;
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  /* bottom: -50%; */
  top: 0.5%;
  /* left: 50%; */
  left: 46%;
  gap: 6px;
  margin-top: 1rem;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  /* background-color: ${({ active }) =>
    active ? "#fff82fff" : "rgba(255, 255, 255, 1)"}; */
  background-color: ${({ active }) =>
    active ? "#ffd22fff" : "rgba(255, 255, 255, 1)"};
  /* background-color: ${({ active }) =>
    active ? "black" : "rgba(255, 255, 255, 1)"}; */
  transition: background-color 0.3s;
`;

export const CategoryName = styled.h3`
  font-size: 1.2rem;
  color: #0033a0;
  color: #020c22bf;
  margin-bottom: 1.8rem;
  padding-left: 0.2rem;
  font-weight: 500;
`;
