import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="card--image_wrapper">
        <img src={`./images/${props.country.img}`} className="card--image" />
      </div>
      <div className="card--details">
        <p className="card--location">
          <img src="./images/location.png" className="location--logo" />
          {props.country.name}
          <a
            href={props.country.link}
            className="location--link"
            target="_blank"
          >
            View on Google Maps
          </a>
        </p>
        <h1 className="card--city">{props.country.city}</h1>
        <p className="card--date">
          {props.country.startDate} - {props.country.endDate}
        </p>
        <p className="card--text">{props.country.text}</p>
      </div>
    </div>
  );
}
