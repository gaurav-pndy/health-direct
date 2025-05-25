import React from "react";
import "./ListItem.css";

const ListItem = ({ item }) => (
  <div className="list-itemm">
    <div className="list-item-row">
      <h3 className="list-item-title">
        {item.doctor ? item.doctor : item.service}
      </h3>
      <div className="list-item-datetime">
        <p className="list-item-datetime-text">
          {item.date} <span className="datetime-separator">| </span>
          <br className="datetime-break" />
          {item.time}
        </p>
      </div>
    </div>
  </div>
);

export default ListItem;
