import "./TaskContainer.css";
import TaskForm from "../TaskForm/TaskForm";
import { useState } from "react";
import { Task, addTask, changeStatus, deleteTask } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

const TaskContainer = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const addTask: addTask = (newTask) => {
    setTasksList([...tasksList, newTask]);
  };

  const changeStatus: changeStatus = (taskId) => {
    setTasksList((prevTasksList) => {
      return prevTasksList.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
    });
  };

  const deleteTask: deleteTask = (taskId) => {
    const filter = tasksList.filter((task: Task) => task.id !== taskId);
    setTasksList(filter);
  };

  return (
    <div className="tasks-container">
      <div className="task-list bg-black">
        {tasksList.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} changeStatus={changeStatus} />
        ))}
      </div>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default TaskContainer;
