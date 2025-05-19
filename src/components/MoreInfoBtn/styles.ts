import styled from "styled-components";

export const BtnWrapper = styled.button<{ $active?: boolean }>`
  color: white;
  padding: 10px 20px;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 100%;
  /* max-width: 500px; */
  box-sizing: border-box;

  /* border: 2px solid #0033a0; */
  border: 2px solid #0439ab;
  /* background: ${({ $active }) => ($active ? "white" : "hsl(221, 95%, 34%)")};
  color: ${({ $active }) => ($active ? "#0439ab" : "white")}; */
  background: ${({ $active }) => ($active ? "hsl(221, 95%, 34%)" : "white")};
  color: ${({ $active }) => ($active ? "white" : "#0439ab")};


  &:hover {
    background-color: #002080;
    /* background: ${({ $active }) => ($active ? "#e4f1fe" : "#002080")}; */
    background: ${({ $active }) => ($active ? "#002080" : "#e4f1fe")};
  }

   &:active {
    opacity: 0.9;
    transition: opacity 0.3s ease;
    transform: scale(0.98);
  }
`;