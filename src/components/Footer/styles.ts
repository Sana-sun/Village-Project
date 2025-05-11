import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.div`
  background-color: #0033a0;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  gap: 20px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px 30px;
  }
`;

export const LogoBtn = styled.button`
  width: 200px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const LogoImage = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BoldText = styled.div`
  font-weight: bold;
  text-decoration: none;
`;

export const StyledRouterLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const CenterTextTrio = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;

  a {
    text-decoration: none;
    margin-right: 4px;
  }

   a:hover {
    text-decoration: underline;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 10px;
  font-weight: bold;

  a {
    font-size: 24px;
  }
`;
