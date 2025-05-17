// import React, { useEffect, useState } from "react";
// import {
//   CarouselContainer,
//   MainImageContainer,
//   SideImagesContainer,
//   SideImage,
//   NavButton,
//   DotsContainer,
//   Dot,
// } from "./styles";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// interface CarouselProps {
//   images?: string[];
// }

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (!images || images.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [images]);

//   if (!images || images.length === 0) return null;

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       <CarouselContainer>
//         <NavButton onClick={prevSlide}>
//           <FaChevronLeft style={{ color: "white" }} />
//         </NavButton>

//         <SideImagesContainer>
//           <SideImage
//             src={images[(currentIndex - 1 + images.length) % images.length]}
//             alt="Previous Image"
//           />
//         </SideImagesContainer>

//         <MainImageContainer>
//           <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//         </MainImageContainer>

//         <SideImagesContainer>
//           <SideImage
//             src={images[(currentIndex + 1) % images.length]}
//             alt="Next Image"
//           />
//         </SideImagesContainer>

//         <NavButton onClick={nextSlide}>
//           <FaChevronRight style={{ color: "white" }} />
//         </NavButton>
//       </CarouselContainer>

//       <DotsContainer>
//         {images.map((_, index) => (
//           <Dot
//             key={index}
//             $isActive={index === currentIndex}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </DotsContainer>
//     </>
//   );
// };

// export default Carousel;

// 2

import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  MainImageContainer,
  SideImageRightContainer,
  SideImage,
  DotsContainer,
  Dot,
  NavButton,
  NavButtonContainer,
  SideImageLeftContainer,
} from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  images?: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
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

export default Carousel;

// ?

// with text Foto hochladen
// import React, { useEffect, useState } from "react";
// import {
//   CarouselContainer,
//   MainImageContainer,
//   SideImagesContainer,
//   SideImage,
//   NavButton,
//   DotsContainer,
//   Dot,
//   LoadingText,
// } from "./styles";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// interface CarouselProps {
//   images?: string[];
// }

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [loadingStates, setLoadingStates] = useState<boolean[]>(
//     Array(images?.length).fill(true)
//   );

//   useEffect(() => {
//     if (!images || images.length === 0) return;

//     images.forEach((src, index) => {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => {
//         setLoadingStates((prev) => {
//           const newStates = [...prev];
//           newStates[index] = false;
//           return newStates;
//         });
//       };
//     });
//   }, [images]);

//   useEffect(() => {
//     if (!images || images.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [images]);

//   if (!images || images.length === 0) return null;

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       <CarouselContainer>
//         <NavButton onClick={prevSlide}>
//           <FaChevronLeft style={{ color: "white" }} />
//         </NavButton>

//         <SideImagesContainer>
//           {loadingStates[
//             (currentIndex - 1 + images.length) % images.length
//           ] && <LoadingText>Foto hochladen...</LoadingText>}
//           <SideImage
//             src={images[(currentIndex - 1 + images.length) % images.length]}
//             alt="Previous Image"
//           />
//         </SideImagesContainer>

//         <MainImageContainer>
//           {loadingStates[currentIndex] && (
//             <LoadingText>Foto hochladen...</LoadingText>
//           )}
//           <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//         </MainImageContainer>

//         <SideImagesContainer>
//           {loadingStates[(currentIndex + 1) % images.length] && (
//             <LoadingText>Foto hochladen...</LoadingText>
//           )}
//           <SideImage
//             src={images[(currentIndex + 1) % images.length]}
//             alt="Next Image"
//           />
//         </SideImagesContainer>

//         <NavButton onClick={nextSlide}>
//           <FaChevronRight style={{ color: "white" }} />
//         </NavButton>
//       </CarouselContainer>

//       <DotsContainer>
//         {images.map((_, index) => (
//           <Dot
//             key={index}
//             $isActive={index === currentIndex}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </DotsContainer>
//     </>
//   );
// };

// export default Carousel;
