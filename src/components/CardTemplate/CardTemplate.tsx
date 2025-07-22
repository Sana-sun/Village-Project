// import { useEffect, useState, type ReactNode } from "react";
// import {
//   FiInfo, FiPhone, FiMail, FiGlobe, FiMapPin, FiClock, FiUser
// } from "react-icons/fi";
// import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
// import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// import {
//   Arrow,
//   Card,
//   CardContent,
//   CardImageWrapper,
//   CardsContainer,
//   CardSlogan,
//   CardText,
//   CardTextItems,
//   CarouselWrapper,
//   CategoryName,
//   ContactInfo,
//   Dot,
//   Dots,
//   Heading,
//   IntroText,
//   MoreButton,
//   MoreButtonText,
//   MoreButtonWrapper,
//   PageWrapper,
//   SkeletonBox,
//   SlideCloseButton,
//   SlideContent,
//   SlideOverlay,
//   SlideText,
//   SlideTitle
// } from "./styles";
// import { useLocation } from "react-router-dom";

// export interface BauCard {
//   CATEGORY?: string;
//   NAME?: string;
//   INFO_SLOGAN?: string;
//   CARD_SLOGAN?: string;
//   CARD_TEXT?: string;
//   CARD_ADRESS?: string;
//   CARD_TEL?: string;
//   CARD_EMAIL?: string;
//   CARD_WEB?: string;
//   CARD_EXTRA_INFO?: string;
//   WORK_TIME?: string;
//   ADD_PERSON?: string;
//   ADD_TEL?: string;
//   ADD_EMAIL?: string;
//   ADD_FACEBOOK?: string;
//   ADD_INSTAGRAM?: string;
//   ADD_YOUTUBE?: string;
//   PATH?: string;
//   CATEGORY_PATH?: string;
// }

// function ImageCarousel({ images }: { images: string[] }) {
//   const [index, setIndex] = useState(0);
//   const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
//   const handlePrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div>
//       <CarouselWrapper>
//         <img src={images[index]} alt={`Bild ${index + 1}`} />
//         {images.length > 1 && (
//           <>
//             <Arrow left onClick={handlePrev}><BsArrowLeftCircle /></Arrow>
//             <Arrow onClick={handleNext}><BsArrowRightCircle /></Arrow>
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

// function SkeletonCard() {
//   return (
//     <Card style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
//       <CardImageWrapper>
//         <SkeletonBox width="100%" height="350px" style={{ borderRadius: "8px" }} />
//       </CardImageWrapper>
//       <CardContent>
//         <SkeletonBox width="60%" height="20px" style={{ marginBottom: "1rem" }} />
//         <SkeletonBox width="90%" height="14px" style={{ marginBottom: "0.5rem" }} />
//         <SkeletonBox width="80%" height="14px" style={{ marginBottom: "1rem" }} />
//         <SkeletonBox width="60%" height="12px" style={{ marginBottom: "0.4rem" }} />
//         <SkeletonBox width="50%" height="12px" style={{ marginBottom: "1rem" }} />
//         <SkeletonBox width="40%" height="30px" style={{ marginLeft: "auto" }} />
//       </CardContent>
//     </Card>
//   );
// }

// interface CardTemplateProps {
//   heading: string;
//   introText: ReactNode;
//   cards: BauCard[];
//   loading: boolean;
//   images?: Record<string, string[]>;
// }

// function slugify(name: string = "") {
//   return name
//     .toLowerCase()
//     // .replace(/[^\w&]+/g, "-") // збережено `&`
//     // .replace(/^-+|-+$/g, "");
//     .replace(/\s+/g, "-");
// }

// function smoothScrollTo(yTarget: number, duration: number = 700) {
//   const start = window.pageYOffset;
//   const distance = yTarget - start;
//   let startTime: number | null = null;

//   function step(timestamp: number) {
//     if (!startTime) startTime = timestamp;
//     const progress = timestamp - startTime;
//     const percent = Math.min(progress / duration, 1);
//     window.scrollTo(0, start + distance * easeInOutQuad(percent));
//     if (progress < duration) {
//       window.requestAnimationFrame(step);
//     }
//   }

//   function easeInOutQuad(t: number) {
//     return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//   }

//   window.requestAnimationFrame(step);
// }

