import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
  background-color: #0033a0;
  display: flex;
  color: white;
  height: 100px;
  /* height: 120px; */
  height: 80px;
  height: 90px;
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
`;

export const LogoText = styled.div`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
  color: #ffffffeb;
  color: #fdfdfe;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;

  @media (max-width: 430px) {
    font-size: 0.8rem;
  }
`;

export const LogoImage = styled.img`
  width: 120px;

   @media (max-width: 430px) {
    width: 80px;
  }
`;
