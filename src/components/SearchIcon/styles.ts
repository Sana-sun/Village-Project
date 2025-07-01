import styled from "styled-components";
import { Link } from "react-router-dom";

export const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #002c96;
  color: white;
  padding: 6px;
`;

export const Overlay = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
  transition: opacity 0.3s ease;
  z-index: 10;
`;

export const Panel = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  max-width: 90%;
  height: 100vh;
  background: #ffffff;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  transform: translateX(${({ $active }) => ($active ? "0%" : "100%")});
  transition: transform 0.35s ease;
  z-index: 101;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #e2e2e2;
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #333;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  &:focus {
    outline: none;
    border-color: #002c96;
    background: white;
  }
`;

export const Body = styled.div`
  padding: 1rem;
  overflow-y: auto;
`;

export const Section = styled.div`
  margin-bottom: 1.4rem;

  ul {
    list-style: none;
    padding-left: 10px;
    margin-top: 0.6rem;
  }
`;

export const PageTitle = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  color: #002c96;
`;

export const EntryLink = styled(Link)`
  display: block;
  padding: 6px 0;
  color: #333;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;

  &:hover {
    color: #002c96;
  }
`;

export const NoResults = styled.div`
  text-align: center;
  color: #999;
  padding-top: 2rem;
`;


// скелетон
import { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

export const SkeletonItem = styled.div`
  width: 100%;
  height: 18px;
  border-radius: 6px;
  margin: 8px 0;

  background: linear-gradient(
    90deg,
    #dbe5f4 0%,
    #f1f4f9 50%,
    #dbe5f4 100%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
`;
