// import styled from "styled-components";

// export const LayoutWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   min-height: 100vh; 
// `;

// export const MainContent = styled.main`
//   flex: 1;
//   margin: 40px 60px;

//   @media (max-width: 768px) {
//     margin: 40px 30px;
//   }
// `;

// export const ScrollButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   bottom: 20px; 
//   right: 20px; 
//   background-color:  #ff66b2;
//   background-color:  #66b3ff;
//   color: white; 
//   border: none;
//   border-radius: 50%;
//   padding: 10px;
//   cursor: pointer;
//   /* font-size: 18px; */
//   /* font-size: 1.2rem; */
//   font-size: 1.5rem;
//   width: 50px;
//   height: 50px;

//   &:hover {
//     background-color: #ff3385;
//     background-color: #338bff;
//   }

//   &:focus {
//     outline: none; 
//   }

//     @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//     font-size: 1.2rem;
//   }

//   @media (max-width: 480px) {
//     width: 30px;
//     height: 30px;
//     font-size: 1rem;
//   }
// `;


import styled from "styled-components";

interface MainContentProps {
  $noMargin?: boolean;
}

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh; 
`;

export const MainContent = styled.main<MainContentProps>`
  flex: 1;
  margin: ${({ $noMargin }) => ($noMargin ? "0" : "40px 60px")};

  @media (max-width: 768px) {
    margin: ${({ $noMargin }) => ($noMargin ? "0" : "40px 30px")};
  }
`;

export const ScrollButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px; 
  right: 20px; 
  background-color:  #ff66b2;
  background-color:  #66b3ff;
  color: white; 
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  /* font-size: 18px; */
  /* font-size: 1.2rem; */
  font-size: 1.5rem;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #ff3385;
    background-color: #338bff;
  }

  &:focus {
    outline: none; 
  }

    @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`;
