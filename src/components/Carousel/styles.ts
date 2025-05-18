// import styled from "styled-components";

// export const CarouselContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   position: relative;
//   height: 500px;
//   /* background-color: #f8f8f8; */
//   padding: 30px;
//   margin-top: 20px;

//   @media (max-width: 1240px) {
//     height: 500px;
//     padding: 20px;
//   } 

//   @media (max-width: 1024px) {
//     padding: 10px 30px;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     height: 350px;
//     padding: 0; 
//   }
// `;

// export const MainImageContainer = styled.div`
//   flex: 2;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   /* background-color: lightgray; */

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 20px;
//     /* border-radius: 10px; */

//     transition: transform 8s ease-in-out, opacity 3s ease-in-out;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
//   }
// `;

// export const SideImagesContainer = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 80%;
  
//   margin: 0 10px;
//   transition: transform 2s ease-in-out, opacity 1s ease-in-out;

//   @media (max-width: 768px) {
//     margin: 0 15px;
//   }

//   @media (max-width: 480px) {
//     margin: 0 5px;
//   }

//   @media (max-width: 1024px) {
//     display: none; /* Hide the side images on small screens */
//   }
// `;

// export const SideImage = styled.img`
//   width: 100%;
//   height: 70%;
//   object-fit: cover;
//   border-radius: 20px;
//   /* border-radius: 10px; */
//   /* opacity: 0.7; */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//   @media (max-width: 768px) {
//     height: 60%;
//   }

//   @media (max-width: 480px) {
//     height: 50%;
//   }
// `;

// export const NavButton = styled.div`
//   background-color: #9ceef1;
//   background-color: #7a2141;
//   background-color:  #66b3ff;
//   border: none;
//   color: white;
//   font-size: 1.5rem;
//   cursor: pointer;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   /* z-index: 1; */
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   &:hover {
//     background-color: #88d4e6;
//     background-color: #641230;
//     background-color: #338bff;
//   }

//   &:nth-child(1) {
//     left: -30px;
//   }

//   &:nth-child(5) {
//     right: -30px;
//   }

//   @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//     font-size: 1.2rem;

//     &:nth-child(1) {
//       left: -20px;
//     }

//     &:nth-child(5) {
//       right: -20px;
//     }
//   }

//   @media (max-width: 480px) {
//     width: 25px;
//     height: 25px;
//     font-size: 0.8rem;

//     &:nth-child(1) {
//       left: -15px;
//     }

//     &:nth-child(5) {
//       right: -15px;
//     }
//   }

//   @media (max-width: 350px) {
//     width: 20px;
//     height: 20px;
//     font-size: 0.6rem;

//     &:nth-child(1) {
//       left: -10px;
//     }

//     &:nth-child(5) {
//       right: -10px;
//     }
//     display: none;
//   }
// `;

// export const DotsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 20px;

//   @media (max-width: 768px) {
//     margin-top: 15px;
//   }

//   @media (max-width: 480px) {
//     margin-top: 10px;
//   }
// `;

// export const Dot = styled.div<{ $isActive: boolean }>`
//   width: 10px;
//   height: 10px;
//   background-color: ${(props) => (props.$isActive ? "#66b3ff;" : "#d3d3d3")};
//   border-radius: 50%;
//   margin: 0 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #338bff;
//   }
// `;


// export const LoadingText = styled.div`
//   position: absolute;
//   color: black;
//   color: white;
//   font-size: 2rem;
//   padding: 10px 20px;
//   border-radius: 8px;
//   text-align: center;
// `;




// 2

// import styled from "styled-components";

// export const CarouselContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   /* padding: 2rem 1rem; */
//   margin-top: 1.5rem;
//   position: relative;
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     padding: 1rem 0.5rem;
//   }
// `;

// export const MainImageContainer = styled.div`
//   flex: 2;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   aspect-ratio: 4 / 3;
//   width: 100%;
//   max-width: 900px;
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 6s ease-in-out, opacity 3s ease-in-out;
//   }
// `;

// export const SideImagesContainer = styled.div`
//   flex: 1;
//   display: flex;

//   flex-direction: column;
//   gap: 50px;

//   align-items: center;
//   justify-content: center;
//   margin: 0 1rem;

//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;

// export const SideImage = styled.img`
//   width: 100%;
//   height: auto;
//   max-height: 70%;
//   object-fit: cover;
//   border-radius: 1rem;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
//   margin-top: 100px;
// `;

// export const NavButton = styled.button`
//   position: absolute;
//   /* top: 50%; */
//   bottom: 50px;
//   right: 12%;
//   transform: translateY(-50%);
//   background-color: #0033a0;
//   color: white;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
//   border-radius: 50%;
//   width: 3rem;
//   height: 3rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 0.3s;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

//   &:hover {
//     background-color: #005ce6;
//   }

//   &.left {
//     left: -1.5rem;
//   }

//   &.right {
//     right: -1.5rem;
//   }

//   @media (max-width: 768px) {
//     width: 2.5rem;
//     height: 2.5rem;

//     &.left {
//       left: -1rem;
//     }

//     &.right {
//       right: -1rem;
//     }
//   }

//   @media (max-width: 480px) {
//     width: 2rem;
//     height: 2rem;
//     font-size: 1rem;

//     &.left,
//     &.right {
//       display: none;
//     }
//   }
// `;


// export const NavButtonLeft = styled.button`
//   /* position: absolute; */
//   /* top: 50%; */
//   bottom: 20px;
//   left: 0;
//   transform: translateY(-50%);
//   background-color: #0033a0;
//   color: white;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
//   border-radius: 50%;
//   width: 3rem;
//   height: 3rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 0.3s;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

//   &:hover {
//     background-color: #005ce6;
//   }

//   &.left {
//     left: -1.5rem;
//   }

//   &.right {
//     right: -1.5rem;
//   }

//   @media (max-width: 768px) {
//     width: 2.5rem;
//     height: 2.5rem;

//     &.left {
//       left: -1rem;
//     }

//     &.right {
//       right: -1rem;
//     }
//   }

//   @media (max-width: 480px) {
//     width: 2rem;
//     height: 2rem;
//     font-size: 1rem;

//     &.left,
//     &.right {
//       display: none;
//     }
//   }
// `;


// export const DotsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 1rem;
//   gap: 0.5rem;
// `;

// export const Dot = styled.div<{ $isActive: boolean }>`
//   width: 10px;
//   height: 10px;
//   background-color: ${(props) => (props.$isActive ? "#0033a0" : "#cccccc")};
//   border-radius: 50%;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #005ce6;
//   }
// `;

// export const LoadingText = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   font-size: 1.5rem;
//   padding: 0.75rem 1.5rem;
//   background-color: rgba(0, 0, 0, 0.5);
//   border-radius: 0.5rem;
//   text-align: center;
// `;


//3 

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
