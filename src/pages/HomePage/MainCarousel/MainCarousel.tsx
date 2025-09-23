
// + Barrierefreiheit
import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  MainImageContainer,
  DotsContainer,
  Dot,
} from "./styles";

const MainCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "images/StartSeite/11.avif",
    "/images/StartSeite/3.avif",
    "/images/StartSeite/4.avif",
    "/images/StartSeite/10.avif",
  ];

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <CarouselContainer
      role="region"
      aria-label="Startseiten-Karussell mit Dorfbildern"
    >
      <MainImageContainer>
        <img
          src={images[currentIndex]}
          alt={`Bild ${currentIndex + 1} von ${images.length}`}
          role="img"
        />
      </MainImageContainer>

      <DotsContainer role="tablist" aria-label="Karussell Navigation">
        {images.map((_, index) => (
          <Dot
            key={index}
            $isActive={index === currentIndex}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Bild ${index + 1}`}
            tabIndex={0}
            onClick={() => setCurrentIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setCurrentIndex(index);
              }
            }}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default MainCarousel;

