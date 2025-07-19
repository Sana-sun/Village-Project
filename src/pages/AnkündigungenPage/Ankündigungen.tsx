// + Barrierefreiheit
import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import CardTemplateInfo from "../../components/CardTemplateInfo/CardTemplateInfo";
import { InfoTooltip } from "../../components/InfoTooltip/InfoTooltip";

export default function Ankündigungen() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bauData = data?.["Ankündigungen"];
    if (bauData) {
      setCards(bauData);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <YourAreHere infoPageName="Ankündigungen" />

      <CardTemplateInfo
        heading="📢 Gemeinde Schönwald"
        introText={
          <>
            Alles Wichtige auf einen Blick – bleiben Sie informiert.
          </>
        }
        
        cards={cards}
        loading={loading}
      />

      <InfoTooltip>
        <p>
          Möchten Sie eine Ankündigung auf dieser Seite veröffentlichen, bitten
          wir Sie, dies vorab mit dem Bürgermeister abzustimmen.
          <br />
          <br />
          Bitte senden Sie den vollständigen Ankündigungstext an folgende
          E-Mail-Adresse:
          <br />

          <strong>sana@sana-sun.com</strong>
          <br />
          <br />
          Es werden ausschließlich Texte veröffentlicht – bitte senden Sie keine
          Fotos.
          <br />
          <br />
          Ihre Ankündigung sollte möglichst einen kurzen Slogan und einen
          informativen Haupttext enthalten. Angaben zu Ort, Zeit und
          Kontaktpersonen erscheinen in der Hauptkarte. Zusätzliche
          Informationen können über die Schaltfläche <em>
            „Mehr erfahren“
          </em>{" "}
          auf einer erweiterten Karte dargestellt werden – analog zu den anderen
          Seiten.
        </p>
      </InfoTooltip>
    </>
  );
}

