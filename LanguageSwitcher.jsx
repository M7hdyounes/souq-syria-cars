import React from "react";

const LanguageSwitcher = ({ currentLang, onChangeLanguage }) => {
  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    onChangeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        backgroundColor: "#eee",
        border: "1px solid #ccc",
        padding: "6px 12px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        zIndex: 1000,
      }}
    >
      {currentLang === "ar" ? "English" : "عربي"}
    </button>
  );
};

export default LanguageSwitcher;