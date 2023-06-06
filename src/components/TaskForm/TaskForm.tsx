import "./TaskForm.css";
import { addTask } from "../../types";
import { useState } from "react";

const TaskForm = ({ addTask }: { addTask: addTask }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({name: inputValue, isCompleted: false});
  }

  return (
    <form className="tasks-form" onSubmit={handleSubmit}>
      <label htmlFor="newTask">Create a new task</label>
      <input type="text" id="newTask" name="task" placeholder="Add task" onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  )
}

export default TaskForm;