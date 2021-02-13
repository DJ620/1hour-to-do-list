import React, { useState } from "react";

function CreateToDo() {
    const [entry, setEntry] = useState("");

    const styles = {
        input: {
            width: "800px"
        }
    }
  return (
    <form>
      <div className="form-group">
          <label for="newToDo">New entry:</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter task here" 
            style={styles.input}
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
      </div>
    </form>
  );
}

export default CreateToDo;
