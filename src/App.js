import React, { useState, useEffect } from "react";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("tasks"));
    if (savedEntries) {
      setEntries(savedEntries);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(entries));
  }, [entries]);

  return (
    <div>
      <h3 className="text-center">To Do List</h3>
      <CreateToDo setEntries={setEntries} entries={entries} />
      {entries.map((entry) => (
        <ToDo
          task={entry.entry}
          done={entry.done}
          id={entry.id}
          key={entry.id}
          entries={entries}
          setEntries={setEntries}
        />
      ))}
    </div>
  );
}

export default App;