// export default function CardTemplate({ heading, introText, cards, loading, images }: CardTemplateProps) {

//   // console.log("📦 cards:", cards); // ← ось тут

//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const handleOpen = (index: number) => setOpenIndex(index);
//   const handleClose = () => setOpenIndex(null);
//   const location = useLocation();

//   // прокрутка для імен
// useEffect(() => {
//   if (!loading && location.hash && cards?.length) {
//     const hash = location.hash.slice(1);
//     const existsInNames = cards.some(c => c.NAME?.toLowerCase() === hash);

//     if (existsInNames) {
//       const timeout = setTimeout(() => {
//         const target = document.getElementById(hash);
//         if (target) {
//           const yOffset = -80;
//           const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
//           smoothScrollTo(y, 50);
//         }
//       }, 500); // трохи менше, ніж на категоріях

//       return () => clearTimeout(timeout);
//     }
//   }
// }, [location.hash, loading, cards]);

// // useEffect(() => {
// //   cards.forEach((item) => {
// //     console.log(`🔗Cat: ${item.NAME} → ${item.CATEGORY_PATH}`);
// //     console.log(`Path: 🔗 ${item.NAME} → ${item.PATH}`);
// //   });
// // }, [cards]);

//   const renderCard = (item: BauCard, index: number) => {
//   const id = item.PATH?.split("#")[1];
//     // console.log(`🧭 CARD ID для "${item.NAME}":`, id);
//     // console.log(`🧭 CARD PATH "${item.NAME}":`, item.PATH);

//     return (
//     <Card
//       // id={item.path?.split("#")[1]}
//       // id={item.NAME?.toLowerCase()}
//       id={id}
//       key={`${item.NAME ?? "item"}-${index}`}>

//       <CardImageWrapper>
//         {images?.[item.NAME ?? ""]?.length ? (
//           <ImageCarousel images={images[item.NAME ?? ""]} />
//         ) : (
//           <img src="/images/Bauland/mainPhoto.png" alt={item.NAME} />
//         )}
//       </CardImageWrapper>

//       <CardContent>
//         <CardSlogan>{item.CARD_SLOGAN}</CardSlogan>
//         <CardText>{item.CARD_TEXT}</CardText>
//         <ContactInfo>
//           {item.ADD_PERSON && <CardTextItems><strong><FiUser /> {item.ADD_PERSON}</strong></CardTextItems>}
//           {item.CARD_TEL && <CardTextItems><FiPhone /> {item.CARD_TEL}</CardTextItems>}
//           {item.CARD_EMAIL && <CardTextItems><FiMail /> {item.CARD_EMAIL}</CardTextItems>}
//           {item.CARD_ADRESS && <CardTextItems><FiMapPin /> {item.CARD_ADRESS}</CardTextItems>}
//           {item.CARD_WEB && (
//             <CardTextItems>
//               <FiGlobe />{" "}
//               <a
//                 href={item.CARD_WEB.startsWith("http") ? item.CARD_WEB : `https://${item.CARD_WEB}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {item.CARD_WEB}
//               </a>
//             </CardTextItems>
//           )}
//         </ContactInfo>

//         {item.CARD_EXTRA_INFO && (
//           <>
//             <MoreButtonWrapper>
//               <MoreButton onClick={() => handleOpen(index)} className={openIndex === index ? "active" : ""}>
//                 <MoreButtonText><FiInfo /> Mehr erfahren</MoreButtonText>
//               </MoreButton>
//             </MoreButtonWrapper>

