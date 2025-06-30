import { useState, type ReactNode } from "react";

import {
  FiInfo,
  FiPhone,
  FiMail,
  FiGlobe,
  FiMapPin,
  FiClock,
  FiUser
} from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { Arrow, Card, CardContent, CardImageWrapper, CardsContainer, CardSlogan, CardText, CardTextItems, CarouselWrapper, ContactInfo, Dot, Dots, Heading, IntroText, MoreButton, MoreButtonText, MoreButtonWrapper, PageWrapper, SkeletonBox, SlideCloseButton, SlideContent, SlideOverlay, SlideText, SlideTitle } from "./styles";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";


export interface BauCard {
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
  ADD_YOUTUBE?: string;
}

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      <CarouselWrapper>
        <img src={images[index]} alt={`Bild ${index + 1}`} />
        {images.length > 1 && (
          <>
            <Arrow left onClick={handlePrev}><BsArrowLeftCircle  /></Arrow>
            <Arrow onClick={handleNext}><BsArrowRightCircle /></Arrow>
          </>
        )}
      </CarouselWrapper>

      {images.length > 1 && (
        <Dots>
          {images.map((_, i) => (
            <Dot key={i} active={i === index} />
          ))}
        </Dots>
      )}
    </div>
  );
}

function SkeletonCard() {
  return (
    <Card style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
      <CardImageWrapper style={{ marginBottom: 0 }}>
        <SkeletonBox width="100%" height="350px" style={{ borderRadius: "8px" }} />
      </CardImageWrapper>
      <CardContent>
        <SkeletonBox width="60%" height="20px" style={{ marginBottom: "1rem" }} />
        <SkeletonBox width="90%" height="14px" style={{ marginBottom: "0.5rem" }} />
        <SkeletonBox width="80%" height="14px" style={{ marginBottom: "1rem" }} />
        <SkeletonBox width="60%" height="12px" style={{ marginBottom: "0.4rem" }} />
        <SkeletonBox width="50%" height="12px" style={{ marginBottom: "1rem" }} />
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

export default function CardTemplate({ heading, introText, cards, loading, images }: CardTemplateProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => setOpenIndex(index);
  const handleClose = () => setOpenIndex(null);

  return (
    <PageWrapper>
      <Heading>{heading}</Heading>
      <IntroText>{introText}</IntroText>

      {loading ? (
        <CardsContainer itemCount={cards?.length || 3}>
          {Array.from({ length: cards?.length || 3 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </CardsContainer>
      ) : (
        <CardsContainer itemCount={cards?.length || 0}>
            {cards.map((item, index) => (
                <Card key={index}>
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
                  {item.ADD_PERSON && <CardTextItems><strong><FiUser /> {" "}{item.ADD_PERSON}</strong></CardTextItems>}
                  {item.CARD_TEL && <CardTextItems><FiPhone /> {item.CARD_TEL}</CardTextItems>}
                  {item.CARD_EMAIL && <CardTextItems><FiMail /> {item.CARD_EMAIL}</CardTextItems>}
                  {item.CARD_ADRESS && <CardTextItems><FiMapPin /> {item.CARD_ADRESS}</CardTextItems>}
                  {item.CARD_WEB && <CardTextItems><FiGlobe />{" "}
                    <a
                    href={item.CARD_WEB?.startsWith("http") ? item.CARD_WEB : `https://${item.CARD_WEB}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {item.CARD_WEB}
                    </a>
                  </CardTextItems>}
                  {/* {item.CARD_WEB && (
                  <CardTextItems>
                    <FiGlobe />{" "}
                    <a
                      href={item.CARD_WEB?.startsWith("http") ? item.CARD_WEB : `https://${item.CARD_WEB}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  </CardTextItems>
                )} */}

                </ContactInfo>

                {item.CARD_EXTRA_INFO && (
                  <>
                    <MoreButtonWrapper>
                      <MoreButton onClick={() => handleOpen(index)} className={openIndex === index ? "active" : ""}>
                        <MoreButtonText><FiInfo /> Mehr erfahren</MoreButtonText>
                      </MoreButton>
                    </MoreButtonWrapper>

                    <SlideOverlay isVisible={openIndex === index}>
                      <SlideContent>
                        <SlideCloseButton onClick={handleClose}>✖</SlideCloseButton>
                        <SlideTitle>Weitere Informationen</SlideTitle>
                        <SlideText>
                          {item.CARD_EXTRA_INFO}
                          <ContactInfo>
                            {/* {item.ADD_PERSON && <strong><FiUser /> {item.ADD_PERSON}</strong>} */}
                            {item.ADD_TEL && <p><FiPhone /> {item.ADD_TEL}</p>}
                            {item.ADD_EMAIL && <p><FiMail /> {item.ADD_EMAIL}</p>}
                            {item.ADD_FACEBOOK && (
                              <p>
                                <br /><FaFacebookF /> <a href={item.ADD_FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>
                              </p>
                            )}
                            {item.ADD_YOUTUBE && (
                              <p>
                                <FaYoutube /> <a href={item.ADD_YOUTUBE} target="_blank" rel="noopener noreferrer">YouTube</a>
                              </p>
                            )}
                            {item.WORK_TIME && <p><br /><FiClock /> <strong>Öffnungszeiten:</strong><br /> {item.WORK_TIME}</p>}

                          </ContactInfo>
                        </SlideText>
                      </SlideContent>
                    </SlideOverlay>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
      )}
    </PageWrapper>
  );
}
