import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
  background-color: #0033a0;
  display: flex;
  color: white;
  height: 100px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  background-color: lightgray;
  padding: 20px;
  width: 650px;
  height: 500px;
`;

export const FotoWrapper = styled.div`
  display: flex;
  background-color: lightgray;
  padding: 20px;
  width: 650px;
  height: 500px;
  border-radius: 20px;
`;

export const CardWrapper = styled.div`
  width: 650px;
  height: 500px;
  width: 650px;
  border-radius: 20px;
`;

// logo
// export const LogoBtn = styled.button`
//   width: 200px;
//   width: 150px;
//   cursor: pointer;
//   border: none;
//   background-color: transparent;
// `;

// export const LogoImage = styled.img`
//   width: 100%;
// `;

// new logo
export const LogoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  /* width: 200px; */
  width: 150px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
  font-weight: bold;
  line-height: 1.4;
  word-spacing: 2px;
  text-align: center;
  /* text-shadow: 1px 1px 2px black; */
  letter-spacing: 2px;
`;

export const LogoImage = styled.img`
  width: 60px;
`;