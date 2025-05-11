import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh; 
`;

export const MainContent = styled.main`
  flex: 1;
  margin: 40px 60px;

  @media (max-width: 768px) {
    margin: 40px 30px;
  }
`;

export const ScrollButton = styled.button`
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
  font-size: 24px;

  &:hover {
    background-color: #ff3385;
    background-color: #338bff;
  }

  &:focus {
    outline: none; 
  }
`;
