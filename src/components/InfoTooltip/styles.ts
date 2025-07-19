import styled from "@emotion/styled";

export const TooltipWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: inline-block;
  /* z-index: 1; */
`;


export const InfoButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: #dbe6ff;
  color: #1e2a4c;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c8daff;
  }
  
`;

export const TooltipBox = styled.div<{ visible: boolean }>`
  position: absolute;
  bottom: 42px;
  right: 0;
  min-width: 360px;
  max-width: 600px;
  padding: 12px 14px;
  background-color: white;
  border: 1px solid #ccd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  transition: opacity 0.3s ease;
  font-size: 14px;
  line-height: 1.4;
  color: #333;

  @media (max-width: 580px) {
    min-width: 20rem;
    /* max-width: 80%; */
  }
`;

