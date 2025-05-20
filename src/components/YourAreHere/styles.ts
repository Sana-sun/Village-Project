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


import styled from "styled-components";

export const NavWrapper = styled.div`
  font-size: 1rem;
  padding: 0 0 30px 0;
  display: flex;
  flex-wrap: wrap; /* ← дозволяє переносити елементи */
  align-items: center;
  gap: 10px;
  color: #222;
  line-height: 1.4;

  span {
    word-break: break-word;
  }
`;

export const ArrowBox = styled.div`
  margin-top: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;
