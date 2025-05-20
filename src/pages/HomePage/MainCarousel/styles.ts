// 2
// import styled from "styled-components";

// export const MainContext = styled.div`
//   padding: 0px 60px 40px 60px;
// `;

// export const CarouselContainer = styled.div`
//   width: 100%;
//   position: relative;
//   height: 90vh;
//   min-height: 300px;
//   overflow: hidden;
// `;

// export const MainImageContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: #ccc;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: center;
//     transition: transform 6s ease-in-out, opacity 2s ease-in-out;
//   }
// `;

// export const DotsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   bottom: 200px;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 1;
// `;

// export const Dot = styled.div<{ $isActive: boolean }>`
//   width: 12px;
//   height: 12px;
//   background-color: ${(props) => (props.$isActive ? "#66b3ff" : "#d3d3d3")};
//   border-radius: 50%;
//   margin: 0 6px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #338bff;
//   }
// `;

// export const FotoTextContainer = styled.div`
//   position: relative;
//   bottom: 200px;
//   left: 45%;
//   left: 0;
//   color: #fff;
//   font-size: 1.5rem;
//   background-color: rgba(0, 51, 160, 0.8);
//   padding: 16px 24px;
//   border-radius: 16px;
//   font-weight: bold;
//   text-align: center;
//   z-index: 1;

//   margin: 40px 60px;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//     padding: 12px 16px;
//   }
// `;



//3
import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  height: 90vh;
  min-height: 300px;
  overflow: hidden;

  @media (max-width: 1024px) {
      height: 80vh;
  }

  @media (max-width: 768px) {
    /* height: 50vh; або 60vh, залежно від бажаного розміру */
    height: 70vh; 
  }

  @media (max-width: 580px) {
    height: 60vh;
  }

   @media (max-width: 480px) {
    /* height: 40vh; */
    height: 50vh;
  }
`;

export const MainImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ccc;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 6s ease-in-out, opacity 2s ease-in-out;

    @media (max-width: 768px) {
      object-position: top; /* або 30% 50% — грайся значеннями */
    }
    
    @media (max-width: 768px) {
      object-position: 30%; 
    }
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  /* bottom: 5px; */
  left: 50%;
  transform: translateX(-50%);
  /* z-index: 1; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.$isActive ? "#66b3ff" : "#d3d3d3")};
  border-radius: 50%;
  margin: 0 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #338bff;
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

export const FotoTextContainer = styled.div`
  position: absolute;
  bottom: 30px;
  /* bottom: 20px; */
  right: 50%;
  transform: translateX(50%);

  color: #fff;
  font-size: 1.5rem;
  /* background-color: rgba(0, 51, 160, 0.8); */
  background-color: #002d96d6;
  padding: 16px 24px;
  border-radius: 16px;
  font-weight: bold;
  text-align: center;
  max-width: 90%;
  width: 100%;

   @media (max-width: 1240px) {
    font-size: 1.25rem;
    padding: 12px 16px;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

   @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 430px) {
    font-size: 0.6rem;
  }
`;
