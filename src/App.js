import React, { useState } from "react";
import "./styles.css";
let todolist = [];
export default function App() {
  let [todoitem, settodoitem] = useState("");
  let [deletelist, setdeletelist] = useState("");
  function addtodos() {
    let item = document.getElementById("input").value;
    if (item !== "") {
      todoitem = item;
      todolist.push(todoitem);
      settodoitem(item);
    }
    document.getElementById("input").value = "";
  }
  function deleteitemhandler(index) {
    setdeletelist(todolist.splice(index, 1));
    console.log(deletelist);
  }

  // console.log(todolist);
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <input id="input"></input>
      <button className="add" onClick={addtodos}>
        Add
      </button>
      <ul>
        {todolist.map(function (value, index) {
          return (
            <li key={index}>
              <span className="counting">{index + 1}</span> {value}
              <button
                onClick={() => deleteitemhandler(index)}
                className="delete"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
