import "./TaskItem.css";
import { Task, deleteTask } from "../../types";

const TaskItem = ({ task, deleteTask }: { task: Task, deleteTask: deleteTask }) => {

  return (
    <div className="task" id={task.id}>
      <p>{task.name}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem;
