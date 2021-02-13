import React, { useState } from 'react';

function ToDo({toDo = "Task goes here"}) {
    const checked = "far fa-check-square";
    const unChecked = "far fa-square";
    const [checkbox, setCheckbox] = useState(unChecked);

    const handleCheckbox = () => {
        if (checkbox === unChecked) {
            setCheckbox(checked);
        } else {
            setCheckbox(unChecked);
        };
    };

    const styles = {
        toDo: {
            border: "1px solid black",
            width: "40vw",
            height: "7vh",
            margin: "0 auto",
            backgroundColor: "green",
            color: "darkblue",
            paddingTop: "2vh"
        },
        checkbox: {
            fontSize: "25px"
        }
    }
    return (
        <div style={styles.toDo} className="row">
            <div className="col-11">
                <p className="text-center">{toDo}</p>
            </div>
            <div className="col-1">
                <span className={checkbox} style={styles.checkbox} onClick={handleCheckbox}/>
            </div>
        </div>
    )
}

export default ToDo;