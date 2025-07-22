// // new
// import React, { useEffect, useState } from "react";
// import {
//   CarouselContainer,
//   MainImageContainer,
//   DotsContainer,
//   Dot,
// } from "./styles";

// const MainCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     // "images/StartSeite/1.webp",
//     "images/StartSeite/11.webp",
//     // "/images/StartSeite/2.jpg",
//     "/images/StartSeite/3.jpeg",
//     "/images/StartSeite/4.webp",
//     // "/images/StartSeite/9.jpeg",
//     "/images/StartSeite/10.jpeg",
//     // "/images/StartSeite/11.jpeg",
//   ];

//   useEffect(() => {
//     if (!images || images.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images]);

//   if (!images || images.length === 0) return null;

//   return (
//     <>
//       <CarouselContainer>
//         <MainImageContainer>
//           <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//         </MainImageContainer>

//       <DotsContainer>
//         {images.map((_, index) => (
//           <Dot
//             key={index}
//             $isActive={index === currentIndex}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </DotsContainer>
//       </CarouselContainer>
     
//     </>
//   );
// };

// export default MainCarousel;



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


// + skeleton
// import React, { useEffect, useState } from "react";
// import {
//   CarouselContainer,
//   MainImageContainer,
//   DotsContainer,
//   Dot,
//   Skeleton,
// } from "./styles";

// const MainCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   const images = [
//     "images/StartSeite/11.webp",
//     "/images/StartSeite/3.jpeg",
//     "/images/StartSeite/4.webp",
//     "/images/StartSeite/10.jpeg",
//   ];

//   useEffect(() => {
//     if (!images || images.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setIsLoading(true); // Показати скелетон при кожній зміні картинки
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images]);

//   if (!images || images.length === 0) return null;

//   return (
//     <CarouselContainer
//       role="region"
//       aria-label="Startseiten-Karussell mit Dorfbildern"
//     >
//       <MainImageContainer>
//         {isLoading && <Skeleton aria-hidden="true" />}
//         <img
//           src={images[currentIndex]}
//           alt={`Bild ${currentIndex + 1} von ${images.length}`}
//           role="img"
//           style={{ display: isLoading ? "none" : "block" }}
//           onLoad={() => setIsLoading(false)}
//         />
//       </MainImageContainer>

//       {/* <DotsContainer role="tablist" aria-label="Karussell Navigation">
//         {images.map((_, index) => (
//           <Dot
//             key={index}
//             $isActive={index === currentIndex}
//             role="tab"
//             aria-selected={index === currentIndex}
//             aria-label={`Bild ${index + 1}`}
//             tabIndex={0}
//             onClick={() => {
//               setCurrentIndex(index);
//               setIsLoading(true); // показати скелетон при кліку
//             }}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" || e.key === " ") {
//                 setCurrentIndex(index);
//                 setIsLoading(true);
//               }
//             }}
//           />
//         ))}
//       </DotsContainer> */}

//       <DotsContainer role="tablist" aria-label="Karussell Navigation">
//   {images.map((_, index) => {
//     const isActive = index === currentIndex;

//     return (
//       <Dot
//         key={index}
//         $isActive={isActive}
//         role="tab"
//         aria-selected={isActive}
//         aria-label={`Bild ${index + 1}`}
//         tabIndex={isActive ? -1 : 0} // Не фокусити активну
//         onClick={() => {
//           if (!isActive) {
//             setCurrentIndex(index);
//             setIsLoading(true);
//           }
//         }}
//         onKeyDown={(e) => {
//           if ((e.key === "Enter" || e.key === " ") && !isActive) {
//             setCurrentIndex(index);
//             setIsLoading(true);
//           }
//         }}
//         aria-disabled={isActive} // для доступності
//         style={isActive ? { pointerEvents: "none", opacity: 0.6 } : {}}
//       />
//     );
//   })}
// </DotsContainer>

//     </CarouselContainer>
//   );
// };

// export default MainCarousel;
