import React, { useState } from "react";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";
import Update from "./components/Update";
import List from "./pages/List";

function App() {
  const [entries, setEntries] = useState([]);

  return (
    <div>
      <h1 className="text-center">To Do List</h1>
      <div className="row">
        <div className="col-6 border-right">
          {entries.map(entry => (
            <ToDo task={entry} key={entry} entries={entries} setEntries={setEntries}/>
          ))}
        </div>
        <div className="col-6">
        <CreateToDo setEntries={setEntries} entries={entries}/>
        </div>
      </div>
    </div>
  );
};

export default App;