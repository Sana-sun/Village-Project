import { type ReactNode } from "react";
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
} from "./styles";

interface SmallCard {
  CARD_TITLE: string;
  CARD_TEXT?: string;
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
    <Card style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
      <CardImageWrapper>
        <SkeletonBox width="100%" height="240px" style={{ borderRadius: "8px" }} />
      </CardImageWrapper>
      <CardContent>
        <SkeletonBox width="70%" height="20px" style={{ marginBottom: "1rem" }} />
        <SkeletonBox width="90%" height="14px" style={{ marginBottom: "0.5rem" }} />
        <SkeletonBox width="80%" height="14px" />
      </CardContent>
    </Card>
  );
}

export default function SmallCardTemplate({ heading, introText, cards, loading, images }: SmallCardTemplateProps) {
  return (
    <PageWrapper>
      <Heading>{heading}</Heading>
      <IntroText>{introText}</IntroText>

      <CardsContainer itemCount={cards.length}>
        {loading
          ? Array.from({ length: 2 }).map((_, i) => <SkeletonSmallCard key={i} />)
          : cards.map((item, index) => (
              <Card key={`${item.CARD_TITLE}-${index}`}>
                <CardImageWrapper>
                  {images?.[item.CARD_TITLE]?.length ? (
                    <img src={images[item.CARD_TITLE][0]} alt={item.CARD_TITLE} />
                  ) : (
                    <img src="/images/Bauland/mainPhoto.png" alt={item.CARD_TITLE} />
                  )}
                </CardImageWrapper>
                <CardContent>
                  <CardSlogan>{item.CARD_TITLE}</CardSlogan>
                  <CardText>{item.CARD_TEXT}</CardText>
                </CardContent>
              </Card>
            ))}
      </CardsContainer>
    </PageWrapper>
  );
}
