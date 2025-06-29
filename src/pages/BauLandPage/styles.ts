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

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const PageWrapper = styled.div`
  /* padding: 1rem; */
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const IntroText = styled.p`
  font-size: 1rem;
  margin: 1.5rem 0 2rem 0;
  text-align: center;
`;

// export const CardsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 3rem;
//   /* gap: 10px; */
//   justify-content: center
  
// `;

export const CardsContainer = styled.div<{ itemCount: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: ${({ itemCount }) =>
    itemCount === 1 ? "center" : "space-evenly"};
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  /* padding: 1.2rem; */
`;

export const Card = styled.div`
border: 1px solid #ccc;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  /* max-width: 600px; */
  max-width: 550px;
  /* max-width: 450px; */
  /* margin-inline: auto; */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
`;

// export const Card = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 12px;
//   margin-bottom: 2rem;
//   flex: 1 1 calc(50% - 10px); /* 2 картки в рядок із gap */
//   max-width: 550px;
//   min-width: 280px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   background-color: #f9f9f9;
//   position: relative;
//   overflow: hidden;
// `;

export const CardImageWrapper = styled.div`
  text-align: center;

  img {
    width: 100%;
    /* max-height: 350px; */
    /* max-height: 270px; */
    max-height: 250px;
    object-fit: cover;
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
  margin-top: 1rem;
  
`;

export const MoreButton = styled.button`
  background-color: #0033a0;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
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

export const SlideOverlay = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1.5rem;
  border-top: 1px solid #ccc;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${slideUp} 0.4s ease forwards;
        `
      : css`
          ${slideDown} 0.4s ease forwards;
        `};
`;

export const SlideContent = styled.div`
  position: relative;
`;

export const SlideTitle = styled.h3`
  margin-bottom: 1rem;
  color: #0033a0;
`;

export const SlideText = styled.p`
  white-space: pre-line;
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const SlideCloseButton = styled.button`
  position: absolute;
  top: 0.4rem;
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
