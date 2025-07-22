// import { useState, type ReactNode } from "react";
// import {
//   Card,
//   CardImageWrapper,
//   CardContent,
//   CardSlogan,
//   CardText,
//   CardsContainer,
//   SkeletonBox,
//   Heading,
//   IntroText,
//   PageWrapper,
//   Arrow,
//   CarouselWrapper,
//   Dot,
//   Dots,
// } from "./styles";
// import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// import { FiPhone, FiMail } from "react-icons/fi";
// interface SmallCard {
//   CARD_TITLE: string;
//   CARD_TEXT?: string;
//   CARD_CONTACTS_EMAIL?: string;
//   CARD_CONTACTS_PHONE?: string;
// }

// function ImageCarousel({ images }: { images: string[] }) {
//   const [index, setIndex] = useState(0);
//   const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
//   const handlePrev = () =>
//     setIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div>
//       <CarouselWrapper>
//         <img src={images[index]} alt={`Bild ${index + 1}`} />
//         {images.length > 1 && (
//           <>
//             <Arrow left onClick={handlePrev}>
//               <BsArrowLeftCircle />
//             </Arrow>
//             <Arrow onClick={handleNext}>
//               <BsArrowRightCircle />
//             </Arrow>
//           </>
//         )}
//       </CarouselWrapper>
//       {images.length > 1 && (
//         <Dots>
//           {images.map((_, i) => (
//             <Dot key={i} active={i === index} />
//           ))}
//         </Dots>
//       )}
//     </div>
//   );
// }

// interface SmallCardTemplateProps {
//   heading: string;
//   introText: ReactNode;
//   cards: SmallCard[];
//   loading: boolean;
//   images?: Record<string, string[]>;
// }

// function SkeletonSmallCard() {
//   return (
//     <Card style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
//       <CardImageWrapper>
//         <SkeletonBox
//           width="100%"
//           height="240px"
//           style={{ borderRadius: "8px" }}
//         />
//       </CardImageWrapper>
//       <CardContent>
//         <SkeletonBox
//           width="70%"
//           height="20px"
//           style={{ marginBottom: "1rem" }}
//         />
//         <SkeletonBox
//           width="90%"
//           height="14px"
//           style={{ marginBottom: "0.5rem" }}
//         />
//         <SkeletonBox width="80%" height="14px" />
//       </CardContent>
//     </Card>
//   );
// }

// export default function SmallCardTemplate({
//   heading,
//   introText,
//   cards,
//   loading,
//   images,
// }: SmallCardTemplateProps) {
//   return (
//     <PageWrapper>
//       <Heading>{heading}</Heading>
//       <IntroText>{introText}</IntroText>

//       <CardsContainer itemCount={cards.length}>
//         {loading
//           ? Array.from({ length: 2 }).map((_, i) => (
//               <SkeletonSmallCard key={i} />
//             ))
//           : cards.map((item, index) => (
//               <Card key={`${item.CARD_TITLE}-${index}`}>
//                 {/* <CardImageWrapper>
//                   {images?.[item.CARD_TITLE]?.length ? (
//                     <img src={images[item.CARD_TITLE][0]} alt={item.CARD_TITLE} />
//                   ) : (
//                     <img src="/images/Bauland/mainPhoto.png" alt={item.CARD_TITLE} />
//                   )}
//                 </CardImageWrapper> */}
//                 <CardImageWrapper>
//                   {images?.[item.CARD_TITLE]?.length ? (
//                     <ImageCarousel images={images[item.CARD_TITLE]} />
//                   ) : (
//                     <img
//                       src="/images/Bauland/mainPhoto.png"
//                       alt={item.CARD_TITLE}
//                     />
//                   )}
//                 </CardImageWrapper>

//                 <CardContent>
//                   <CardSlogan>{item.CARD_TITLE}</CardSlogan>
//                   <CardText>{item.CARD_TEXT}</CardText>
//                   {item.CARD_CONTACTS_PHONE && (
//                     <CardText>
//                       <FiPhone /> {item.CARD_CONTACTS_PHONE}
//                     </CardText>
//                   )}
//                   {item.CARD_CONTACTS_EMAIL && (
//                     <CardText>
//                       <FiMail /> {item.CARD_CONTACTS_EMAIL}
//                     </CardText>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//       </CardsContainer>
//     </PageWrapper>
//   );
// }



// + Barrierefreiheit

// import { useRef, useState, type ReactNode } from "react";
// import {
//   Card,
//   CardImageWrapper,
//   CardContent,
//   CardSlogan,
//   CardText,
//   CardsContainer,
//   SkeletonBox,
//   Heading,
//   IntroText,
//   PageWrapper,
//   Arrow,
//   CarouselWrapper,
//   Dot,
//   Dots,
// } from "./styles";
// import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// import { FiPhone, FiMail } from "react-icons/fi";
// interface SmallCard {
//   CARD_TITLE: string;
//   CARD_TEXT?: string;
//   CARD_CONTACTS_EMAIL?: string;
//   CARD_CONTACTS_PHONE?: string;
// }

