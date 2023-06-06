import "./TaskItem.css";
import { Task } from "../../types";

const TaskItem = ({task}: {task: Task}) => {
  return (
    <div>
        <p>{task.name}</p>
    </div>
  )
}

export default TaskItem;
