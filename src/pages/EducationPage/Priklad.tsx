import React from "react";

function Priklad() {
  const handleCreateMarkdown = () => {
    const content = "# Новий Markdown файл\n\nВаш текст тут...";
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "new-file.md"; // Назва створеного файлу
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h2>Створення Markdown-файлу</h2>
      <button onClick={handleCreateMarkdown}>Створити Markdown файл</button>
    </div>
  );
}

export default Priklad;
