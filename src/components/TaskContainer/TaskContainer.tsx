import "./TaskContainer.css";
import TaskForm from "../TaskForm/TaskForm";
import { useState } from "react";
import { Task } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

const TaskContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      name: "Nueva tarea",
      isCompleted: true
    }
  ]);

  const addTask = (newTask: Task): void => {
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
