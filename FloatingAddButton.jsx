import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaCarSide } from "react-icons/fa";

const FloatingAddButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-car");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        cursor: "pointer",
        zIndex: 1000,
        fontSize: "20px",
      }}
      title="أضف سيارة"
    >
      <FaCarSide style={{ marginRight: "2px" }} />
      <FaPlus />
    </button>
  );
};

export default FloatingAddButton;