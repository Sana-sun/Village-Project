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



// #2 + Barrierefreiheit
// import { Card, CardImageWrapper, CardsContainer, SkeletonBox } from "./styles";

// function SkeletonImageCard() {
//   return (
//     <Card
//       style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}
//       aria-hidden="true"
//     >
//       <CardImageWrapper>
//         <SkeletonBox width="100%" height="240px" style={{ borderRadius: "8px" }} />
//       </CardImageWrapper>
//     </Card>
//   );
// }

// interface ImageOnlyGalleryProps {
//   images: string[];
//   loading: boolean;
//   ariaLabel?: string;
// }

// export function ImageOnlyGallery({
//   images,
//   loading,
//   ariaLabel = "Bildgalerie",
// }: ImageOnlyGalleryProps) {
//   return (
//     <CardsContainer
//       itemCount={images.length}
//       role="region"
//       aria-label={ariaLabel}
//     >
//       {loading
//         ? Array.from({ length: 3 }).map((_, i) => <SkeletonImageCard key={i} />)
//         : images.map((src, index) => (
//             <Card key={index}>
//               <CardImageWrapper>
//                 <img
//                   src={src}
//                   alt={`Bild ${index + 1} von ${images.length}`}
//                   role="img"
//                   // new
//                   width={400} // наприклад, 400px ширина
//                   height={300} // 300px висота
//                   // loading="lazy"
//                   style={{ objectFit: "cover", maxWidth: "100%", height: "auto" }}
//                 />
//               </CardImageWrapper>
//             </Card>
//           ))}
//     </CardsContainer>
//   );
// }




// #3 + Дані з контексту
import { Card, CardImageWrapper, CardsContainer, SkeletonBox } from "./styles";

interface ImageOnlyGalleryProps {
  data?: any; // ✅ додаємо прийом усіх даних
  images?: string[];
  loading: boolean;
  ariaLabel?: string;
}

// допоміжна функція для нормалізації поля IMAGES
function normalizeImages(images?: string | string[]): string[] {
  if (!images) return [];
  if (Array.isArray(images)) return images;
  return images
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);
}

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

export function ImageOnlyGallery({
  data,
  images,
  loading,
  ariaLabel = "Bildgalerie",
}: ImageOnlyGalleryProps) {
  // якщо передали data — шукаємо фото з потрібної сторінки
  let galleryImages: string[] = [];

  if (data?.["Schönwalde entdecken"]) {
    const entry = data["Schönwalde entdecken"].find(
      (item: any) => item.CARD_TITLE?.trim() === "Main-Geschichte"
    );
    galleryImages = normalizeImages(entry?.IMAGES);
  } else if (images?.length) {
    galleryImages = images;
  }

  return (
    <CardsContainer
      itemCount={galleryImages.length}
      role="region"
      aria-label={ariaLabel}
    >
      {loading
        ? Array.from({ length: 3 }).map((_, i) => <SkeletonImageCard key={i} />)
        : galleryImages.map((src, index) => (
            <Card key={index}>
              <CardImageWrapper>
                <img
                  src={src}
                  alt={`Bild ${index + 1} von ${galleryImages.length}`}
                  width={400}
                  height={300}
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </CardImageWrapper>
            </Card>
          ))}
    </CardsContainer>
  );
}
