import React, { useEffect } from "react";

const Notification = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 3000); // الإشعار يختفي بعد 3 ثوانٍ
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    container: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: type === "success" ? "#4caf50" : "#f44336",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      fontSize: "15px",
      zIndex: 9999,
      transition: "opacity 0.3s ease",
    },
  };

  return <div style={styles.container}>{message}</div>;
};

export default Notification;