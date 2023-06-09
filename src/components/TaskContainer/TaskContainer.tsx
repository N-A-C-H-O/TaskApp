import "./TaskContainer.css";
import TaskForm from "../TaskForm/TaskForm";
import { useState } from "react";
import { Task, addTask, changeStatus, deleteTask } from "../../types";
import TaskItem from "../TaskItem/TaskItem";
import { Box, Flex } from "@chakra-ui/react";

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
    <Flex bg="red" flexDirection="column" justify="space-between" maxH="100vh">
      <Box bg="yellowgreen" my="50px" mx="20px" h="100%" overflowY="auto">
        {tasksList.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} changeStatus={changeStatus} />
        ))}
      </Box>
      <TaskForm addTask={addTask} />
    </Flex>
  );
};

export default TaskContainer;
