import { useState } from "react";

function TaskEdit({task, onSubmit}){
    const [newTask, setTask] = useState(task.title);

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Old task is", task.title, "New task is", newTask);
        onSubmit(task.id, newTask); 
    }

    const handleClose = (event) => {
        event.preventDefault();
        onSubmit(task.id, task.title);
    }

    return <form className="task-edit">
        <div className="edit-cont">
            <div className="edit-field">
                <input className="edit-task" type="text" value={newTask} onChange={handleChange}/>
            </div>
            <div>
                <img className="save-btn" src="/check.svg" alt="save icon" onClick={handleSubmit}/>
                <img className="close-edit-btn" src="/red-close.svg" alt="cancel or close" onClick={handleClose}/>
            </div>
        </div>
    </form>
}

export default TaskEdit;