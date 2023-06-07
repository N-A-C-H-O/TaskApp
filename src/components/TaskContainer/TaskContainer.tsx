import "./TaskContainer.css";
import TaskForm from "../TaskForm/TaskForm";
import { useState } from "react";
import { Task, addTask, deleteTask } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

const TaskContainer = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const addTask: addTask = (newTask) => {
    setTasksList([...tasksList, newTask]);
  }

  const deleteTask: deleteTask = (taskId) => {
    const filter = tasksList.filter((task: Task) => task.id !== taskId);
    setTasksList(filter);
  }

  return (
    <div className="tasks-container">
      <div className="task-list">
        {
          tasksList.map(task => <TaskItem key={task.id} task={task} deleteTask={deleteTask} />)
        }
      </div>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default TaskContainer;
