// // import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";
// // import rawMd from "./text.md?raw";

// // function BauLand() {
// //   return <MarkdownPageTemplate markdown={rawMd} />;
// // }

// // export default BauLand;

// // 2 - інфо тільки картки
// // import { useData } from "../../context/DataContext";

// // function BauLand() {
// //   const data = useData();

// //   if (!data) {
// //     return <div>Loading...</div>;
// //   }

// //   console.log("BauLand data:", data);

// //   return (
// //     <div>
// //       <h1>Baugrundstücke</h1>
// //       <pre>{JSON.stringify(data.Baugrundstücke, null, 2)}</pre>
// //     </div>
// //   );
// // }

// // export default BauLand;

// // 3 - інфо і слогана і картки
// // import { useData } from "../../context/DataContext";

// // function BauLand() {
// //   const data = useData();

// //   if (!data) return <div>Loading...</div>;

// //   const infoPage = data.InfoPages?.find(
// //     (page: any) => page.PAGE === "Baugrundstücke"
// //   );

// //   return (
// //     <div>
// //       <h1>{infoPage?.MAIN_SLOGAN}</h1>
// //       <p>{infoPage?.MAIN_TEXT}</p>

// //       {/* Якщо хочеш бачити всі обʼєкти, наприклад картки на цій сторінці */}
// //       {data["Baugrundstücke"]?.map((item: any, index: number) => (
// //         <div key={index} style={{ marginTop: "2rem" }}>
// //           <h2>{item.NAME}</h2>
// //           <p>{item.CARD_SLOGAN}</p>
// //           <p>{item.CARD_TEXT}</p>
// //           <p>{item.CARD_ADRESS}</p>
// //           <p>{item.CARD_TEL}</p>
// //           <p>{item.CARD_EMAIL}</p>
// //           <p>{item.CARD_WEB}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default BauLand;

// // 4 - інфо слогана - хард і картки
// // import { useData } from "../../context/DataContext";

// // function BauLand() {
// //   const data = useData();

// //   if (!data) return <div>Loading...</div>;

// //   return (
// //     <div>
// //       <h1>🏡 Suchen Sie ein Zuhause im Grünen?</h1>
// //       <p>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
// //         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
// //         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </p>

// //       {/* Якщо хочеш бачити всі обʼєкти, наприклад картки на цій сторінці */}
// //       {data["Baugrundstücke"]?.map((item: any, index: number) => (
// //         <div key={index} style={{ marginTop: "2rem" }}>
// //           <h2>{item.NAME}</h2>
// //           <p>{item.CARD_SLOGAN}</p>
// //           <p>{item.CARD_TEXT}</p>
// //           <p>{item.CARD_ADRESS}</p>
// //           <p>{item.CARD_TEL}</p>
// //           <p>{item.CARD_EMAIL}</p>
// //           <p>{item.CARD_WEB}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default BauLand;

// // 5 - варіант коли чекають:    --> тут треба скелетон
// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";

// // const fallbackData = [
// //   {
// //     NAME: "Baugrundstück Beispiel",
// //     CARD_SLOGAN: "🏡 Traumgrundstück wartet",
// //     CARD_TEXT: "Beispieltext für Grundstück in schöner Lage.",
// //     CARD_ADRESS: "Beispielstraße 1, 15910 Schönwalde",
// //     CARD_TEL: "01234 56789",
// //     CARD_EMAIL: "info@example.de",
// //     CARD_WEB: "www.beispiel.de"
// //   },
// // ];

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(fallbackData);

// //   useEffect(() => {
// //     if (data && data["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //     }
// //   }, [data]);

// //   return (
// //     <div>
// //       <h1>🏡 Suchen Sie ein Zuhause im Grünen?</h1>
// //       <p>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
// //         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
// //         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </p>

// //       {cards.map((item, index) => (
// //         <div key={index} style={{ marginTop: "2rem" }}>
// //           <h2>{item.NAME}</h2>
// //           <p>{item.CARD_SLOGAN}</p>
// //           <p>{item.CARD_TEXT}</p>
// //           <p>{item.CARD_ADRESS}</p>
// //           <p>{item.CARD_TEL}</p>
// //           <p>{item.CARD_EMAIL}</p>
// //           <p>{item.CARD_WEB}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default BauLand;

// // // скелетон
// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";

