import "./TaskContainer.css";
import TaskForm from "../TaskForm/TaskForm";
import { useState } from "react";
import { Task, addTask, changeStatus, deleteTask } from "../../types";
import TaskItem from "../TaskItem/TaskItem";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from "@chakra-ui/react";
import BackgroundSelector from "../BackgroundSelector/BackgroundSelector";

const TaskContainer = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [background, setBackground] = useState("");

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

  const changeBackground = (newBackground: string): void => {
    setBackground(newBackground);
  }

  const deleteTask: deleteTask = (taskId) => {
    const filter = tasksList.filter((task: Task) => task.id !== taskId);
    setTasksList(filter);
  };

  return (
    <Flex bg={background ? background : "#acafaf"} flexDirection="column" justify="space-between" maxH="100vh">
      <BackgroundSelector changeBackground={changeBackground} />
      <Box my="50px" mx="20px" h="100%" overflowY="auto">
        {tasksList.filter(task => {
          return !task.isCompleted
        }).map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} changeStatus={changeStatus} />
        ))}
        {
          tasksList.some(task => {
            return task.isCompleted
          }) &&
          <>
            <Accordion defaultIndex={[0]} allowMultiple borderColor="transparent">
              <AccordionItem>
                <h2>
                  <AccordionButton bg="#e9edf1" _hover={{ backgroundColor: "#e0e6ef" }}>
                    <AccordionIcon mr="8px" />
                    <Text>Completed</Text>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {tasksList.filter(task => {
                    return task.isCompleted
                  }).map((task) => (
                    <TaskItem key={task.id} task={task} deleteTask={deleteTask} changeStatus={changeStatus} />
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        }
      </Box>
      <TaskForm addTask={addTask} />
    </Flex >
  );
};

export default TaskContainer;
