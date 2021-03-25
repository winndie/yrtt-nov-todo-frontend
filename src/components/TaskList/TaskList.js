import Task from '../Task/Task'
import './TaskList.css';

function TaskList({ tasks, status, deleteTask }) {
  return (
    <section className={`${status}-tasks`}>
        <h2 className="heading">Tasks {status==='complete'?'done':'to do'}:</h2>
        <ul className="task-list">
            { tasks.map(task => 
              <Task 
                id={ task.id} 
                text={ task.text} 
                key={ task.id } 
                complete={ task.completed }
                deleteTask={ deleteTask }/>)}
        </ul>
    </section>
  );
}

export default TaskList;