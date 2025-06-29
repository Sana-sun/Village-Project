import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  background-color: #002c96;
  color: white;
  padding: 30px 60px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const FooterSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1rem;
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    /* text-align: right; */
    align-items: center
  }

  a {
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    align-items: center;

    gap: 6px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const ContactLink = styled.a`
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledRouterLink = styled(Link)`
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    gap: 6px;
  }
`;

export const LogoImage = styled.img`
  width: 120px;

  @media (max-width: 768px) {
    width: 90px;
  }
`;

export const LogoText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
`;
