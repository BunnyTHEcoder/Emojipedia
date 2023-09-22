import React from "react";
import Emojipedia from "../emojipedia";
import Card from "./Card";
function CreateCard(con) {
  return (
    <Card
      key={con.id}
      emoji={con.emoji}
      name={con.name}
      meaning={con.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(CreateCard)};</dl>
    </div>
  );
}

export default App;
