import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
        backgroundColor: "#fff",
      }}
    >
      <Link to={`/car/${car.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div style={{ height: "180px", overflow: "hidden" }}>
          <img
            src={car.images && car.images[0] ? car.images[0] : "/default-car.jpg"}
            alt={car.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ padding: "16px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
            {car.make} {car.model} ({car.year})
          </h3>
          <p style={{ margin: "4px 0", color: "#555" }}>🚗 {car.city}</p>
          <p style={{ margin: "4px 0", color: "#555" }}>⛽ {car.fuel}</p>
          <p style={{ margin: "4px 0", color: "#333", fontWeight: "bold" }}>{car.price} $</p>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;