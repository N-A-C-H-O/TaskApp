import "./TaskForm.css";
import { Task } from "../../types";

const TaskForm = ({ addTask }: { addTask: (newTask: Task) => void }) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskInput = (e.target as HTMLFormElement).elements.namedItem("task") as HTMLInputElement;
    const task: string = taskInput.value;

    addTask({name: task, isCompleted: false});
  }

  return (
    <form className="tasks-form" onSubmit={handleSubmit}>
      <label htmlFor="newTask">Create a new task</label>
      <input type="text" id="newTask" name="task" placeholder="Add task" />
      <button type="submit">Create</button>
    </form>
  )
}

export default TaskForm;