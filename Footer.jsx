import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <div>
        <h3 style={{ margin: "0", fontSize: "18px" }}>Souq Syria Cars</h3>
        <p style={{ margin: "4px 0" }}>سوق سوريا لبيع وشراء السيارات</p>
        <p style={{ fontSize: "12px", marginTop: "8px" }}>
          جميع الحقوق محفوظة &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;