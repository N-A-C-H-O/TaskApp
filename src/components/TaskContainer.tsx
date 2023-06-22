import TaskForm from "./TaskForm";
import { useState } from "react";
import { Task, AddTask, ChangeBackground, ChangeStatus, DeleteTask } from "../types";
import TaskItem from "./TaskItem";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from "@chakra-ui/react";
import TaskNavbar from "./TaskNavbar";

const TaskContainer = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [background, setBackground] = useState("");

  const addTask: AddTask = (newTask) => {
    setTasksList([...tasksList, newTask]);
  };

  const changeStatus: ChangeStatus = (taskId) => {
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

  const changeBackground: ChangeBackground = (newBackground) => {
    setBackground(newBackground);
  };

  const deleteTask: DeleteTask = (taskId) => {
    const filter = tasksList.filter((task: Task) => task.id !== taskId);
    setTasksList(filter);
  };

  return (
    <Flex bg={background ? background : "#acafaf"} flexDirection="column" justify="space-between" maxH="100vh">
      <TaskNavbar changeBackground={changeBackground} />
      <Box my="50px" mx="20px" h="100%" overflowY="auto">
        {tasksList
          .filter((task) => {
            return !task.isCompleted;
          })
          .map((task) => (
            <TaskItem key={task.id} task={task} deleteTask={deleteTask} changeStatus={changeStatus} />
          ))}
        {tasksList.some((task) => {
          return task.isCompleted;
        }) && (
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
                  {tasksList
                    .filter((task) => {
                      return task.isCompleted;
                    })
                    .map((task) => (
                      <TaskItem key={task.id} task={task} deleteTask={deleteTask} changeStatus={changeStatus} />
                    ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        )}
      </Box>
      <TaskForm addTask={addTask} />
    </Flex>
  );
};

export default TaskContainer;
