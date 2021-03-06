import React, { useState, useEffect } from "react";
import Update from "./Update";

function ToDo({ task, done, id, entries, setEntries }) {
  const [show, setShow] = useState(false);
  const [entry, setEntry] = useState(task);
  const [color, setColor] = useState("darkblue");

  useEffect(() => {
    let updatedEntries = [];
    entries.forEach((task) => {
      if (task.id === id) {
        task.entry = entry;
      }
      updatedEntries.push(task);
    });
    setEntries(updatedEntries);
  }, [entry]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checked = {
    class: "far fa-check-square",
    color: "green",
  };
  const unChecked = {
    class: "far fa-square",
    color: "rgb(187, 31, 31)",
  };
  const [checkbox, setCheckbox] = useState(done ? checked : unChecked);

  const handleCheckbox = () => {
    if (checkbox.color === unChecked.color) {
      setCheckbox(checked);
    } else {
      setCheckbox(unChecked);
    }
    let updatedEntries = [];
    entries.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      updatedEntries.push(task);
    });
    setEntries(updatedEntries);
  };

  const handleDelete = () => {
    const remainingEntries = entries.filter((entry) => entry.id !== id);
    setEntries(remainingEntries);
  };

  const changeColor = () => {
    setColor("white");
  };

  const changeBack = () => {
    setColor("darkblue");
  };

  const styles = {
    toDo: {
      border: "1px solid black",
      width: "75vw",
      minHeight: "60px",
      margin: "0 auto",
      marginTop: "2vh",
      backgroundColor: `${checkbox.color}`,
      color: "darkblue",
      paddingTop: "17px",
      boxShadow: "1px 1px 15px -3px black",
      borderRadius: "15px"
    },
    checkbox: {
      fontSize: "25px",
      cursor: "pointer",
    },
    entry: {
      cursor: "pointer",
      color: `${color}`,
    },
  };
  return (
    <div style={styles.toDo} className="row">
      <div className="col-2 col-md-1">
        <span
          className="far fa-trash-alt"
          style={styles.checkbox}
          onClick={handleDelete}
        />
      </div>
      <div className="col-8 col-md-10">
        <p
          className="text-center"
          onClick={handleShow}
          style={styles.entry}
          onMouseOver={changeColor}
          onMouseLeave={changeBack}
        >
          {entry}
        </p>
      </div>
      <div className="col-2 col-md-1 text-right">
        <span
          className={checkbox.class}
          style={styles.checkbox}
          onClick={handleCheckbox}
        />
      </div>
      <Update
        task={entry}
        show={show}
        handleClose={handleClose}
        setEntry={setEntry}
      />
    </div>
  );
}

export default ToDo;