//             <SlideOverlay $isVisible={openIndex === index}>
//               <SlideContent>
//                 <SlideCloseButton onClick={handleClose}>✖</SlideCloseButton>
//                 <SlideTitle>Weitere Informationen</SlideTitle>
//                 <SlideText>
//                   {item.CARD_EXTRA_INFO}
//                   <ContactInfo>
//                     {item.ADD_TEL && <p><FiPhone /> {item.ADD_TEL}</p>}
//                     {item.ADD_EMAIL && <p><FiMail /> {item.ADD_EMAIL}</p>}
//                     {item.ADD_FACEBOOK && (
//                       <p>
//                         <br /><FaFacebookF /> <a href={item.ADD_FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>
//                       </p>
//                     )}
//                     {item.ADD_YOUTUBE && (
//                       <p>
//                         <br /><FaYoutube /> <a href={item.ADD_YOUTUBE} target="_blank" rel="noopener noreferrer">YouTube</a>
//                       </p>
//                     )}
//                     {item.ADD_INSTAGRAM && (
//                       <p>
//                         <br /><FaInstagram /> <a href={item.ADD_INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a>
//                       </p>
//                     )}
//                     {item.WORK_TIME && <p><br /><FiClock /> <strong>Öffnungszeiten:</strong><br /> {item.WORK_TIME}</p>}
//                   </ContactInfo>
//                 </SlideText>
//               </SlideContent>
//             </SlideOverlay>
//           </>
//         )}
//       </CardContent>
//     </Card>
//     );
// };

// // прокруктка до категорій
// useEffect(() => {
//   if (!loading && location.hash && cards?.length) {
//     const timeout = setTimeout(() => {
//       const targetId = location.hash.slice(1);
//       const target = document.getElementById(targetId);
//       if (target) {
//         const yOffset = -80; // висота фіксованого заголовка
//         const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
//         // window.scrollTo({ top: y, behavior: "smooth" });
//         smoothScrollTo(y, 2500); // ⏳ 2500мс = 2.5 секунди скролу
//       }
//     }, 1000); // ⏳ трохи зачекати після рендерингу

//     return () => clearTimeout(timeout);
//   }

// }, [location.hash, loading, cards]);

//   return (
//     <PageWrapper>
//       <Heading>{heading}</Heading>
//       <IntroText>{introText}</IntroText>

//       {loading ? (
//         <CardsContainer $itemCount={cards?.length || 3}>
//           {Array.from({ length: cards?.length || 3 }).map((_, i) => <SkeletonCard key={i} />)}
//         </CardsContainer>
//       ) : (() => {
//         const hasCategories = cards.some(c => c.CATEGORY);
//         if (hasCategories) {
//           const grouped = cards.reduce<Record<string, BauCard[]>>((acc, card) => {
//             const key = card.CATEGORY || "Sonstiges";
//             if (!acc[key]) acc[key] = [];
//             acc[key].push(card);
//             return acc;
//           }, {});
//           const sortedKeys = Object.keys(grouped).sort((a, b) => a.localeCompare(b));

//           return sortedKeys.map((category) => (
//             <section
//               key={category}
//               id={slugify(category)}
//               style={{ marginBottom: "2.5rem" }}
//             >
//               <CategoryName>
//                 Kategorie: <strong>{category}</strong>
//               </CategoryName>
//               <CardsContainer $itemCount={grouped[category].length}>
//                 {grouped[category].map(renderCard)}
//               </CardsContainer>
//             </section>
//           ));
//         } else {
//           return (
//             <CardsContainer $itemCount={cards.length}>
//               {cards.map(renderCard)}
//             </CardsContainer>
//           );
//         }
//       })()}
//     </PageWrapper>
//   );
// }




// + Barrierefreiheit
import { useEffect, useState, type ReactNode } from "react";
import {
  FiInfo,
  FiPhone,
  FiMail,
  FiGlobe,
  FiMapPin,
  FiClock,
  FiUser,
} from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useRef } from "react";
import {
  Arrow,
  Card,
  CardContent,
  CardImageWrapper,
  CardsContainer,
  CardSlogan,
  CardText,
  CardTextItems,
  CarouselWrapper,
  CategoryName,
  ContactInfo,
  Dot,
  Dots,
  Heading,
  IntroText,
  MoreButton,
  MoreButtonText,
  MoreButtonWrapper,
  OverlayControls,
  PageWrapper,
  SkeletonBox,
  SlideCloseButton,
  SlideContent,
  SlideOverlay,
  SlideText,
  SlideTitle,
} from "./styles";
import { useLocation } from "react-router-dom";

