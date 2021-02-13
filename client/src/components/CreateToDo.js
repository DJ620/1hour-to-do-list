import React, { useState } from "react";

function CreateToDo({setEntries, entries}) {
    const [entry, setEntry] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setEntries([...entries, entry]);
        setEntry("");
    };

    const styles = {
        form: {
            textAlign: "center"
        },
        input: {
            width: "600px",
            margin: "0 auto"
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
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add to list</button>
    </form>
  );
}

export default CreateToDo;
