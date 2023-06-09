import "./TaskItem.css";
import { Task, changeStatus, deleteTask } from "../../types";
import { Button, Checkbox, Flex } from "@chakra-ui/react";

const TaskItem = ({ task, deleteTask, changeStatus }: { task: Task, deleteTask: deleteTask, changeStatus: changeStatus }) => {

  const styleCompleted = {
    textDecoration: "line-through",
    color: "blue"
  }

  return (
    <Flex id={task.id} bg="blue.100" justify="space-between" align="center" py="10px" px="15px" m="10px" rounded="7px">
      <Checkbox onChange={() => changeStatus(task.id)} style={task.isCompleted ? styleCompleted : {}} >{task.name}</Checkbox>
      <Button onClick={() => deleteTask(task.id)}>Delete</Button>
    </Flex>
  )
}

export default TaskItem;
