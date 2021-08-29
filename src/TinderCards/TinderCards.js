import React, { useState } from "react";
// import TinderCard from "./TinderCard/TinderCard";
import "./TinderCards.css";
import TinderCard from 'react-tinder-card'

const data = [
  {
    name: "Elon Musk",
    url: "https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg?downsize=950:*&output-quality=80",
  },
  {
      name: "Jeff Bezoz", 
      url: "https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1020&quality=85&auto=format&fit=max&s=84b3809a8f8b840961c584a7d3585852",
    },
    {
      name: "mark zuckerberg", 
      url: "https://i.ytimg.com/vi/BmYv8XGl-YU/maxresdefault.jpg",
    },
]


function TinderCards() {
  const [people, setPeople] = useState([]);


  // const onSwipe = (direction) => {
  //   console.log('You swiped: ' + direction)
  // }
  const swiped = (direction,nameToDelete) => {
    console.log('You swiped: ' + nameToDelete)
  }
  
const outOfFrame = (name) => {
  console.log(name + "left the screen: ")
}
// const onCardLeftScreen = (myIdentifier) => {
//   console.log(myIdentifier + ' left the screen')
// }

  return (
    <div className="tinderCards">
    <div className="tinderCards__cardContainer">
    {
      data.map( (people) => (
       
        <TinderCard className="swipe"
        key={people.name}
        preventSwipe = {["up","down"]}
        onSwipe={ (dir) => swiped(dir,people.name)}
        onCardLeftScreen={ () => outOfFrame(people.name)}
        >
        <div style={{backgroundImage: `url(${people.url})`}}
         className="card"
        >
        <h3>{people.name}</h3>
        </div>
        </TinderCard>
      ))
    }

       
     
    </div>
   
      
     
    </div>
  );
}

export default TinderCards;
