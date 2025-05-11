import styled from "styled-components";

export const BtnWrapper = styled.button`
  background-color: #0033a0;
  color: white;
  padding: 10px 20px;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  /* max-width: 500px; */
  box-sizing: border-box;

  &:hover {
    background-color: #002080;
  }

   &:active {
    opacity: 0.9;
    transition: opacity 0.3s ease;
    transform: scale(0.98);
  }
`;