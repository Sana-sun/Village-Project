// import { Card, CardImageWrapper, CardsContainer, SkeletonBox } from "./styles";

// function SkeletonImageCard() {
//   return (
//     <Card style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
//       <CardImageWrapper>
//         <SkeletonBox width="100%" height="240px" style={{ borderRadius: "8px" }} />
//       </CardImageWrapper>
//     </Card>
//   );
// }

// interface ImageOnlyGalleryProps {
//   images: string[];
//   loading: boolean;
// }

// export function ImageOnlyGallery({ images, loading }: ImageOnlyGalleryProps) {
//   return (
//     <CardsContainer itemCount={images.length}>
//       {loading
//         ? Array.from({ length: 3 }).map((_, i) => <SkeletonImageCard key={i} />)
//         : images.map((src, index) => (
//             <Card key={index}>
//               <CardImageWrapper>
//                 <img src={src} alt={`Geschichte Bild ${index + 1}`} />
//               </CardImageWrapper>
//             </Card>
//           ))}
//     </CardsContainer>
//   );
// }


// + Barrierefreiheit
import { Card, CardImageWrapper, CardsContainer, SkeletonBox } from "./styles";

function SkeletonImageCard() {
  return (
    <Card
      style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}
      aria-hidden="true"
    >
      <CardImageWrapper>
        <SkeletonBox width="100%" height="240px" style={{ borderRadius: "8px" }} />
      </CardImageWrapper>
    </Card>
  );
}

interface ImageOnlyGalleryProps {
  images: string[];
  loading: boolean;
  ariaLabel?: string;
}

export function ImageOnlyGallery({
  images,
  loading,
  ariaLabel = "Bildgalerie",
}: ImageOnlyGalleryProps) {
  return (
    <CardsContainer
      itemCount={images.length}
      role="region"
      aria-label={ariaLabel}
    >
      {loading
        ? Array.from({ length: 3 }).map((_, i) => <SkeletonImageCard key={i} />)
        : images.map((src, index) => (
            <Card key={index}>
              <CardImageWrapper>
                <img
                  src={src}
                  alt={`Bild ${index + 1} von ${images.length}`}
                  role="img"
                  // new
                  width={400} // наприклад, 400px ширина
                  height={300} // 300px висота
                  // loading="lazy"
                  style={{ objectFit: "cover", maxWidth: "100%", height: "auto" }}
                />
              </CardImageWrapper>
            </Card>
          ))}
    </CardsContainer>
  );
}
