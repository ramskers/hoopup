import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check into the most popular Basketball Courts in Tampa Bay!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/AmericanLegion.jpeg"
              text="Plan your next pickup game at American Legion Park"
              label="Outdoor"
              path="/login"
            />
            <CardItem
              src="images/FosterPark.jpeg"
              text="Plan your next pickup game at Foster Park"
              label="Outdoor"
              path="/login"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/AmericanLegion.jpeg"
              text="Plan your next pickup game at American Legion Park"
              label="Outdoor"
              path="/login"
            />
            <CardItem
              src="images/FosterPark.jpeg"
              text="Plan your next pickup game at Foster Park"
              label="Outdoor"
              path="/login"
            />
            <CardItem
              src="images/CopelandPark.jpeg"
              text="Plan your next pickup game at Copeland Park and Center"
              label="Outdoor/Indoor"
              path="/login"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
