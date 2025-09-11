import styled from "styled-components";

export const HinweiseButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  background-color: #059669; /* зелений */
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  padding: 12px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  transition: all 0.3s ease;

  &:hover {
    background-color: #047857; /* темніший зелений */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const HinweiseText = styled.p`
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #374151; /* темно-сірий */
  padding-bottom: 2rem;

  a {
    color: #059669;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;


