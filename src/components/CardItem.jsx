import React from "react";
import "./CardItem.css";

const CardItem = ({ item }) => (
  <div className="card-item">
    <h3 className="card-title">{item.doctor ? item.doctor : item.service}</h3>
    <div className="card-details">
      <p className="card-date-time">{item.date}</p>
      <p className="card-date-time">{item.time}</p>
    </div>
  </div>
);

export default CardItem;
