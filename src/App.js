import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Happy Face",
  "🤩": "Wow Face",
  "😎": "Sunglasses",
  "👽": "Alien",
  "👻": "Disappear",
  "🤖": "Robot"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Fun With emoji</h1>
      <input onChange={emojiClickHandler} />
      <h2>{meaning}</h2>

      <h3> Emoji we Know 👇 </h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
