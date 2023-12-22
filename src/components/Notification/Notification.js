import React from "react";
import "./notification-box.css";

const Notification = ({ message, variant }) => {
  let textColor;
  variant === "error"
    ? (textColor = "#af2929")
    : variant === "info"
    ? (textColor = "#343469d3")
    : (textColor = "#423e3e");

  return (
    <div className="wrapper">
      <div>
        <p style={{ color: textColor }} className="message">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Notification;
