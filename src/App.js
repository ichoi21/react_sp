import React from "react";

import Authed from "./components/Authed";
import NotAuthed from "./components/NotAuthed";
import ListItem from "./components/ListItem";

import "./App.css";

function App() {
  const auth = true;

  const arrayForFun = [1, 2, 3, 4, 5];

  console.log(arrayForFun);

  return (
    <div className="App">
      {auth ? <Authed /> : <NotAuthed />}
      <ul>
        {arrayForFun.map((num, id) => (
          <ListItem key={id} passedNumber={num} anotherProp={num * 2} />
        ))}
      </ul>
    </div>
  );
}

export default App;
