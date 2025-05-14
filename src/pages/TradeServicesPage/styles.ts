import styled from "styled-components";

export const ScrollButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px; 
  right: 20px; 
  background-color:  #ff66b2;
  background-color:  #66b3ff;
  /* background-color:  hsl(221, 86%, 52%); */
  /* background-color:  #0033a0; */
  color: white; 
  border: none;
  /* border: 2px solid #0033a0; */
  /* border: 2px solid white; */
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
    /* background-color: #002080; */
    /* background-color: #002080; */
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