// // function SkeletonCard() {
// //   return (
// //     <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", maxWidth: "400px" }}>
// //       <div style={{ backgroundColor: "#ddd", height: "24px", width: "60%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //       <div style={{ backgroundColor: "#eee", height: "16px", width: "40%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //       <div style={{ backgroundColor: "#eee", height: "16px", width: "90%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //       <div style={{ backgroundColor: "#eee", height: "16px", width: "80%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //       <div style={{ backgroundColor: "#eee", height: "16px", width: "50%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //     </div>
// //   );
// // }

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (data && data["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //       setLoading(false);
// //     }
// //   }, [data]);

// //   return (
// //     <div>
// //       <h1>🏡 Suchen Sie ein Zuhause im Grünen?</h1>
// //       <p>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
// //         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
// //         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </p>

// //       {loading ? (
// //         // Показуємо 3 скелетон-карти поки дані не завантажились
// //         <>
// //           <SkeletonCard />
// //           <SkeletonCard />
// //           <SkeletonCard />
// //         </>
// //       ) : (
// //         cards?.map((item, index) => (
// //           <div key={index} style={{ marginTop: "2rem" }}>
// //             <h2>{item.NAME}</h2>
// //             <p>{item.CARD_SLOGAN}</p>
// //             <p>{item.CARD_TEXT}</p>
// //             <p>{item.CARD_ADRESS}</p>
// //             <p>{item.CARD_TEL}</p>
// //             <p>{item.CARD_EMAIL}</p>
// //             <p>{item.CARD_WEB}</p>
// //             <p>{item.CARD_EXTRA_INFO}</p>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // export default BauLand;

// // // скелетон + фото
// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";

// // function SkeletonCard() {
// //   return (
// //     <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", maxWidth: "400px" }}>
// //       <div style={{ backgroundColor: "#ddd", height: "24px", width: "60%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //       <div style={{ backgroundColor: "#eee", height: "16px", width: "40%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //       <div style={{ backgroundColor: "#eee", height: "16px", width: "90%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //       <div style={{ backgroundColor: "#eee", height: "16px", width: "80%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //       <div style={{ backgroundColor: "#eee", height: "16px", width: "50%", marginBottom: "0.5rem", borderRadius: "4px" }}></div>
// //     </div>
// //   );
// // }

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (data && data["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //       setLoading(false);
// //     }
// //   }, [data]);

// //   return (
// //     <div>
// //       <h1>🏡 Suchen Sie ein Zuhause im Grünen?</h1>
// //       <p>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
// //         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
// //         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </p>

// //       {loading ? (
// //         // Показуємо 3 скелетон-карти поки дані не завантажились
// //         <>
// //           <SkeletonCard />
// //           <SkeletonCard />
// //           <SkeletonCard />
// //         </>
// //       ) : (
// //         <>
// //   {cards?.map((item, index) => (
// //     <div
// //       key={index}
// //       style={{
// //         border: "1px solid #ccc",
// //         borderRadius: "12px",
// //         padding: "1.5rem",
// //         marginBottom: "2rem",
// //         maxWidth: "600px",
// //         marginInline: "auto",
// //         boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
// //         backgroundColor: "#f9f9f9",
// //       }}
// //     >
// //       {/* Фото */}
// //       {item.CARD_IMAGE && (
// //         <div style={{ textAlign: "center", marginBottom: "1rem" }}>
// //           <img
// //             src="/images/OtherPictures/Geschichte/1.png"
// //             alt={item.NAME}
// //             style={{
// //               width: "100%",
// //               maxHeight: "250px",
// //               objectFit: "cover",
// //               borderRadius: "8px",
// //             }}
// //           />
// //         </div>
// //       )}
// //       {/* <img src="/images/OtherPictures/Geschichte/1.png" alt="" /> */}

// //       {/* Слоган */}
// //       <h2
// //         style={{
// //           color: "#0033A0",
// //           fontSize: "1.4rem",
// //           marginBottom: "1.5rem",
// //           wordBreak: "break-word",
// //           textAlign: "center",
// //         }}
// //       >
// //         {item.CARD_SLOGAN}
// //       </h2>

// //       {/* Основний текст */}
// //       <p style={{ marginBottom: "1rem", whiteSpace: "pre-line" }}>
// //         {item.CARD_TEXT}
// //       </p>

// //       {/* Контактна інформація */}
// //       <div style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
// //         {item.CARD_ADRESS && <p>📍 {item.CARD_ADRESS}</p>}
// //         {item.CARD_TEL && <p>📞 {item.CARD_TEL}</p>}
// //         {item.CARD_EMAIL && <p>📧 {item.CARD_EMAIL}</p>}
// //         {item.CARD_WEB && (
// //           <p>
// //             🌐{" "}
// //             <a
// //               href={item.CARD_WEB}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{ color: "#0033A0" }}
// //             >
// //               {item.CARD_WEB}
// //             </a>
// //           </p>
// //         )}
// //         {item.CARD_EXTRA_INFO && <p>ℹ️ {item.CARD_EXTRA_INFO}</p>}
// //       </div>
// //     </div>
// //   ))}
// // </>

// //       )}
// //     </div>
// //   );
// // }

// // export default BauLand;

// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";

// // function SkeletonCard() {
// //   return (
// //     <div
// //       style={{
// //         marginTop: "2rem",
// //         border: "1px solid #ccc",
// //         padding: "1rem",
// //         borderRadius: "8px",
// //         maxWidth: "400px",
// //       }}
// //     >
// //       <div
// //         style={{
// //           backgroundColor: "#ddd",
// //           height: "24px",
// //           width: "60%",
// //           marginBottom: "0.5rem",
// //           borderRadius: "4px",
// //         }}
// //       ></div>
// //       <div
// //         style={{
// //           backgroundColor: "#eee",
// //           height: "16px",
// //           width: "40%",
// //           marginBottom: "0.5rem",
// //           borderRadius: "4px",
// //         }}
// //       ></div>
// //       <div
// //         style={{
// //           backgroundColor: "#eee",
// //           height: "16px",
// //           width: "90%",
// //           marginBottom: "0.5rem",
// //           borderRadius: "4px",
// //         }}
// //       ></div>
// //       <div
// //         style={{
// //           backgroundColor: "#eee",
// //           height: "16px",
// //           width: "80%",
// //           marginBottom: "0.5rem",
// //           borderRadius: "4px",
// //         }}
// //       ></div>
// //       <div
// //         style={{
// //           backgroundColor: "#eee",
// //           height: "16px",
// //           width: "50%",
// //           marginBottom: "0.5rem",
// //           borderRadius: "4px",
// //         }}
// //       ></div>
// //     </div>
// //   );
// // }

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (data && data["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //       setLoading(false);
// //     }
// //   }, [data]);

// //   return (
// //     <div>
// //       <h1>🏡 Suchen Sie ein Zuhause im Grünen?</h1>
// //       <p>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
// //         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
// //         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </p>

// //       {loading ? (
// //         // Показуємо 3 скелетон-карти поки дані не завантажились
// //         <>
// //           <SkeletonCard />
// //           <SkeletonCard />
// //           <SkeletonCard />
// //         </>
// //       ) : (
// //         <>
// //           {cards?.map((item, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 border: "1px solid #ccc",
// //                 borderRadius: "12px",
// //                 padding: "1.5rem",
// //                 marginBottom: "2rem",
// //                 maxWidth: "600px",
// //                 marginInline: "auto",
// //                 boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
// //                 backgroundColor: "#f9f9f9",
// //               }}
// //             >
// //               {/* Фото */}
// //               {item.CARD_IMAGE && (
// //                 <div style={{ textAlign: "center", marginBottom: "1rem" }}>
// //                   <img
// //                     src="/images/OtherPictures/Geschichte/1.png"
// //                     alt={item.NAME}
// //                     style={{
// //                       width: "100%",
// //                       maxHeight: "250px",
// //                       objectFit: "cover",
// //                       borderRadius: "8px",
// //                     }}
// //                   />
// //                 </div>
// //               )}
// //               {/* <img src="/images/OtherPictures/Geschichte/1.png" alt="" /> */}

// //               {/* Слоган */}
// //               <h2
// //                 style={{
// //                   color: "#0033A0",
// //                   fontSize: "1.4rem",
// //                   marginBottom: "1.5rem",
// //                   wordBreak: "break-word",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 {item.CARD_SLOGAN}
// //               </h2>

// //               {/* Основний текст */}
// //               <p style={{ marginBottom: "1rem", whiteSpace: "pre-line" }}>
// //                 {item.CARD_TEXT}
// //               </p>

// //               {/* Контактна інформація */}
// //               <div style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
// //                 {item.CARD_ADRESS && <p>📍 {item.CARD_ADRESS}</p>}
// //                 {item.CARD_TEL && <p>📞 {item.CARD_TEL}</p>}
// //                 {item.CARD_EMAIL && <p>📧 {item.CARD_EMAIL}</p>}
// //                 {item.CARD_WEB && (
// //                   <p>
// //                     🌐{" "}
// //                     <a
// //                       href={item.CARD_WEB}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       style={{ color: "#0033A0" }}
// //                     >
// //                       {item.CARD_WEB}
// //                     </a>
// //                   </p>
// //                 )}
// //                 {item.CARD_EXTRA_INFO && <p>ℹ️ {item.CARD_EXTRA_INFO}</p>}
// //               </div>
// //             </div>
// //           ))}
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default BauLand;

// // до додавання кнопки Mehr erfahren
// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";

// // function SkeletonCard() {
// //   return (
// //     <div
// //       style={{
// //         marginTop: "2rem",
// //         border: "1px solid #ccc",
// //         padding: "1rem",
// //         borderRadius: "8px",
// //         maxWidth: "400px",
// //       }}
// //     >
// //       {[60, 40, 90, 80, 50].map((width, i) => (
// //         <div
// //           key={i}
// //           style={{
// //             backgroundColor: "#eee",
// //             height: i === 0 ? "24px" : "16px",
// //             width: `${width}%`,
// //             marginBottom: "0.5rem",
// //             borderRadius: "4px",
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (data && data["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //       setLoading(false);
// //     }
// //   }, [data]);

// //   return (
// //     <div>
// //       <h1>🏡 Suchen Sie ein Zuhause im Grünen?</h1>
// //       <p>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
// //         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
// //         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </p>

// //       {loading ? (
// //         <>
// //           <SkeletonCard />
// //           <SkeletonCard />
// //           <SkeletonCard />
// //         </>
// //       ) : (
// //         <>
// //           {cards?.map((item, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 border: "1px solid #ccc",
// //                 borderRadius: "12px",
// //                 padding: "1.5rem",
// //                 marginBottom: "2rem",
// //                 maxWidth: "600px",
// //                 marginInline: "auto",
// //                 boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
// //                 backgroundColor: "#f9f9f9",
// //               }}
// //             >
// //               {item.CARD_IMAGE && (
// //                 <div style={{ textAlign: "center", marginBottom: "1rem" }}>
// //                   <img
// //                     src={item.CARD_IMAGE}
// //                     alt={item.NAME}
// //                     style={{
// //                       width: "100%",
// //                       maxHeight: "250px",
// //                       objectFit: "cover",
// //                       borderRadius: "8px",
// //                     }}
// //                   />
// //                 </div>
// //               )}

// //               <h2
// //                 style={{
// //                   color: "#0033A0",
// //                   fontSize: "1.4rem",
// //                   marginBottom: "1rem",
// //                   wordBreak: "break-word",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 {item.CARD_SLOGAN}
// //               </h2>

// //               <p style={{ marginBottom: "1rem", whiteSpace: "pre-line" }}>
// //                 {item.CARD_TEXT}
// //               </p>

// //               <div style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
// //                 {item.CARD_ADRESS && <p>📍 {item.CARD_ADRESS}</p>}
// //                 {item.CARD_TEL && <p>📞 {item.CARD_TEL}</p>}
// //                 {item.CARD_EMAIL && <p>📧 {item.CARD_EMAIL}</p>}
// //                 {item.CARD_WEB && (
// //                   <p>
// //                     🌐{" "}
// //                     <a
// //                       href={item.CARD_WEB}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       style={{ color: "#0033A0" }}
// //                     >
// //                       {item.CARD_WEB}
// //                     </a>
// //                   </p>
// //                 )}
// //                 {item.CARD_EXTRA_INFO && <p>ℹ️ {item.CARD_EXTRA_INFO}</p>}
// //               </div>
// //             </div>
// //           ))}
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default BauLand;

// // після додавання кнопки Mehr erfahren
// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";

// // function SkeletonCard() {
// //   return (
// //     <div
// //       style={{
// //         marginTop: "2rem",
// //         border: "1px solid #ccc",
// //         padding: "1rem",
// //         borderRadius: "8px",
// //         maxWidth: "600px",
// //         marginInline: "auto",
// //       }}
// //     >
// //       {[60, 40, 90, 80, 50].map((width, i) => (
// //         <div
// //           key={i}
// //           style={{
// //             backgroundColor: "#eee",
// //             height: i === 0 ? "24px" : "16px",
// //             width: `${width}%`,
// //             marginBottom: "0.5rem",
// //             borderRadius: "4px",
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [openIndex, setOpenIndex] = useState<number | null>(null);

// //   useEffect(() => {
// //     if (data && data["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //       setLoading(false);
// //     }
// //   }, [data]);

// //   const handleOpen = (index: number) => setOpenIndex(index);
// //   const handleClose = () => setOpenIndex(null);

// //   return (
// //     <div style={{ padding: "1rem" }}>
// //       <h1>🏡 Suchen Sie ein Zuhause im Grünen?</h1>
// //       <p>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
// //         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
// //         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </p>

// //       {loading ? (
// //         <>
// //           <SkeletonCard />
// //           <SkeletonCard />
// //           <SkeletonCard />
// //         </>
// //       ) : (

// //         <div
// //         style={{
// //       display: "flex",
// //       flexWrap: "wrap",
// //       gap: "0.5rem",
// //       justifyContent: "center",
// //     }}
// //   >
// //           {cards?.map((item, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 border: "1px solid #ccc",
// //                 borderRadius: "12px",
// //                 padding: "1.5rem",
// //                 marginBottom: "2rem",
// //                 maxWidth: "600px",
// //                 marginInline: "auto",
// //                 boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
// //                 backgroundColor: "#f9f9f9",
// //                 position: "relative",
// //               }}
// //             >
// //               {/* Фото */}
// //                 <div style={{ textAlign: "center", marginBottom: "1rem" }}>
// //                   <img
// //                     src="/images/OtherPictures/Geschichte/1.png"
// //                     alt={item.NAME}
// //                     style={{
// //                       width: "100%",
// //                       maxHeight: "250px",
// //                       objectFit: "cover",
// //                       borderRadius: "8px",
// //                     }}
// //                   />
// //                 </div>

// //               {/* Слоган */}
// //               <h2
// //                 style={{
// //                   color: "#0033A0",
// //                   fontSize: "1.4rem",
// //                   marginBottom: "1rem",
// //                   wordBreak: "break-word",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 {item.CARD_SLOGAN}
// //               </h2>

// //               {/* Опис */}
// //               <p style={{ marginBottom: "1rem", whiteSpace: "pre-line" }}>
// //                 {item.CARD_TEXT}
// //               </p>

// //               {/* Контактна інформація */}
// //               <div style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
// //                 {item.CARD_ADRESS && <p>📍 {item.CARD_ADRESS}</p>}
// //                 {item.CARD_TEL && <p>📞 {item.CARD_TEL}</p>}
// //                 {item.CARD_EMAIL && <p>📧 {item.CARD_EMAIL}</p>}
// //                 {item.CARD_WEB && (
// //                   <p>
// //                     🌐{" "}
// //                     <a
// //                       href={item.CARD_WEB}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       style={{ color: "#0033A0" }}
// //                     >
// //                       {item.CARD_WEB}
// //                     </a>
// //                   </p>
// //                 )}
// //               </div>

// //               {/* Mehr erfahren */}
// //               {item.CARD_EXTRA_INFO && (
// //                 <div style={{ textAlign: "right", marginTop: "1rem" }}>
// //                   <button
// //                     onClick={() => handleOpen(index)}
// //                     style={{
// //                       backgroundColor: "#0033A0",
// //                       color: "#fff",
// //                       border: "none",
// //                       padding: "0.5rem 1rem",
// //                       borderRadius: "8px",
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     ℹ️ Mehr erfahren
// //                   </button>
// //                 </div>
// //               )}

// //               {/* Модальне вікно */}
// //               {openIndex === index && (
// //                 <div
// //                   style={{
// //                     position: "fixed",
// //                     top: 0,
// //                     left: 0,
// //                     width: "100vw",
// //                     height: "100vh",
// //                     backgroundColor: "rgba(0,0,0,0.6)",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     zIndex: 999,
// //                   }}
// //                   onClick={handleClose}
// //                 >
// //                   <div
// //                     onClick={(e) => e.stopPropagation()}
// //                     style={{
// //                       backgroundColor: "#fff",
// //                       padding: "2rem",
// //                       borderRadius: "12px",
// //                       maxWidth: "500px",
// //                       width: "90%",
// //                       textAlign: "left",
// //                       boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
// //                     }}
// //                   >
// //                     <h3 style={{ marginBottom: "1rem", color: "#0033A0" }}>
// //                       Weitere Informationen
// //                     </h3>
// //                     <p style={{ whiteSpace: "pre-line" }}>
// //                       {item.CARD_EXTRA_INFO}
// //                     </p>
// //                     <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
// //                       <button
// //                         onClick={handleClose}
// //                         style={{
// //                           backgroundColor: "#ccc",
// //                           border: "none",
// //                           padding: "0.5rem 1rem",
// //                           borderRadius: "8px",
// //                           cursor: "pointer",
// //                         }}
// //                       >
// //                         Schließen
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>

// //       )}
// //     </div>
// //   );
// // }

// // export default BauLand;

// // в 2чі менш розмір всього
// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";

// // function SkeletonCard() {
// //   return (
// //     <div
// //       style={{
// //         marginTop: "1rem",
// //         border: "1px solid #ccc",
// //         padding: "0.5rem",
// //         borderRadius: "6px",
// //         maxWidth: "300px",
// //         marginInline: "auto",
// //       }}
// //     >
// //       {[60, 40, 90, 80, 50].map((width, i) => (
// //         <div
// //           key={i}
// //           style={{
// //             backgroundColor: "#eee",
// //             height: i === 0 ? "12px" : "8px",
// //             width: `${width}%`,
// //             marginBottom: "0.25rem",
// //             borderRadius: "3px",
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [openIndex, setOpenIndex] = useState<number | null>(null);

// //   useEffect(() => {
// //     if (data?.["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //       setLoading(false);
// //     }
// //   }, [data]);

// //   const handleOpen = (index: number) => setOpenIndex(index);
// //   const handleClose = () => setOpenIndex(null);

// //   return (
// //     <div style={{ padding: "0.5rem" }}>
// //       <h2 style={{ fontSize: "1.1rem" }}>🏡 Suchen Sie ein Zuhause im Grünen?</h2>
// //       <p style={{ fontSize: "0.85rem" }}>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim, Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </p>

// //       {loading ? (
// //         <>
// //           <SkeletonCard />
// //           <SkeletonCard />
// //           <SkeletonCard />
// //         </>
// //       ) : (
// //         cards?.map((item, index) => (
// //           <div
// //             key={index}
// //             style={{
// //               border: "1px solid #ccc",
// //               borderRadius: "8px",
// //               padding: "0.75rem",
// //               marginBottom: "1rem",
// //               maxWidth: "300px",
// //               marginInline: "auto",
// //               boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
// //               backgroundColor: "#f9f9f9",
// //               position: "relative",
// //             }}
// //           >
// //             <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
// //               <img
// //                 src="/images/OtherPictures/Geschichte/1.png"
// //                 alt={item.NAME}
// //                 style={{
// //                   width: "100%",
// //                   maxHeight: "125px",
// //                   objectFit: "cover",
// //                   borderRadius: "6px",
// //                 }}
// //               />
// //             </div>

// //             <h3
// //               style={{
// //                 color: "#0033A0",
// //                 fontSize: "0.9rem",
// //                 marginBottom: "0.5rem",
// //                 wordBreak: "break-word",
// //                 textAlign: "center",
// //               }}
// //             >
// //               {item.CARD_SLOGAN}
// //             </h3>

// //             <p style={{ marginBottom: "0.5rem", fontSize: "0.8rem", whiteSpace: "pre-line" }}>
// //               {item.CARD_TEXT}
// //             </p>

// //             <div style={{ fontSize: "0.75rem", lineHeight: "1.4" }}>
// //               {item.CARD_ADRESS && <p>📍 {item.CARD_ADRESS}</p>}
// //               {item.CARD_TEL && <p>📞 {item.CARD_TEL}</p>}
// //               {item.CARD_EMAIL && <p>📧 {item.CARD_EMAIL}</p>}
// //               {item.CARD_WEB && (
// //                 <p>
// //                   🌐{" "}
// //                   <a
// //                     href={item.CARD_WEB}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     style={{ color: "#0033A0", fontSize: "0.75rem" }}
// //                   >
// //                     {item.CARD_WEB}
// //                   </a>
// //                 </p>
// //               )}
// //             </div>

// //             {item.CARD_EXTRA_INFO && (
// //               <div style={{ textAlign: "right", marginTop: "0.5rem" }}>
// //                 <button
// //                   onClick={() => handleOpen(index)}
// //                   style={{
// //                     backgroundColor: "#0033A0",
// //                     color: "#fff",
// //                     border: "none",
// //                     padding: "0.3rem 0.6rem",
// //                     borderRadius: "6px",
// //                     fontSize: "0.7rem",
// //                     cursor: "pointer",
// //                   }}
// //                 >
// //                   ℹ️ Mehr erfahren
// //                 </button>
// //               </div>
// //             )}

// //             {openIndex === index && (
// //               <div
// //                 style={{
// //                   position: "fixed",
// //                   top: 0,
// //                   left: 0,
// //                   width: "100vw",
// //                   height: "100vh",
// //                   backgroundColor: "rgba(0,0,0,0.6)",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   zIndex: 999,
// //                 }}
// //                 onClick={handleClose}
// //               >
// //                 <div
// //                   onClick={(e) => e.stopPropagation()}
// //                   style={{
// //                     backgroundColor: "#fff",
// //                     padding: "1rem",
// //                     borderRadius: "10px",
// //                     maxWidth: "300px",
// //                     width: "90%",
// //                     textAlign: "left",
// //                     fontSize: "0.8rem",
// //                     boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
// //                   }}
// //                 >
// //                   <h4 style={{ marginBottom: "0.5rem", color: "#0033A0" }}>
// //                     Weitere Informationen
// //                   </h4>
// //                   <p style={{ whiteSpace: "pre-line" }}>{item.CARD_EXTRA_INFO}</p>
// //                   <div style={{ textAlign: "right", marginTop: "1rem" }}>
// //                     <button
// //                       onClick={handleClose}
// //                       style={{
// //                         backgroundColor: "#ccc",
// //                         border: "none",
// //                         padding: "0.4rem 0.8rem",
// //                         borderRadius: "6px",
// //                         fontSize: "0.7rem",
// //                         cursor: "pointer",
// //                       }}
// //                     >
// //                       Schließen
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // export default BauLand;

// //  норм розмір але декілька карток поруч
// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";

// // function SkeletonCard() {
// //   return (
// //     <div
// //       style={{
// //         marginTop: "2rem",
// //         border: "1px solid #ccc",
// //         padding: "1rem",
// //         borderRadius: "8px",
// //         maxWidth: "600px",
// //         marginInline: "auto",
// //       }}
// //     >
// //       {[60, 40, 90, 80, 50].map((width, i) => (
// //         <div
// //           key={i}
// //           style={{
// //             backgroundColor: "#eee",
// //             height: i === 0 ? "24px" : "16px",
// //             width: `${width}%`,
// //             marginBottom: "0.5rem",
// //             borderRadius: "4px",
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [openIndex, setOpenIndex] = useState<number | null>(null);

// //   useEffect(() => {
// //     if (data?.["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //       setLoading(false);
// //     }
// //   }, [data]);

// //   const handleOpen = (index: number) => setOpenIndex(index);
// //   const handleClose = () => setOpenIndex(null);

// //   return (
// //     <div style={{ padding: "0.75rem" }}>
// //       <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
// //         🏡 Suchen Sie ein Zuhause im Grünen?
// //       </h2>
// //       <p style={{ fontSize: "0.85rem", marginBottom: "1.5rem" }}>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen.
// //       </p>

// //       {loading ? (
// //         <SkeletonCard />
// //       ) : (
// //         <div
// //           style={{
// //             display: "flex",
// //             flexWrap: "wrap",
// //             gap: "1rem",
// //             justifyContent: "center",
// //           }}
// //         >
// //           {cards?.map((item, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 width: "calc(50% - 0.5rem)",
// //                 minWidth: "260px",
// //                 maxWidth: "320px",
// //                 border: "1px solid #ccc",
// //                 borderRadius: "8px",
// //                 padding: "1rem",
// //                 backgroundColor: "#f9f9f9",
// //                 boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
// //                 position: "relative",
// //                 flexGrow: 1,
// //               }}
// //             >
// //               {/* Фото */}
// //               {item.CARD_IMAGE && (
// //                 <img
// //                   src={item.CARD_IMAGE}
// //                   alt={item.NAME}
// //                   style={{
// //                     width: "100%",
// //                     maxHeight: "150px",
// //                     objectFit: "cover",
// //                     borderRadius: "6px",
// //                     marginBottom: "0.75rem",
// //                   }}
// //                 />
// //               )}

// //               {/* Слоган */}
// //               <h3
// //                 style={{
// //                   fontSize: "1rem",
// //                   color: "#0033A0",
// //                   textAlign: "center",
// //                   marginBottom: "0.5rem",
// //                 }}
// //               >
// //                 {item.CARD_SLOGAN}
// //               </h3>

// //               {/* Опис */}
// //               <p style={{ fontSize: "0.8rem", whiteSpace: "pre-line", marginBottom: "0.5rem" }}>
// //                 {item.CARD_TEXT}
// //               </p>

// //               {/* Контакти */}
// //               <div style={{ fontSize: "0.75rem", lineHeight: "1.4" }}>
// //                 {item.CARD_ADRESS && <p>📍 {item.CARD_ADRESS}</p>}
// //                 {item.CARD_TEL && <p>📞 {item.CARD_TEL}</p>}
// //                 {item.CARD_EMAIL && <p>📧 {item.CARD_EMAIL}</p>}
// //                 {item.CARD_WEB && (
// //                   <p>
// //                     🌐{" "}
// //                     <a href={item.CARD_WEB} target="_blank" rel="noopener noreferrer">
// //                       {item.CARD_WEB}
// //                     </a>
// //                   </p>
// //                 )}
// //               </div>

// //               {/* Кнопка */}
// //               {item.CARD_EXTRA_INFO && (
// //                 <div style={{ textAlign: "right", marginTop: "0.5rem" }}>
// //                   <button
// //                     onClick={() => handleOpen(index)}
// //                     style={{
// //                       backgroundColor: "#0033A0",
// //                       color: "#fff",
// //                       border: "none",
// //                       padding: "0.4rem 0.6rem",
// //                       borderRadius: "6px",
// //                       fontSize: "0.75rem",
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     ℹ️ Mehr erfahren
// //                   </button>
// //                 </div>
// //               )}

// //               {/* Модалка */}
// //               {openIndex === index && (
// //                 <div
// //                   style={{
// //                     position: "fixed",
// //                     top: 0,
// //                     left: 0,
// //                     width: "100vw",
// //                     height: "100vh",
// //                     backgroundColor: "rgba(0,0,0,0.6)",
// //                     display: "flex",
// //                     justifyContent: "center",
// //                     alignItems: "center",
// //                     zIndex: 1000,
// //                   }}
// //                   onClick={handleClose}
// //                 >
// //                   <div
// //                     onClick={(e) => e.stopPropagation()}
// //                     style={{
// //                       backgroundColor: "#fff",
// //                       padding: "1rem",
// //                       borderRadius: "8px",
// //                       maxWidth: "400px",
// //                       width: "90%",
// //                       boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
// //                       fontSize: "0.8rem",
// //                     }}
// //                   >
// //                     <h4 style={{ marginBottom: "0.5rem", color: "#0033A0" }}>
// //                       Weitere Informationen
// //                     </h4>
// //                     <p style={{ whiteSpace: "pre-line" }}>{item.CARD_EXTRA_INFO}</p>
// //                     <div style={{ textAlign: "right", marginTop: "1rem" }}>
// //                       <button
// //                         onClick={handleClose}
// //                         style={{
// //                           backgroundColor: "#ccc",
// //                           border: "none",
// //                           padding: "0.4rem 0.8rem",
// //                           borderRadius: "6px",
// //                           fontSize: "0.75rem",
// //                         }}
// //                       >
// //                         Schließen
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default BauLand;

// // додан стилі
// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";
// // import {
// //   PageWrapper,
// //   Heading,
// //   IntroText,
// //   CardsContainer,
// //   Card,
// //   CardImageWrapper,
// //   CardSlogan,
// //   CardText,
// //   ContactInfo,
// //   MoreButtonWrapper,
// //   MoreButton,
// //   ModalOverlay,
// //   ModalContent,
// //   ModalTitle,
// //   ModalText,
// //   ModalCloseButtonWrapper,
// //   ModalCloseButton,
// // } from "./styles";

// // function SkeletonCard() {
// //   return (
// //     <Card>
// //       {[60, 40, 90, 80, 50].map((width, i) => (
// //         <div
// //           key={i}
// //           style={{
// //             backgroundColor: "#eee",
// //             height: i === 0 ? "24px" : "16px",
// //             width: `${width}%`,
// //             marginBottom: "0.5rem",
// //             borderRadius: "4px",
// //           }}
// //         />
// //       ))}
// //     </Card>
// //   );
// // }

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [openIndex, setOpenIndex] = useState<number | null>(null);

// //   useEffect(() => {
// //     if (data?.["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //       setLoading(false);
// //     }
// //   }, [data]);

// //   const handleOpen = (index: number) => setOpenIndex(index);
// //   const handleClose = () => setOpenIndex(null);

// //   return (
// //     <PageWrapper>
// //       <Heading>🏡 Suchen Sie ein Zuhause im Grünen?</Heading>
// //       <IntroText>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
// //         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
// //         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </IntroText>

// //       {loading ? (
// //         <>
// //           <SkeletonCard />
// //           <SkeletonCard />
// //           <SkeletonCard />
// //         </>
// //       ) : (
// //         <CardsContainer>
// //           {cards?.map((item, index) => (
// //             <Card key={index}>
// //               {item.CARD_IMAGE && (
// //                 <CardImageWrapper>
// //                   <img src={item.CARD_IMAGE} alt={item.NAME} />
// //                 </CardImageWrapper>
// //               )}

// //               <CardSlogan>{item.CARD_SLOGAN}</CardSlogan>
// //               <CardText>{item.CARD_TEXT}</CardText>

// //               <ContactInfo>
// //                 {item.CARD_ADRESS && <p>📍 {item.CARD_ADRESS}</p>}
// //                 {item.CARD_TEL && <p>📞 {item.CARD_TEL}</p>}
// //                 {item.CARD_EMAIL && <p>📧 {item.CARD_EMAIL}</p>}
// //                 {item.CARD_WEB && (
// //                   <p>
// //                     🌐{" "}
// //                     <a
// //                       href={item.CARD_WEB}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       {item.CARD_WEB}
// //                     </a>
// //                   </p>
// //                 )}
// //               </ContactInfo>

// //               {item.CARD_EXTRA_INFO && (
// //                 <MoreButtonWrapper>
// //                   <MoreButton onClick={() => handleOpen(index)}>
// //                     ℹ️ Mehr erfahren
// //                   </MoreButton>
// //                 </MoreButtonWrapper>
// //               )}

// //               {openIndex === index && (
// //                 <ModalOverlay onClick={handleClose}>
// //                   <ModalContent onClick={(e) => e.stopPropagation()}>
// //                     <ModalTitle>Weitere Informationen</ModalTitle>
// //                     <ModalText>{item.CARD_EXTRA_INFO}</ModalText>
// //                     <ModalCloseButtonWrapper>
// //                       <ModalCloseButton onClick={handleClose}>
// //                         Schließen
// //                       </ModalCloseButton>
// //                     </ModalCloseButtonWrapper>
// //                   </ModalContent>
// //                 </ModalOverlay>
// //               )}
// //             </Card>
// //           ))}
// //         </CardsContainer>
// //       )}
// //     </PageWrapper>
// //   );
// // }

// // export default BauLand;

// //  зміна функції кнопки "Mehr erfahren"
// // import { useData } from "../../context/DataContext";
// // import { useState, useEffect } from "react";
// // import {
// //   PageWrapper,
// //   Heading,
// //   IntroText,
// //   CardsContainer,
// //   Card,
// //   CardImageWrapper,
// //   CardSlogan,
// //   CardText,
// //   ContactInfo,
// //   MoreButtonWrapper,
// //   MoreButton,
// //   SlideOverlay,
// //   SlideContent,
// //   SlideTitle,
// //   SlideText,
// //   SlideCloseButton,
// //   CardContent,
// // } from "./styles";

// // function SkeletonCard() {
// //   return (
// //     <Card>
// //       {[60, 40, 90, 80, 50].map((width, i) => (
// //         <div
// //           key={i}
// //           style={{
// //             backgroundColor: "#eee",
// //             height: i === 0 ? "24px" : "16px",
// //             width: `${width}%`,
// //             marginBottom: "0.5rem",
// //             borderRadius: "4px",
// //             margin: "1.5rem",
// //           }}
// //         />
// //       ))}
// //     </Card>
// //   );
// // }

// // function BauLand() {
// //   const data = useData();
// //   const [cards, setCards] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [openIndex, setOpenIndex] = useState<number | null>(null);

// //   useEffect(() => {
// //     if (data?.["Baugrundstücke"]) {
// //       setCards(data["Baugrundstücke"]);
// //       setLoading(false);
// //     }
// //   }, [data]);

// //   const handleOpen = (index: number) => setOpenIndex(index);
// //   const handleClose = () => setOpenIndex(null);

// //   return (
// //     <PageWrapper>
// //       <Heading>🏡 Suchen Sie ein Zuhause im Grünen?</Heading>
// //       <IntroText>
// //         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
// //         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
// //         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
// //       </IntroText>

// //       {loading ? (
// //         <>
// //           <SkeletonCard />
// //           <SkeletonCard />
// //           <SkeletonCard />
// //         </>
// //       ) : (
// //         <CardsContainer>
// //           {cards?.map((item, index) => (
// //             <Card key={index}>
// //               <CardImageWrapper>
// //                 <img src="/images/Bauland/mainPhoto.png" alt={item.NAME} />
// //               </CardImageWrapper>
// //               <CardContent>
// //                 <CardSlogan>{item.CARD_SLOGAN}</CardSlogan>
// //                 <CardText>{item.CARD_TEXT}</CardText>

// //                 <ContactInfo>
// //                   {item.CARD_ADRESS && <p>📍 {item.CARD_ADRESS}</p>}
// //                   {item.CARD_TEL && <p>📞 {item.CARD_TEL}</p>}
// //                   {item.CARD_EMAIL && <p>📧 {item.CARD_EMAIL}</p>}
// //                   {item.CARD_WEB && (
// //                     <p>
// //                       🌐{" "}
// //                       <a
// //                         href={item.CARD_WEB}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         {item.CARD_WEB}
// //                       </a>
// //                     </p>
// //                   )}
// //                 </ContactInfo>

// //                 {item.CARD_EXTRA_INFO && (
// //                   <>
// //                     <MoreButtonWrapper>
// //                       <MoreButton
// //                         onClick={() => handleOpen(index)}
// //                         className={openIndex === index ? "active" : ""}
// //                       >
// //                         ℹ️ Mehr erfahren
// //                       </MoreButton>
// //                     </MoreButtonWrapper>

// //                     <SlideOverlay isVisible={openIndex === index}>
// //                       <SlideContent>
// //                         <SlideCloseButton onClick={handleClose}>
// //                           ✖
// //                         </SlideCloseButton>
// //                         <SlideTitle>Weitere Informationen</SlideTitle>
// //                         <SlideText>{item.CARD_EXTRA_INFO}</SlideText>
// //                       </SlideContent>
// //                     </SlideOverlay>
// //                   </>
// //                 )}
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </CardsContainer>
// //       )}
// //     </PageWrapper>
// //   );
// // }

// // export default BauLand;

// //  зміна скелетона стилі
// import { useData } from "../../context/DataContext";
// import { useState, useEffect } from "react";
// import {
//   PageWrapper,
//   Heading,
//   IntroText,
//   CardsContainer,
//   Card,
//   CardImageWrapper,
//   CardSlogan,
//   CardText,
//   ContactInfo,
//   MoreButtonWrapper,
//   MoreButton,
//   SlideOverlay,
//   SlideContent,
//   SlideTitle,
//   SlideText,
//   SlideCloseButton,
//   CardContent,
//   MoreButtonText,
//   SkeletonBox,
//   Arrow,
//   CarouselWrapper,
//   Dot,
//   Dots,
// } from "./styles";

// import {
//   FiInfo,
//   FiPhone,
//   FiMail,
//   FiGlobe,
//   FiMapPin,
//   FiClock,
//   FiUser,
// } from "react-icons/fi";
// import { FaFacebookF, FaYoutube } from "react-icons/fa";

// function SkeletonCard() {
//   return (
//     <Card style={{ flex: "1 1 calc(50% - 10px)", minWidth: "280px" }}>
//       <CardImageWrapper style={{ marginBottom: 0 }}>
//         <SkeletonBox width="100%" height="250px" style={{ borderRadius: "8px" }} />
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

// interface BauCard {
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
//   ADD_YOUTUBE?: string;
//   IMAGES?: string[];
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
//             <Arrow left onClick={handlePrev}>‹</Arrow>
//             <Arrow onClick={handleNext}>›</Arrow>
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

// function BauLand() {
//   const data = useData();
//   const [cards, setCards] = useState<BauCard[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   useEffect(() => {
//     if (data?.["Baugrundstücke"]) {
//       setCards(data["Baugrundstücke"]);
//       setLoading(false);
//     }
//   }, [data]);

//   const handleOpen = (index: number) => setOpenIndex(index);
//   const handleClose = () => setOpenIndex(null);

//   return (
//     <PageWrapper>
//       <Heading>🏡 Suchen Sie ein Zuhause im Grünen?</Heading>
//       <IntroText>
//         In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal
//         für alle, die Ruhe, Natur und Dorfgemeinschaft schätzen. Ob Eigenheim,
//         Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel.
//       </IntroText>

//       {loading ? (
//        <CardsContainer itemCount={data?.["Baugrundstücke"]?.length ?? 3}>
//         {(data?.["Baugrundstücke"]?.length
//         ? Array.from({ length: data["Baugrundstücke"].length })
//         : Array.from({ length: 3 })
//         ).map((_, i) => (
//       <SkeletonCard key={i} />
//   ))}
// </CardsContainer>
//       ) : (
//         <CardsContainer itemCount={cards?.length ?? 0}>
//           {cards?.map((item: BauCard, index: number) => (
//             <Card key={index}>
//               <CardImageWrapper>
//   {item.IMAGES?.length ? (
//     <ImageCarousel images={item.IMAGES} />
//   ) : (
//     <img src="/images/Bauland/mainPhoto.png" alt={item.NAME} />
//   )}
// </CardImageWrapper>

//               <CardContent>
//                 <CardSlogan>{item.CARD_SLOGAN}</CardSlogan>
//                 <CardText>{item.CARD_TEXT}</CardText>

//                 <ContactInfo>
//                   {item.ADD_PERSON && (
//                               <strong>
//                                 <FiUser /> {item.ADD_PERSON}
//                               </strong>
//                             )}
//                   {item.CARD_TEL && (
//                     <p>
//                       <FiPhone /> {item.CARD_TEL}
//                     </p>
//                   )}
//                   {item.CARD_EMAIL && (
//                     <p>
//                       <FiMail /> {item.CARD_EMAIL}
//                     </p>
//                   )}
//                   {item.CARD_ADRESS && (
//                     <p>
//                       <FiMapPin /> {item.CARD_ADRESS}
//                     </p>
//                   )}

//                   {item.CARD_WEB && (
//                     <p>
//                       <FiGlobe />{" "}
//                       <a
//                         href={item.CARD_WEB}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {item.CARD_WEB}
//                       </a>
//                     </p>
//                   )}
//                 </ContactInfo>

//                 {item.CARD_EXTRA_INFO && (
//                   <>
//                     <MoreButtonWrapper>
//                       <MoreButton
//                         onClick={() => handleOpen(index)}
//                         className={openIndex === index ? "active" : ""}
//                       >
//                         <MoreButtonText>
//                           <FiInfo /> Mehr erfahren
//                         </MoreButtonText>
//                       </MoreButton>
//                     </MoreButtonWrapper>

//                     <SlideOverlay isVisible={openIndex === index}>
//                       <SlideContent>
//                         <SlideCloseButton onClick={handleClose}>
//                           ✖
//                         </SlideCloseButton>
//                         <SlideTitle>Weitere Informationen</SlideTitle>
//                         <SlideText>
//                           <p> </p>
//                           {item.CARD_EXTRA_INFO}
//                           <ContactInfo>
//                             <p> </p>

//                             {item.ADD_PERSON && (
//                               <strong>
//                                 <FiUser /> {item.ADD_PERSON}
//                               </strong>
//                             )}
//                             {item.ADD_TEL && (
//                               <p>
//                                 <FiPhone /> {item.ADD_TEL}
//                               </p>
//                             )}
//                             {item.ADD_EMAIL && (
//                               <p>
//                                 <FiMail /> {item.ADD_EMAIL}
//                               </p>
//                             )}
//                             {item.WORK_TIME && (
//                               <p>
//                                 <FiClock /> <strong>Öffnungszeiten:</strong>{item.WORK_TIME}
//                               </p>
//                             )}
//                             {item.ADD_FACEBOOK && (
//                               <p>
//                                 <FaFacebookF /> {item.ADD_FACEBOOK}
//                               </p>
//                             )}
//                             {item.ADD_YOUTUBE && (
//                               <p>
//                                 <FaYoutube /> {item.ADD_YOUTUBE}
//                               </p>
//                             )}
//                           </ContactInfo>
//                         </SlideText>
//                       </SlideContent>
//                     </SlideOverlay>
//                   </>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </CardsContainer>
//       )}
//     </PageWrapper>
//   );
// }

// export default BauLand;
