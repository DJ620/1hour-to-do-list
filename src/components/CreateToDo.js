import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateToDo({setEntries, entries}) {
    const [entry, setEntry] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = uuidv4();
        const newEntry = { entry, id, done: false };
        setEntries([...entries, newEntry]);
        setEntry("");
    };

    const styles = {
        form: {
            textAlign: "center"
        },
        input: {
            width: "50vw",
            margin: "0 auto",
            boxShadow: "1px 1px 15px -8px black"
        },
        button: {
          boxShadow: "1px 1px 15px -5px black"
        }
    };

  return (
    <form style={styles.form}>
      <div className="form-group">
          <label for="newToDo">New entry:</label>
          <input 
            type="text" 
            className="form-control text-center" 
            placeholder="Enter task here" 
            style={styles.input}
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
      </div>
      <button type="submit" className="btn btn-primary" style={styles.button} onClick={handleSubmit}>Add to list</button>
    </form>
  );
}

export default CreateToDo;
