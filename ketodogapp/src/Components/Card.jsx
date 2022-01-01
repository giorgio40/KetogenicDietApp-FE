import React from "react";
import "../CSS/card.css";
export default function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <p>{props.description} </p>
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
