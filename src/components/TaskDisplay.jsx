import { useState } from "react";
import Modal from "react-overlays/Modal";
import TaskEdit from "./TaskEdit";
import Checkbox from "./CheckBox";

function TaskDisplay({task, onDelete, onEdit, onUpdate}) {
    const [showModal, setshowModal] = useState(false);

    const handleOff = () => setshowModal(false);

    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const handleDeleteClick= () =>{
        handleOff();
        onDelete(task.id);
    };
    const [showEdit, setShowEdit] = useState(false);

    const [showDisplayIcons, setShowDisplayIcons]= useState(true);

    const [isChecked, setIsChecked]= useState(false);

    const handleEditClick= () => {
        setShowEdit(!showEdit);
        setShowDisplayIcons(!showDisplayIcons);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
        setShowDisplayIcons(true);
    }

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
        // console.log(task.id, !isChecked);
        onUpdate(task.id, !isChecked);
    };

    let display = task.title;
    
    if (showEdit){
        display = <TaskEdit onSubmit={handleSubmit} task={task} />;
    }
    
    return <section className="container">
            <div className="task-list">
            <ul>
                <li className="task-dis">
                    <div className="task-check">
                    <Checkbox 
                        label={display} 
                        checked={isChecked} 
                        isChecked={isChecked}
                        onChange={handleCheckBoxChange}/>
                    </div>
                    {showDisplayIcons &&(
                        <div className="icons">
                            <img onClick={handleEditClick} src="/vite.svg" alt="edit" />
                            <img onClick={() => setshowModal(true)} src="/delete_icon.png" alt="delete" />
                        </div>
                    )}                        
                </li>
            </ul>
            </div>
            <Modal 
                className="modal"
                show={showModal}
                onHide={handleOff}
                renderBackdrop={renderBackdrop}>
                    <div className="delete-overlay">
                        <div className="confirm-cont">
                            <div className="confirm-msg">
                                <p>Confirm Delete?</p>
                            </div>
                            <div className="confirm-btn">
                                <button className="yes-btn" onClick={handleDeleteClick}>Yes</button>
                                <button className="no-btn" onClick={handleOff}>No</button>
                            </div>
                        </div>
                    </div>
            </Modal>
        </section>
}
export default TaskDisplay;