export interface BauCard {
  CATEGORY?: string;
  NAME?: string;
  INFO_SLOGAN?: string;
  CARD_SLOGAN?: string;
  CARD_TEXT?: string;
  CARD_ADRESS?: string;
  CARD_TEL?: string;
  CARD_EMAIL?: string;
  CARD_WEB?: string;
  CARD_EXTRA_INFO?: string;
  WORK_TIME?: string;
  ADD_PERSON?: string;
  ADD_TEL?: string;
  ADD_EMAIL?: string;
  ADD_FACEBOOK?: string;
  ADD_INSTAGRAM?: string;
  ADD_YOUTUBE?: string;
  PATH?: string;
  CATEGORY_PATH?: string;
}

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Функція прокрутки картинки в центр вьюпорту
  // const scrollCardIntoView = () => {
  //   if (carouselRef.current) {
  //     const rect = carouselRef.current.getBoundingClientRect();
  //     const scrollY = window.scrollY || window.pageYOffset;
  //     const y = scrollY + rect.top - window.innerHeight / 4 + rect.height / 4;

  //     window.scrollTo({
  //       top: y,
  //       behavior: "smooth",
  //     });
  //   }
  // };

//   return (
//   <div role="region" aria-label="Bildergalerie" ref={carouselRef}>
//     <CarouselWrapper>
//       <img
//         src={images[index]}
//         alt={`Bild ${index + 1} von ${images.length}`}
//         role="img"
//       />

//       {images.length > 1 && (
//         <>
//           <Arrow left onClick={handlePrev} aria-label="Vorheriges Bild" tabIndex={0}>
//             <BsArrowLeftCircle aria-hidden="true" />
//           </Arrow>

//           <Arrow right onClick={handleNext} aria-label="Nächstes Bild" tabIndex={0}>
//             <BsArrowRightCircle aria-hidden="true" />
//           </Arrow>

//           <Dots role="tablist" aria-label="Bildnavigation">
//             {images.map((_, i) => (
//               <Dot
//                 key={i}
//                 active={i === index}
//                 role="tab"
//                 aria-selected={i === index}
//                 aria-label={`Bild ${i + 1}`}
//                 tabIndex={0}
//                 onClick={() => setIndex(i)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     setIndex(i);
//                   }
//                 }}
//               />
//             ))}
//           </Dots>
//         </>
//       )}
//     </CarouselWrapper>
//   </div>
// );

return (
  <div role="region" aria-label="Bildergalerie" ref={carouselRef}>
    <CarouselWrapper>
      <img
        src={images[index]}
        alt={`Bild ${index + 1} von ${images.length}`}
        role="img"
      />

      {images.length > 1 && (
        <OverlayControls>
          <Arrow left onClick={handlePrev} aria-label="Vorheriges Bild" tabIndex={0}>
            <BsArrowLeftCircle aria-hidden="true" />
          </Arrow>

          <Dots role="tablist" aria-label="Bildnavigation">
            {images.map((_, i) => (
              <Dot
                key={i}
                active={i === index}
                role="tab"
                aria-selected={i === index}
                aria-label={`Bild ${i + 1}`}
                tabIndex={0}
                onClick={() => setIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIndex(i);
                  }
                }}
              />
            ))}
          </Dots>

          <Arrow right onClick={handleNext} aria-label="Nächstes Bild" tabIndex={0}>
            <BsArrowRightCircle aria-hidden="true" />
          </Arrow>
        </OverlayControls>
      )}
    </CarouselWrapper>
  </div>
);



}

// ... (the rest of the component remains unchanged, now augmented with accessibility attributes)

function SkeletonCard() {
  return (
    <Card style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
      <CardImageWrapper>
        <SkeletonBox
          width="100%"
          height="350px"
          style={{ borderRadius: "8px" }}
        />
      </CardImageWrapper>
      <CardContent>
        <SkeletonBox
          width="60%"
          height="20px"
          style={{ marginBottom: "1rem" }}
        />
        <SkeletonBox
          width="90%"
          height="14px"
          style={{ marginBottom: "0.5rem" }}
        />
        <SkeletonBox
          width="80%"
          height="14px"
          style={{ marginBottom: "1rem" }}
        />
        <SkeletonBox
          width="60%"
          height="12px"
          style={{ marginBottom: "0.4rem" }}
        />
        <SkeletonBox
          width="50%"
          height="12px"
          style={{ marginBottom: "1rem" }}
        />
        <SkeletonBox width="40%" height="30px" style={{ marginLeft: "auto" }} />
      </CardContent>
    </Card>
  );
}

interface CardTemplateProps {
  heading: string;
  introText: ReactNode;
  cards: BauCard[];
  loading: boolean;
  images?: Record<string, string[]>;
}

