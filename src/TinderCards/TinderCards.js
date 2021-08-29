import React, { useState } from "react";
import TinderCard from "./TinderCard/TinderCard";
import "./TinderCards.css";
// import TinderCard from "react-tinder-card";

const data = [
    {
        name: "Elon Musk",
        url: "https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg?downsize=950:*&output-quality=80",
      },
      {
          name: "Jeff Bezoz", 
          url: "https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1619769761",
        },
]


function TinderCards() {
  const [people, setPeople] = useState([]);

  const swiped = (direction ,nametoDate) => {
    //   console.log("removing: "+ nameToDelete)
    //   setLastDirection(direction);
  }

  const outOfFrame = (name) => {
      console.log(name + "Left the screen")
  }
  return (
    <div className="tinderCards">
    <div className="tinderCards__cardContainer">
    {data.map((parson) => (
        <TinderCard className="swipe"
        key={parson.name}
        preventSwipe={["up","down"]}
        onSwipe={(dir) => swiped(dir.parson.name)}
        onCardLeftScreen={ () => outOfFrame(parson.name)}
        >
        <div style={{backgroundImage: `url(${parson.url})`}}
         className="card"
         
         >
        <h3>{parson.name}</h3>
        </div>
        </TinderCard>
       
      ))}
    </div>

     
    </div>
  );
}

export default TinderCards;
