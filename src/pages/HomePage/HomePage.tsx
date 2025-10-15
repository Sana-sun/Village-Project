// + Barrierefreiheit
import { useEffect, useState } from "react";
import CardTemplateSmall from "../../components/CardTemplateSmall/CardTemplateSmall";
import { useData } from "../../context/DataContext";
import MainCarousel from "./MainCarousel/MainCarousel";
import { Heading, IntroText, MainContext } from "./styles";
import { ImageOnlyGallery } from "./ImageOnlyCard/ImageOnlyGallery";
import { Helmet } from "react-helmet"; // ✅ ОЦЕ — нове
// import HinweiseBtn from "../../components/HinweiseBtn/HinweiseBtn";

function HomePage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const geschichteImages = [
    "/images/OtherPictures/Geschichte/1.avif",
    "/images/OtherPictures/Geschichte/2.avif",
    "/images/OtherPictures/Geschichte/3.avif",
    "/images/OtherPictures/Geschichte/4.avif",
  ];

  useEffect(() => {
    if (data?.["Schönwalde entdecken"]) {
      setCards(data["Schönwalde entdecken"]);
      setLoading(false);
    }
  }, [data]);

  return (
    <main role="main">

      {/* ✅ SEO МЕТАДАНІ */}
      <Helmet>
        <title>Gemeinde Schönwald (Spreewald) – Offizielle Webseite</title>
        <meta
          name="description"
          content="Willkommen in Schönwald (15910 Spreewald) – Informationen zur Gemeinde, den Ortsteilen Schönwalde & Waldow/Brand, Geschichte, Veranstaltungen und mehr."
        />
      </Helmet>

      <MainCarousel aria-label="Bilderkarussell der Gemeinde" />

      <MainContext>
        <section aria-labelledby="willkommen-heading">


          <CardTemplateSmall
            heading="🌞 Willkommen in Schönwald Spreewald - ein Ort, an dem Natur und Gemeinschaft im Einklang leben."
            introText={
              <>
                Die Gemeinde Schönwald besteht aus den Ortsteilen Schönwalde und
                Waldow/Brand.
              </>
            }
            cards={cards}
            loading={loading}
          />
        </section>

        {/* <HinweiseWrapper>
          <h2>Noch im Aufbau</h2>
          <HinweiseBtn />
        </HinweiseWrapper> */}

        <section aria-labelledby="geschichte-heading">
          <Heading as="h2" id="geschichte-heading">
            🏰 Geschichte von Schönwalde (15910 Spreewald)
          </Heading>
          <IntroText>
            Schönwalde ist nicht nur ein Dorf, sondern ein Ort mit tief
            verwurzelter Geschichte, die bis ins 14. Jahrhundert zurückreicht.
            Die Vergangenheit des Ortes ist ein Mosaik aus Ereignissen,
            Traditionen und einem starken Gemeinschaftsgeist, der über
            Jahrhunderte hinweg gewachsen ist.
          </IntroText>

          <ImageOnlyGallery
            images={geschichteImages}
            loading={false}
            ariaLabel="Bildergalerie zur Geschichte von Schönwalde"
          />
        </section>
        
        <section aria-labelledby="heute-heading">
          <Heading as="h2" id="heute-heading">
            Happy in Schönwalde (Pharrell Williams)
          </Heading>
          <IntroText>
            Im April und Mai 2014 haben ca. 150 Schönwalder und Waldower ihre Video-Version des Hits "Happy" gedreht. Am 20.6.2014 gab es die Premieren-Vorstellung in der Kirche von 15910 Schönwalde (Spreewald).
          </IntroText>
        </section>

        <div
          style={{
            margin: "2rem 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", width: "100%", paddingTop: "60%" }}>
            <iframe
              src="https://www.youtube.com/embed/0r2kwb1qceU?hl=de"
              title="Geschichte von Schönwalde"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "8px",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <section aria-labelledby="heute-heading">
          <Heading as="h2" id="heute-heading">
            🌿 Heute
          </Heading>
          <IntroText>
            Schönwalde ist ein Ort, an dem Geschichte nicht nur bewahrt,
            sondern gelebt wird. Zwischen denkmalgeschützten Bauten, ländlicher
            Idylle und moderner Lebensqualität bleibt das kulturelle Erbe
            spürbar lebendig.
          </IntroText>
        </section>

        <section aria-labelledby="zukunft-heading">
          <Heading as="h2" id="zukunft-heading">
            Schönwalde – wo Vergangenheit lebt und Zukunft gemeinsam entsteht
          </Heading>
        </section>
      </MainContext>
    </main>
  );
}

export default HomePage;
