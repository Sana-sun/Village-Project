import { HinweiseButton, HinweiseText } from "./styles";

export default function HinweiseBtn() {
  return (
    <div>
      <HinweiseButton href="mailto:roland@gefreiter.help">
        ✉️ Hinweise oder Änderungen schicken
      </HinweiseButton>

      <HinweiseText>
        — Sie haben Hinweise oder möchten Änderungen mitteilen?  
        Dann schreiben Sie bitte direkt an Bürgermeister{" "}
        <strong>Roland Gefreiter</strong>:{" "}
        <a href="mailto:roland@gefreiter.help">
          roland@gefreiter.help
        </a>
      </HinweiseText>
    </div>
  );
}