function slugify(name: string = "") {
  return (
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
  );
}

function smoothScrollTo(yTarget: number, duration: number = 700) {
  const start = window.pageYOffset;
  const distance = yTarget - start;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percent = Math.min(progress / duration, 1);
    window.scrollTo(0, start + distance * easeInOutQuad(percent));
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  window.requestAnimationFrame(step);
}

export default function CardTemplate({
  heading,
  introText,
  cards,
  loading,
  images,
}: CardTemplateProps) {
  // console.log("📦 cards:", cards); // ← ось тут

  const [openIndex, _] = useState<number | null>(null);
  // const handleOpen = (index: number) => setOpenIndex(index);
  // const handleClose = () => setOpenIndex(null);
  const location = useLocation();

  // const lastFocusedRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [openId, setOpenId] = useState<string | null>(null);

const handleOpen = (id: string) => {
  setOpenId(id);
};

const handleClose = () => {
  setOpenId(null);
};

  useEffect(() => {
    if (openIndex !== null) {
      setTimeout(() => {
        overlayRef.current?.focus();
      }, 50);
    }
  }, [openIndex]);

useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (openIndex === null) return;

    if (e.key === "Escape") {
      e.preventDefault();
      handleClose();
    }

    if (e.key === "Tab") {
      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable || focusable.length === 0) {
        e.preventDefault();
        handleClose();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          // Якщо фокус стоїть на останньому елементі й натискаємо Tab
          e.preventDefault();
          handleClose();
        }
      }
    }
  };

  document.addEventListener("keydown", handleKey);
  return () => document.removeEventListener("keydown", handleKey);
}, [openIndex]);

  // прокрутка для імен
  useEffect(() => {
    if (!loading && location.hash && cards?.length) {
      const hash = location.hash.slice(1);
      const existsInNames = cards.some((c) => c.NAME?.toLowerCase() === hash);

      if (existsInNames) {
        const timeout = setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            const yOffset = -80;
            const y =
              target.getBoundingClientRect().top + window.scrollY + yOffset;
            smoothScrollTo(y, 50);
          }
        }, 500); // трохи менше, ніж на категоріях

        return () => clearTimeout(timeout);
      }
    }
  }, [location.hash, loading, cards]);

