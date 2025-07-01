// import styled from "styled-components";

// export const NavWrapper = styled.div`
//   font-size: 1rem;
//   padding: 0 0 30px 0;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   color: #222;

//   span {
//   }
// `;

// export const ArrowBox = styled.div`
//    margin-top: 6px;
//    font-size: 12px;
// `;


// import styled from "styled-components";

// export const NavWrapper = styled.div`
//   font-size: 1rem;
//   padding: 0 0 30px 0;
//   display: flex;
//   flex-wrap: wrap; /* ← дозволяє переносити елементи */
//   align-items: center;
//   gap: 10px;
//   color: #222;
//   line-height: 1.4;

//   span {
//     word-break: break-word;
//   }
// `;

// export const ArrowBox = styled.div`
//   margin-top: 6px;
//   font-size: 12px;
//   display: flex;
//   align-items: center;
// `;





import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
  font-size: 0.8rem;
  padding: 0 0 2rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  gap: 10px;
  line-height: 1.4;
  color: #002c96;
  margin-left: 8px;

  span {
    word-break: break-word;
    color: #002c96;
    font-weight: 500;
  }
`;

export const ArrowBox = styled.div`
  font-size: 0.6rem;
  display: flex;
  color: #a6c9f5;
`;

export const HomeLink = styled(Link)`
  color: #61a4f1;
  /* color: #002c96; */
  text-decoration: none;
  font-weight: 600;

  &:hover {
    /* text-decoration: underline; */
    color: #0044cc;
  }
`;