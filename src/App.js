import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🤓": "Nerd Face",
  "😌": "Relieved Face",
  "😪": "Sleepy Face",
  "🤥": "Lying Face",
  "😕": "Confused Face",
  "🥺": "Pleading Face",
  "😠": "Angry Face",
  "🤪": "Zany Face",
  "😏": "Smirking Face",
  "🥴": "Woozy Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandeler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it here";
    }
    setMeaning(meaning);
  }

  function emojiClickHandeler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandeler}></input>
      <h2> {meaning}</h2>
      <h3> emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandeler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