const renderCard = (item: BauCard, index: number) => {
  const id = item.PATH?.split("#")[1] ?? item.NAME ?? `card-${index}`;
    return (
      <Card
        id={id}
        key={id}
      >
        <CardImageWrapper>
          {images?.[item.NAME ?? ""]?.length ? (
            <ImageCarousel images={images[item.NAME ?? ""]} />
          ) : (
            <img src="/images/Bauland/mainPhoto.png" alt={item.NAME} />
          )}
        </CardImageWrapper>

        <CardContent>
          <CardSlogan>{item.CARD_SLOGAN}</CardSlogan>
          <CardText>{item.CARD_TEXT}</CardText>
          <ContactInfo>
            {item.ADD_PERSON && (
              <CardTextItems>
                <strong>
                  <FiUser /> {item.ADD_PERSON}
                </strong>
              </CardTextItems>
            )}
            {item.CARD_TEL && (
              <CardTextItems>
                <FiPhone /> {item.CARD_TEL}
              </CardTextItems>
            )}
            {item.CARD_EMAIL && (
              <CardTextItems>
                <FiMail /> {item.CARD_EMAIL}
              </CardTextItems>
            )}
            {item.CARD_ADRESS && (
              <CardTextItems>
                <FiMapPin /> {item.CARD_ADRESS}
              </CardTextItems>
            )}
            {item.CARD_WEB && (
              <CardTextItems>
                <FiGlobe />{" "}
                <a
                  href={
                    item.CARD_WEB.startsWith("http")
                      ? item.CARD_WEB
                      : `https://${item.CARD_WEB}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.CARD_WEB}
                </a>
              </CardTextItems>
            )}
          </ContactInfo>

          {item.CARD_EXTRA_INFO && (
            <>
              <MoreButtonWrapper>
                <MoreButton
                  onClick={() => handleOpen(id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpen(id);
                    }
                  }}
                  className={openId === id ? "active" : ""}
                  aria-expanded={openId === id}
                  aria-controls={`slide-${id}`}
                >
                  <MoreButtonText>
                    <FiInfo /> Mehr erfahren
                  </MoreButtonText>
                </MoreButton>
              </MoreButtonWrapper>

              {openId === id && (
                <SlideOverlay
                  id={`slide-${id}`}
                  $isVisible={true}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`slide-title-${index}`}
                >
                  <SlideContent tabIndex={-1} ref={overlayRef}>
                    <SlideCloseButton
                      onClick={handleClose}
                      aria-label="Fenster schließen"
                    >
                      ✖
                    </SlideCloseButton>
                    <SlideTitle id={`slide-title-${index}`}>
                      Weitere Informationen
                    </SlideTitle>
                    <SlideText>
                      {item.CARD_EXTRA_INFO}
                      <ContactInfo>
                        {item.ADD_TEL && (
                          <p>
                            <FiPhone /> {item.ADD_TEL}
                          </p>
                        )}
                        {item.ADD_EMAIL && (
                          <p>
                            <FiMail /> {item.ADD_EMAIL}
                          </p>
                        )}
                        {item.ADD_FACEBOOK && (
                          <p>
                            <br />
                            <FaFacebookF />{" "}
                            <a
                              href={item.ADD_FACEBOOK}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Facebook
                            </a>
                          </p>
                        )}
                        {item.ADD_YOUTUBE && (
                          <p>
                            <br />
                            <FaYoutube />{" "}
                            <a
                              href={item.ADD_YOUTUBE}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              YouTube
                            </a>
                          </p>
                        )}
                        {item.ADD_INSTAGRAM && (
                          <p>
                            <br />
                            <FaInstagram />{" "}
                            <a
                              href={item.ADD_INSTAGRAM}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Instagram
                            </a>
                          </p>
                        )}
                        {item.WORK_TIME && (
                          <p>
                            <br />
                            <FiClock /> <strong>Öffnungszeiten:</strong>
                            <br /> {item.WORK_TIME}
                          </p>
                        )}
                      </ContactInfo>
                    </SlideText>
                  </SlideContent>
                </SlideOverlay>
              )}
            </>
          )}
        </CardContent>
      </Card>
    );
  };

  // прокруктка до категорій
  useEffect(() => {
    if (!loading && location.hash && cards?.length) {
      const timeout = setTimeout(() => {
        const targetId = location.hash.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          const yOffset = -80; // висота фіксованого заголовка
          const y =
            target.getBoundingClientRect().top + window.scrollY + yOffset;
          // window.scrollTo({ top: y, behavior: "smooth" });
          smoothScrollTo(y, 2500); // ⏳ 2500мс = 2.5 секунди скролу
        }
      }, 1000); // ⏳ трохи зачекати після рендерингу

      return () => clearTimeout(timeout);
    }
  }, [location.hash, loading, cards]);

  return (
    <PageWrapper>
      <Heading>{heading}</Heading>
      <IntroText>{introText}</IntroText>

      {loading ? (
        <CardsContainer $itemCount={cards?.length || 3}>
          {Array.from({ length: cards?.length || 3 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </CardsContainer>
      ) : (
        (() => {
          const hasCategories = cards.some((c) => c.CATEGORY);
          if (hasCategories) {
            const grouped = cards.reduce<Record<string, BauCard[]>>(
              (acc, card) => {
                const key = card.CATEGORY || "Sonstiges";
                if (!acc[key]) acc[key] = [];
                acc[key].push(card);
                return acc;
              },
              {}
            );
            const sortedKeys = Object.keys(grouped).sort((a, b) =>
              a.localeCompare(b)
            );

            return sortedKeys.map((category) => (
              <section
                key={category}
                id={slugify(category)}
                style={{ marginBottom: "2.5rem" }}
              >
                <CategoryName>
                  Kategorie: <strong>{category}</strong>
                </CategoryName>
                <CardsContainer $itemCount={grouped[category].length}>
                  {grouped[category].map(renderCard)}
                </CardsContainer>
              </section>
            ));
          } else {
            return (
              <CardsContainer $itemCount={cards.length}>
                {cards.map(renderCard)}
              </CardsContainer>
            );
          }
        })()
      )}
    </PageWrapper>
  );
}

