import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  MainImageContainer,
  DotsContainer,
  Dot,
  NavButton,
  NavButtonContainer,
  SideImageLeftContainer,
  SideImage,
  SideImageRightContainer,
} from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  images?: string[];
}

const HistoryCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <CarouselContainer>
  
        <SideImageLeftContainer>
          <NavButtonContainer onClick={prevSlide}>
            <SideImage
              src={images[(currentIndex - 1 + images.length) % images.length]}
              alt="Previous Image"
            />
          </NavButtonContainer>
          <NavButton onClick={prevSlide}>
            <FaChevronLeft style={{ color: "white" }} />

          </NavButton>
        </SideImageLeftContainer>

        <MainImageContainer>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </MainImageContainer>

        <SideImageRightContainer>
          <NavButtonContainer onClick={nextSlide}>
            <SideImage
              src={images[(currentIndex + 1) % images.length]}
              alt="Next Image"
            />
          </NavButtonContainer>
          <NavButton onClick={nextSlide}>

            <FaChevronRight style={{ color: "white" }} />
          </NavButton>
        </SideImageRightContainer>

      </CarouselContainer>

      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            $isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </>
  );
};


export default HistoryCarousel;
