import { useState, useEffect, useRef } from "react";
import { InfoButton, TooltipBox, TooltipWrapper } from "./styles";

interface InfoTooltipProps {
  children: React.ReactNode;
}

export const InfoTooltip = ({ children }: InfoTooltipProps) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  let hoverTimeout: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setVisible(false);
    }, 150);
  };

  // Закриття при кліку поза тултіпом (на мобільних)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Відкриття при фокусі (Tab-перехід)
  const handleFocus = () => {
    setVisible(true);
  };

  const handleBlur = () => {
    // Закриває тултіп, якщо фокус пішов з кнопки
    hoverTimeout = setTimeout(() => {
      setVisible(false);
    }, 150);
  };

  return (
    <TooltipWrapper
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={wrapperRef}
    >
      <InfoButton
        ref={buttonRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        ?
      </InfoButton>
      <TooltipBox visible={visible}>{children}</TooltipBox>
    </TooltipWrapper>
  );
};
