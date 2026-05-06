import React from "react";

const TaskItem = ({ task, deleteTask }) => {

    return ( <
        div className = "task-card" >
        <
        p > { task.title } < /p>

        <
        button onClick = {
            () => deleteTask(task.id) } >
        Delete <
        /button> <
        /div>
    );
};


export default React.memo(TaskItem);