import React, { useState } from "react";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";

function App() {
  const [entries, setEntries] = useState([]);

  return (
    <div>
      <h1 className="text-center">To Do List</h1>
      <CreateToDo setEntries={setEntries} entries={entries} />
      {entries.map((entry) => (
        <ToDo
          task={entry}
          key={entry}
          entries={entries}
          setEntries={setEntries}
        />
      ))}
    </div>
  );
}

export default App;
