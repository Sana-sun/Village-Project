import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  MainImageContainer,
  FotoTextContainer,
  DotsContainer,
  Dot,
} from "./styles";

const MainCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/StartSeite/1.jpg",
    "/images/StartSeite/2.jpg",
    "/images/StartSeite/3.jpeg",
    "/images/StartSeite/4.jpg",
    "/images/StartSeite/5.jpg",
  ];

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <CarouselContainer>
        <MainImageContainer>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </MainImageContainer>
      </CarouselContainer>

      <FotoTextContainer>
        Willkommen in Schönwald Brandenburg - ein Ort, an dem Natur und
        Gemeinschaft im Einklang leben
      </FotoTextContainer>

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

export default MainCarousel;