// function ImageCarousel({ images }: { images: string[] }) {
//   const [index, setIndex] = useState(0);
//   const carouselRef = useRef<HTMLDivElement | null>(null);

//   const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
//   const handlePrev = () =>
//     setIndex((prev) => (prev - 1 + images.length) % images.length);

//    // Скрол при фокусі
//   // const scrollCardIntoView = () => {
//   //   if (carouselRef.current) {
//   //     const rect = carouselRef.current.getBoundingClientRect();
//   //     const scrollY = window.scrollY || window.pageYOffset;
//   //     const y = scrollY + rect.top - window.innerHeight / 4 + rect.height / 4;
//   //     window.scrollTo({ top: y, behavior: "smooth" });
//   //   }
//   // };

//   return (
//     <div
//       role="region"
//       aria-label="Bildergalerie"
//       ref={carouselRef}
//     >
//       <CarouselWrapper>
//         <img
//           src={images[index]}
//           alt={`Bild ${index + 1} von ${images.length}`}
//           role="img"
//         />
//         {images.length > 1 && (
//           <>
//             <Arrow
//               left
//               onClick={handlePrev}
//               aria-label="Vorheriges Bild"
//               // onFocus={scrollCardIntoView}
//               tabIndex={0}
//             >
//               <BsArrowLeftCircle aria-hidden="true" />
//             </Arrow>

//             <Arrow
//               onClick={handleNext}
//               aria-label="Nächstes Bild"
//               // onFocus={scrollCardIntoView}
//               tabIndex={0}
//             >
//               <BsArrowRightCircle aria-hidden="true" />
//             </Arrow>
//           </>
//         )}
//       </CarouselWrapper>

//       {images.length > 1 && (
//         <Dots role="tablist" aria-label="Bildnavigation">
//           {images.map((_, i) => (
//             <Dot
//               key={i}
//               role="tab"
//               aria-selected={i === index}
//               aria-label={`Bild ${i + 1}`}
//               active={i === index}
//               tabIndex={0}
//               onClick={() => setIndex(i)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                   e.preventDefault();
//                   setIndex(i);
//                 }
//               }}
//             />
//           ))}
//         </Dots>
//       )}
//     </div>
//   );
// }


// interface SmallCardTemplateProps {
//   heading: string;
//   introText: ReactNode;
//   cards: SmallCard[];
//   loading: boolean;
//   images?: Record<string, string[]>;
// }

// function SkeletonSmallCard() {
//   return (
//     <Card 
//       style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
//       <CardImageWrapper>
//         <SkeletonBox
//           width="100%"
//           height="240px"
//           style={{ borderRadius: "8px" }}
//         />
//       </CardImageWrapper>
//       <CardContent>
//         <SkeletonBox
//           width="70%"
//           height="20px"
//           style={{ marginBottom: "1rem" }}
//         />
//         <SkeletonBox
//           width="90%"
//           height="14px"
//           style={{ marginBottom: "0.5rem" }}
//         />
//         <SkeletonBox width="80%" height="14px" />
//       </CardContent>
//     </Card>
//   );
// }

// export default function SmallCardTemplate({
//   heading,
//   introText,
//   cards,
//   loading,
//   images,
// }: SmallCardTemplateProps) {
//   return (
//     <PageWrapper>
//       <Heading>{heading}</Heading>
//       <IntroText>{introText}</IntroText>

//       <CardsContainer itemCount={cards.length}>
//         {loading
//           ? Array.from({ length: 2 }).map((_, i) => (
//               <SkeletonSmallCard key={i} />
//             ))
//           : cards.map((item, index) => (
//               <Card key={`${item.CARD_TITLE}-${index}`}>
//                 {/* <CardImageWrapper>
//                   {images?.[item.CARD_TITLE]?.length ? (
//                     <img src={images[item.CARD_TITLE][0]} alt={item.CARD_TITLE} />
//                   ) : (
//                     <img src="/images/Bauland/mainPhoto.png" alt={item.CARD_TITLE} />
//                   )}
//                 </CardImageWrapper> */}
//                 <CardImageWrapper>
//                   {images?.[item.CARD_TITLE]?.length ? (
//                     <ImageCarousel images={images[item.CARD_TITLE]} />
//                   ) : (
//                     <img
//                       src="/images/Bauland/mainPhoto.png"
//                       alt={item.CARD_TITLE}
//                     />
//                   )}
//                 </CardImageWrapper>

