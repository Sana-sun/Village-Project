// import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";
// import rawMd from "./text.md?raw";

// function BauLand() {
//   return <MarkdownPageTemplate markdown={rawMd} />;
// }

// export default BauLand;


import { useEffect, useState } from "react";
import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function BauLand() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://script.googleusercontent.com/a/macros/sana-sun.com/echo?user_content_key=AehSKLi299kNPDVyvkF5ZWBrirQx2gt_R7l-1KS2OpPBw-acxVXg_Cl3gpfOCvENRM0HRou8QRHhLJrFDJ82-cpmUWXD5wshUTd0U5YBDZFuUwp0VpoQj-qSA76_QxLS2aBvio6c2Er_Vjo3Fyjl76icXOZSimcEdq-QddTUPoM4sh4Z1Scg2wJnbu1ixgp8AKiod0NrtQThQzS_Lbg3Ix5yeXAFcelvdDA4a8lDoaiJH6WOuUH3VeT4keGLoLafCWHje3girhVYm2T2OBy20nzlj-KL3DR-eCcCGcMgzNvlKyc30mz9FbY&lib=MaSdhTTlyG_sOh8kbTwgkfhIMQKN1ylQ6") // твій JSON URL
      .then((res) => res.json())
      .then((data) => {
        // Виводимо повністю
        console.log("Full JSON:", data);

        // Варіант 1: якщо Baugrundstücke це ключ в data["Schönwalde entdecken"]
        const allDiscover = data["Schönwalde entdecken"] || [];

        // Варіант 2: якщо Baugrundstücke — окрема сторінка
        const bauData = data["Baugrundstücke"] || [];

        console.log("Baugrundstücke data:", bauData);

        // Поки що збережемо
        setCards(bauData);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <MarkdownPageTemplate markdown={rawMd}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Baugrundstücke – Daten</h2>
        {cards.length > 0 ? (
          <ul className="space-y-4">
            {cards.map((card, idx) => (
              <li key={idx} className="border p-4 rounded-lg shadow">
                <p className="font-semibold">{card.NAME}</p>
                {card.CARD_SLOGAN && <p>{card.CARD_SLOGAN}</p>}
                {card.CARD_TEXT && <p>{card.CARD_TEXT}</p>}
                {card.CARD_ADRESS && <p>📍 {card.CARD_ADRESS}</p>}
                {card.CARD_TEL && <p>📞 {card.CARD_TEL}</p>}
                {card.CARD_EMAIL && <p>✉️ {card.CARD_EMAIL}</p>}
                {card.CARD_WEB && (
                  <p>
                    🌐 <a href={card.CARD_WEB}>{card.CARD_WEB}</a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Немає інформації про Baugrundstücke</p>
        )}
      </div>
    </MarkdownPageTemplate>
  );
}

export default BauLand;
