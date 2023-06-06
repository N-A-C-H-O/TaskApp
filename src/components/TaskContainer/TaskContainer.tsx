import "./TaskContainer.css";
import TaskForm from "../TaskForm/TaskForm";
import { useState } from "react";
import { Task, addTask } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

const TaskContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask: addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="tasks-container">
      <div className="task-list">
        {
          tasks.map(task => <TaskItem task={task} />)
        }
      </div>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default TaskContainer;
