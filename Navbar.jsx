import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ language }) => {
  const isArabic = language === "ar";

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#000",
      color: "#fff",
      direction: isArabic ? "rtl" : "ltr",
    },
    links: {
      display: "flex",
      gap: "15px",
      fontSize: "16px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
    },
    brand: {
      fontWeight: "bold",
      fontSize: "20px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>Souq Syria Cars</div>
      <div style={styles.links}>
        <Link style={styles.link} to="/">{isArabic ? "الرئيسية" : "Home"}</Link>
        <Link style={styles.link} to="/cars">{isArabic ? "عرض السيارات" : "View Cars"}</Link>
        <Link style={styles.link} to="/add">{isArabic ? "أضف سيارة" : "Add Car"}</Link>
        {/* يمكنك إضافة رابط لوحة التحكم هنا لاحقًا */}
      </div>
    </nav>
  );
};

export default Navbar;