import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCar, FaChartBar, FaEnvelope, FaSignOutAlt, FaHome } from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/admin", icon: <FaHome />, label: "لوحة التحكم" },
    { path: "/admin/cars", icon: <FaCar />, label: "إعلانات السيارات" },
    { path: "/admin/stats", icon: <FaChartBar />, label: "الإحصائيات" },
    { path: "/admin/complaints", icon: <FaEnvelope />, label: "الشكاوى" },
    { path: "/logout", icon: <FaSignOutAlt />, label: "تسجيل الخروج" },
  ];

  return (
    <aside
      style={{
        width: "230px",
        height: "100vh",
        background: "#1c1c1c",
        color: "#fff",
        paddingTop: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px", fontWeight: "bold", fontSize: "18px" }}>
        🛠️ الإدارة
      </div>

      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            color: location.pathname === item.path ? "#00d9ff" : "#fff",
            background: location.pathname === item.path ? "#333" : "transparent",
            textDecoration: "none",
            transition: "0.2s",
          }}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </aside>
  );
};

export default AdminSidebar;