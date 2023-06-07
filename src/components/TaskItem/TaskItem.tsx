import "./TaskItem.css";
import { Task, changeStatus, deleteTask } from "../../types";

const TaskItem = ({ task, deleteTask, changeStatus }: { task: Task, deleteTask: deleteTask, changeStatus: changeStatus }) => {

  return (
    <div className="task" id={task.id}>
      <input type="checkbox" onChange={() => changeStatus(task.id)} />
      <p className={`${task.isCompleted ? "completed" : ""}`}>{task.name}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem;
