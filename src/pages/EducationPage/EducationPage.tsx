// import introText from "./intro.md?raw";
// import ReactMarkdown from "react-markdown";
// import YourAreHere from "../../components/YourAreHere/YouAreHere";
// import {
//   IntroWrapper,
// } from "./styles";

// function EducationPage() {

//   return (
//     <>
//       <YourAreHere />

//       <IntroWrapper>
//         <ReactMarkdown>{introText}</ReactMarkdown>
//       </IntroWrapper>

//     </>
//   );
// }

// export default EducationPage;

// import YourAreHere from "../../components/YourAreHere/YouAreHere";
// import { IntroWrapper } from "./styles";

// function EducationPage() {
//   return (
//     <>
//       <YourAreHere />

//       <IntroWrapper>
//         Text here
//       </IntroWrapper>
//     </>
//   );
// }

// export default EducationPage;



// 3
// import { useEffect, useState } from "react";
// import YourAreHere from "../../components/YourAreHere/YouAreHere";
// import { IntroWrapper } from "./styles";

// function EducationPage() {
//   const [text, setText] = useState("");

//   // Читання з localStorage при завантаженні
//   useEffect(() => {
//     const savedText = localStorage.getItem("educationPageText");
//     if (savedText) {
//       setText(savedText);
//     }
//   }, []);

//   // Збереження в localStorage при зміні
//   useEffect(() => {
//     localStorage.setItem("educationPageText", text);
//   }, [text]);

//   return (
//     <>
//       <YourAreHere />

//       <IntroWrapper>
//         <textarea
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           rows={6}
//           style={{ width: "100%", padding: "1rem", fontSize: "16px" }}
//         />
//         <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
//           {text}
//         </div>
//       </IntroWrapper>
//     </>
//   );
// }

// export default EducationPage;


// 4
import { useEffect, useState } from "react";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import { IntroWrapper } from "./styles";

function EducationPage() {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Читаємо з localStorage при завантаженні сторінки
  useEffect(() => {
    const savedText = localStorage.getItem("educationPageText");
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // Зберігаємо в localStorage вручну
  const handleSave = () => {
    localStorage.setItem("educationPageText", text);
    setIsEditing(false);
  };

  return (
    <>
      <YourAreHere />

      <IntroWrapper>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={!isEditing}
          rows={6}
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "16px",
            backgroundColor: isEditing ? "white" : "#f0f0f0",
            border: "1px solid #ccc",
            resize: "vertical"
          }}
        />

        <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)}>Редагувати</button>
          ) : (
            <button onClick={handleSave}>Зберегти</button>
          )}
        </div>
      </IntroWrapper>
    </>
  );
}

export default EducationPage;
