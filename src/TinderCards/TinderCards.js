import React, { useState, useEffect } from "react";
// import TinderCard from "./TinderCard/TinderCard";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tinder/cards")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("You swiped: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen: ");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((people) => (
          <TinderCard
            className="swipe"
            key={people.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, people.name)}
            onCardLeftScreen={() => outOfFrame(people.name)}
          >
            <div
              style={{ backgroundImage: `url(${people.imageUrl})` }}
              className="card"
            >
              <h3>{people.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
