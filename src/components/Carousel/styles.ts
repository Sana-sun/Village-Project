import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 500px;
  /* background-color: #f8f8f8; */
  padding: 30px;
  margin-top: 20px;

  @media (max-width: 1240px) {
    height: 500px;
    padding: 20px;
  } 

  @media (max-width: 1024px) {
    padding: 10px 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
    padding: 0; 
  }
`;

export const MainImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background-color: lightgray; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    border-radius: 10px;

    transition: transform 8s ease-in-out, opacity 3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
`;

export const SideImagesContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  
  margin: 0 10px;
  transition: transform 2s ease-in-out, opacity 1s ease-in-out;

  @media (max-width: 768px) {
    margin: 0 15px;
  }

  @media (max-width: 480px) {
    margin: 0 5px;
  }

  @media (max-width: 1024px) {
    display: none; /* Hide the side images on small screens */
  }
`;

export const SideImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 20px;
  border-radius: 10px;
  /* opacity: 0.7; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 60%;
  }

  @media (max-width: 480px) {
    height: 50%;
  }
`;

export const NavButton = styled.div`
  background-color: #9ceef1;
  background-color: #7a2141;
  background-color:  #66b3ff;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* z-index: 1; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #88d4e6;
    background-color: #641230;
    background-color: #338bff;
  }

  &:nth-child(1) {
    left: -30px;
  }

  &:nth-child(5) {
    right: -30px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;

    &:nth-child(1) {
      left: -20px;
    }

    &:nth-child(5) {
      right: -20px;
    }
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    font-size: 0.8rem;

    &:nth-child(1) {
      left: -15px;
    }

    &:nth-child(5) {
      right: -15px;
    }
  }

  @media (max-width: 350px) {
    width: 20px;
    height: 20px;
    font-size: 0.6rem;

    &:nth-child(1) {
      left: -10px;
    }

    &:nth-child(5) {
      right: -10px;
    }
    display: none;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const Dot = styled.div<{ $isActive: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.$isActive ? "#66b3ff;" : "#d3d3d3")};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #338bff;
  }
`;


export const LoadingText = styled.div`
  position: absolute;
  color: black;
  color: white;
  font-size: 2rem;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
`;
