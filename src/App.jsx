import { useState } from 'react'
import TaskCreate from'./components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTaskById= (id) => {
    const updatedTasks = tasks.filter((task)=> {
      return task.id !== id; 
    });
    setTasks(updatedTasks);
  }

  const createTask = (task) => {
    const updatedTasks = [
      ...tasks, {id: Math.round(Math.random()* 9999), title:task}
    ];
    setTasks(updatedTasks);
  };

  const editTaskById= (id, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, title:newTitle} ;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const updateStatus= (id, status) =>{
    const updatedTasks = tasks.map((task) => {
      if (task.id === id){
        return {...task, done:status};
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const count_task = tasks.length > 1 ? "tasks" : "task";
  return (
    <>
    <div className="title">
            <h1>ToDo List</h1>
            <p>You have {tasks.length} {count_task}</p>
      </div>
      <section> 
        <TaskCreate onCreate={createTask} />
      </section>
      <section>
        <TaskList onUpdate={updateStatus} onEdit={editTaskById} tasks={tasks} onDelete={deleteTaskById} />
      </section>
    </>
  )
}

export default App
