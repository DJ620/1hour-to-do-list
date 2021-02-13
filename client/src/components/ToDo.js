import React, { useState } from "react";
import Update from "./Update";

function ToDo({ task, entries, setEntries }) {
  const [show, setShow] = useState(false);
  const [entry, setEntry] = useState(task);
  const [color, setColor] = useState("darkblue");

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
  const [checkbox, setCheckbox] = useState(unChecked);

  const handleCheckbox = () => {
    if (checkbox.color === unChecked.color) {
      setCheckbox(checked);
    } else {
      setCheckbox(unChecked);
    }
  };

  const handleDelete = () => {
    const remainingEntries = entries.filter((entry) => entry !== task);
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
      width: "50vw",
      height: "60px",
      margin: "0 auto",
      marginTop: "2vh",
      backgroundColor: `${checkbox.color}`,
      color: "darkblue",
      paddingTop: "17px",
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
      <div className="col-1">
        <span
          className="far fa-trash-alt"
          style={styles.checkbox}
          onClick={handleDelete}
        />
      </div>
      <div className="col-10">
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
      <div className="col-1">
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
