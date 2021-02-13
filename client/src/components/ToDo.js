import React, { useState } from 'react';

function ToDo({task, entries, setEntries}) {
    const checked = {
        class: "far fa-check-square",
        color: "green"
    };
    const unChecked = {
        class: "far fa-square",
        color: "red"
    };
    const [checkbox, setCheckbox] = useState(unChecked);

    const handleCheckbox = () => {
        if (checkbox.color === unChecked.color) {
            setCheckbox(checked);
        } else {
            setCheckbox(unChecked);
        };
    };

    const handleDelete = () => {
        const remainingEntries = entries.filter(entry => entry !== task);
        setEntries(remainingEntries);
    };

    const styles = {
        toDo: {
            border: "1px solid black",
            width: "40vw",
            height: "7vh",
            margin: "0 auto",
            marginTop: "2vh",
            backgroundColor: `${checkbox.color}`,
            color: "darkblue",
            paddingTop: "2vh"
        },
        checkbox: {
            fontSize: "25px"
        }
    }
    return (
        <div style={styles.toDo} className="row">
            <div className="col-1">
                <span className="far fa-trash-alt" style={styles.checkbox} onClick={handleDelete}/>
            </div>
            <div className="col-10">
                <p className="text-center">{task}</p>
            </div>
            <div className="col-1">
                <span className={checkbox.class} style={styles.checkbox} onClick={handleCheckbox}/>
            </div>
        </div>
    )
}

export default ToDo;