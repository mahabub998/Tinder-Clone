import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SwipeButton from "./Components/SwipeButton/SwipeButton";
import TinderCards from "./TinderCards/TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  );
}

export default App;