//                 <CardContent>
//                   <CardSlogan>{item.CARD_TITLE}</CardSlogan>
//                   <CardText>{item.CARD_TEXT}</CardText>
//                   {item.CARD_CONTACTS_PHONE && (
//                     <CardText>
//                       <FiPhone /> {item.CARD_CONTACTS_PHONE}
//                     </CardText>
//                   )}
//                   {item.CARD_CONTACTS_EMAIL && (
//                     <CardText>
//                       <FiMail /> {item.CARD_CONTACTS_EMAIL}
//                     </CardText>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//       </CardsContainer>
//     </PageWrapper>
//   );
// }



// + image Next

import { useRef, useState, type ReactNode } from "react";
import {
  Card,
  CardImageWrapper,
  CardContent,
  CardSlogan,
  CardText,
  CardsContainer,
  SkeletonBox,
  Heading,
  IntroText,
  PageWrapper,
  Arrow,
  CarouselWrapper,
  Dot,
  Dots,
} from "./styles";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import { FiPhone, FiMail } from "react-icons/fi";
interface SmallCard {
  CARD_TITLE: string;
  CARD_TEXT?: string;
  CARD_CONTACTS_EMAIL?: string;
  CARD_CONTACTS_PHONE?: string;
}

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);


  return (
    <div
      role="region"
      aria-label="Bildergalerie"
      ref={carouselRef}
    >
      <CarouselWrapper>
        <img
          src={images[index]}
          alt={`Bild ${index + 1} von ${images.length}`}
          role="img"
        />
        {images.length > 1 && (
          <>
            <Arrow
              left
              onClick={handlePrev}
              aria-label="Vorheriges Bild"
              tabIndex={0}
            >
              <BsArrowLeftCircle aria-hidden="true" />
            </Arrow>

            <Arrow
              onClick={handleNext}
              aria-label="Nächstes Bild"
              tabIndex={0}
            >
              <BsArrowRightCircle aria-hidden="true" />
            </Arrow>
          </>
        )}
      </CarouselWrapper>

      {images.length > 1 && (
        <Dots role="tablist" aria-label="Bildnavigation">
          {images.map((_, i) => (
            <Dot
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Bild ${i + 1}`}
              active={i === index}
              tabIndex={0}
              onClick={() => setIndex(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIndex(i);
                }
              }}
            />
          ))}
        </Dots>
      )}
    </div>
  );
}


interface SmallCardTemplateProps {
  heading: string;
  introText: ReactNode;
  cards: SmallCard[];
  loading: boolean;
  images?: Record<string, string[]>;
}

function SkeletonSmallCard() {
  return (
    <Card 
      style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
      <CardImageWrapper>
        <SkeletonBox
          width="100%"
          height="240px"
          style={{ borderRadius: "8px" }}
        />
      </CardImageWrapper>
      <CardContent>
        <SkeletonBox
          width="70%"
          height="20px"
          style={{ marginBottom: "1rem" }}
        />
        <SkeletonBox
          width="90%"
          height="14px"
          style={{ marginBottom: "0.5rem" }}
        />
        <SkeletonBox width="80%" height="14px" />
      </CardContent>
    </Card>
  );
}

export default function SmallCardTemplate({
  heading,
  introText,
  cards,
  loading,
  images,
}: SmallCardTemplateProps) {
  return (
    <PageWrapper>
      <Heading>{heading}</Heading>
      <IntroText>{introText}</IntroText>

      <CardsContainer itemCount={cards.length}>
        {loading
          ? Array.from({ length: 2 }).map((_, i) => (
              <SkeletonSmallCard key={i} />
            ))
          : cards.map((item, index) => (
              <Card key={`${item.CARD_TITLE}-${index}`}>

                <CardImageWrapper>
                  {images?.[item.CARD_TITLE]?.length ? (
                    <ImageCarousel images={images[item.CARD_TITLE]} />
                  ) : (
                    <img
                      src="/images/Bauland/mainPhoto.png"
                      alt={item.CARD_TITLE}
                    />
                  )}
                </CardImageWrapper>

                <CardContent>
                  <CardSlogan>{item.CARD_TITLE}</CardSlogan>
                  <CardText>{item.CARD_TEXT}</CardText>
                  {item.CARD_CONTACTS_PHONE && (
                    <CardText>
                      <FiPhone /> {item.CARD_CONTACTS_PHONE}
                    </CardText>
                  )}
                  {item.CARD_CONTACTS_EMAIL && (
                    <CardText>
                      <FiMail /> {item.CARD_CONTACTS_EMAIL}
                    </CardText>
                  )}
                </CardContent>
              </Card>
            ))}
      </CardsContainer>
    </PageWrapper>
  );
}
