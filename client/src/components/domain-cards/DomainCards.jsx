import React from "react";
import "./DomainCards.scss";
import CustomButton from "../custom-button/CustomButton";

function DomainCards({ cardname, title, text, certificatebutton }) {
  return (
    <div className={cardname}>
      <div className="title-containner">
        <h3>{title}</h3>
      </div>
      <div className="text-containner">
        <p>{text}</p>
      </div>
      <div className="certificate-button">
        <CustomButton varient="outlined" size="sm">
          {certificatebutton}
        </CustomButton>
      </div>
    </div>
  );
}

export default DomainCards;
