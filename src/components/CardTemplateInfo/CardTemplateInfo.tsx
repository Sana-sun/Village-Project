// + Barrierefreiheit
import { useEffect, useState, type ReactNode, useRef } from "react";
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
import {
  Card,
  CardContent,
  CardsContainer,
  CardSlogan,
  CardText,
  CardTextItems,
  ContactInfo,
  DateText,
  Heading,
  IntroText,
  MoreButton,
  MoreButtonText,
  MoreButtonWrapper,
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
  DATUM_DER_HINZUFÜGUNG?: string;
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
}

function SkeletonCard() {
  return (
    <Card style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
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

export default function CardTemplateInfo({
  heading,
  introText,
  cards,
  loading,
}: CardTemplateProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const location = useLocation();
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = (index: number) => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setOpenIndex(index);
  };

  const handleClose = () => {
    setOpenIndex(null);
    setTimeout(() => lastFocusedRef.current?.focus(), 10);
  };

  useEffect(() => {
    if (openIndex !== null) {
      setTimeout(() => overlayRef.current?.focus(), 50);
    }
  }, [openIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [openIndex]);

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
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [location.hash, loading, cards]);

  const sortedCards = [...cards].sort((a, b) => {
    const dateA = a.DATUM_DER_HINZUFÜGUNG
      ? new Date(a.DATUM_DER_HINZUFÜGUNG)
      : new Date(0);
    const dateB = b.DATUM_DER_HINZUFÜGUNG
      ? new Date(b.DATUM_DER_HINZUFÜGUNG)
      : new Date(0);
    return dateB.getTime() - dateA.getTime(); // новіші зверху
  });

  const renderCard = (item: BauCard, index: number) => {
    const id = item.PATH?.split("#")[1];

    return (
      <Card id={id} key={`${item.NAME ?? "item"}-${index}`}>
        <CardContent>
          {item.DATUM_DER_HINZUFÜGUNG && (
            <DateText>
              {`Hinzugefügt am: ${new Date(
                item.DATUM_DER_HINZUFÜGUNG
              ).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}`}
            </DateText>
          )}

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
                <MoreButton onClick={() => handleOpen(index)}>
                  <MoreButtonText>
                    <FiInfo /> Mehr erfahren
                  </MoreButtonText>
                </MoreButton>
              </MoreButtonWrapper>

              {openIndex === index && (
                <SlideOverlay
                  id={`slide-${index}`}
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
                            <br />
                            {item.WORK_TIME}
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
        <CardsContainer $itemCount={sortedCards.length}>
          {sortedCards.map(renderCard)}
        </CardsContainer>
      )}
    </PageWrapper>
  );
}
