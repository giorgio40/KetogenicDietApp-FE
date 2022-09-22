import React from "react";
import "../CSS/card.css";
export default function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img className="image" src={props.imgsrc} alt="" />
        </div>
        <div className="card-title-container">
          <h3 className="card-title">{props.title}</h3>
        </div>
        <div className="card-body">
          <p className="card-paragraph">{props.description} </p>
        </div>
        <div className="link-butn-container">
          <button className="link-button">
            <a  className="anchor" href={props.link}>
              {props.text}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
